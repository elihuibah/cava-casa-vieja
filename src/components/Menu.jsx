import { forwardRef, useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip-enhanced";
import { useLanguage } from "../context/useLanguage";
import { FoodMenuLeft } from "./FoodMenuLeft";
import { FoodMenuRight } from "./FoodMenuRight";
import { DrinkMenu1Left } from "./DrinkMenu1Left";
import { DrinkMenu1Right } from "./DrinkMenu1Right";
import { DrinkMenu2Left } from "./DrinkMenu2Left";
import { DrinkMenu2Right } from "./DrinkMenu2Right";

// Left/right pairs: Food, Drinks 1, Drinks 2.
const pages = [
  FoodMenuLeft,
  FoodMenuRight,
  DrinkMenu1Left,
  DrinkMenu1Right,
  DrinkMenu2Left,
  DrinkMenu2Right,
];

// Shared by the real pages and their invisible measuring copies, so both lay
// out identically. `@container` lets page content react to the page's width
// (`@sm:`) instead of the window's (`sm:`).
const pageClass =
  "@container relative w-full bg-stone-100 p-6 md:p-8 text-base text-left";

// The open book (two pages) needs ≥ 1024px; below that, one page at a time.
const SPREAD_QUERY = "(min-width: 1024px)";
// A single page wider than this looks stretched on tablets.
const MAX_SINGLE_WIDTH = 520;

function CornerMarks() {
  return (
    <span aria-hidden="true">
      <span className="absolute top-3 left-3 w-8 h-8 border-t-3 border-l-3 border-amber-800/50 pointer-events-none" />
      <span className="absolute top-3 right-3 w-8 h-8 border-t-3 border-r-3 border-amber-800/50 pointer-events-none" />
      <span className="absolute bottom-3 left-3 w-8 h-8 border-b-3 border-l-3 border-amber-800/50 pointer-events-none" />
      <span className="absolute bottom-3 right-3 w-8 h-8 border-b-3 border-r-3 border-amber-800/50 pointer-events-none" />
    </span>
  );
}

const Page = forwardRef(({ children, divider }, ref) => {
  return (
    <div
      ref={ref}
      className={`${pageClass} h-full overflow-hidden shadow-2xl ${divider ? "border-r border-stone-400" : ""}`}
    >
      <CornerMarks />
      {children}
    </div>
  );
});

export function Menu({ bookRef, onPageChange }) {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [isSpread, setIsSpread] = useState(
    () => window.matchMedia(SPREAD_QUERY).matches,
  );
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = pages.length;

  // Only the width matters. Listening to window resizes would also react to
  // the mobile address bar showing/hiding while scrolling.
  useEffect(() => {
    const observer = new ResizeObserver(([entry]) =>
      setContainerWidth(Math.floor(entry.contentRect.width)),
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(SPREAD_QUERY);
    const handleModeChange = () => {
      setIsSpread(mq.matches);
      // A spread always starts on an even (left) page.
      if (mq.matches) {
        setCurrentPage((page) => {
          const left = page - (page % 2);
          onPageChange?.(left);
          return left;
        });
      }
    };
    mq.addEventListener("change", handleModeChange);
    return () => mq.removeEventListener("change", handleModeChange);
  }, [onPageChange]);

  const pageWidth = isSpread
    ? Math.floor(Math.min(containerWidth, 1024) / 2)
    : Math.min(containerWidth, MAX_SINGLE_WIDTH);

  // The book is as tall as its longest page, so no page needs an inner
  // scrollbar (on touch screens that scroll trapped the swipe meant for the
  // page). Re-measured when the width, the language or the fonts change.
  useEffect(() => {
    const measurer = measureRef.current;
    if (!measurer) return;
    const measure = () =>
      setContentHeight(
        Math.ceil(
          Math.max(...[...measurer.children].map((el) => el.offsetHeight)),
        ),
      );
    const observer = new ResizeObserver(measure);
    [...measurer.children].forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pageWidth]);

  // Keep the page proportions from the design when the content is shorter.
  const pageHeight = Math.max(
    Math.round(pageWidth * (isSpread ? 1.1875 : 1.25)),
    contentHeight,
  );

  const handleFlip = (e) => {
    setCurrentPage(e.data);
    onPageChange?.(e.data);
  };

  const canGoBack = currentPage > 0;
  const canGoForward = currentPage < totalPages - (isSpread ? 2 : 1);
  const goPrev = () => bookRef.current?.pageFlip()?.flipPrev();
  const goNext = () => bookRef.current?.pageFlip()?.flipNext();

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Invisible copies of the pages at the real page width, used only to
          measure how tall the book has to be. */}
      <div
        ref={measureRef}
        aria-hidden="true"
        inert
        className="absolute top-0 left-0 h-0 overflow-hidden invisible pointer-events-none"
        style={{ width: pageWidth }}
      >
        {pages.map((Content, i) => (
          <div key={i} className={pageClass}>
            <Content />
          </div>
        ))}
      </div>

      {/* PageFlip only reads its size/mode settings on init, so the key
          remounts it whenever they change; startPage keeps the reader on the
          page they were on. */}
      {pageWidth > 0 && contentHeight > 0 && (
        <HTMLFlipBook
          key={`${isSpread ? "spread" : "single"}-${pageWidth}x${pageHeight}`}
          width={pageWidth}
          height={pageHeight}
          startPage={currentPage}
          showCover={false}
          usePortrait={false}
          singlePage={!isSpread}
          mobileScrollSupport={true}
          flippingTime={450}
          onFlip={handleFlip}
          className="mx-auto"
          ref={bookRef}
        >
          {pages.map((Content, i) => (
            <Page key={i} divider={isSpread && i % 2 === 0}>
              <Content />
            </Page>
          ))}
        </HTMLFlipBook>
      )}

      <button
        onClick={goPrev}
        aria-label={t("menu.prevPage")}
        className={`cursor-pointer hidden xl:flex absolute top-1/2 -translate-y-3/4 -left-20 w-16 justify-center text-8xl font-serif font-light text-stone-100/80 hover:text-stone-50 transition-opacity duration-300 ease-in-out ${canGoBack ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        ‹
      </button>
      <button
        onClick={goNext}
        aria-label={t("menu.nextPage")}
        className={`cursor-pointer hidden xl:flex absolute top-1/2 -translate-y-3/4 -right-20 w-16 justify-center text-8xl font-serif font-light text-stone-100/80 hover:text-stone-50 transition-opacity duration-300 ease-in-out ${canGoForward ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        ›
      </button>

      <div
        className="xl:hidden flex items-center justify-between mx-auto mt-4 text-stone-100"
        style={{ maxWidth: isSpread ? undefined : pageWidth }}
      >
        <button
          onClick={goPrev}
          aria-label={t("menu.prevPage")}
          className={`cursor-pointer w-12 h-12 text-5xl leading-none font-serif font-light transition-opacity duration-300 ${canGoBack ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          ‹
        </button>
        {/* aria-live: screen readers announce the new page after a flip. */}
        <span aria-live="polite" className="font-serif text-lg">
          {isSpread
            ? `${currentPage + 1}–${currentPage + 2}`
            : currentPage + 1}{" "}
          / {totalPages}
        </span>
        <button
          onClick={goNext}
          aria-label={t("menu.nextPage")}
          className={`cursor-pointer w-12 h-12 text-5xl leading-none font-serif font-light transition-opacity duration-300 ${canGoForward ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          ›
        </button>
      </div>

      <div
        className="text-stone-100 italic relative z-10 text-left mx-auto mt-6"
        style={{ maxWidth: isSpread ? undefined : pageWidth }}
      >
        <p>{t("menu.pricesNote")}</p>
        <p>{t("menu.currencyNote")}</p>
      </div>
    </div>
  );
}
