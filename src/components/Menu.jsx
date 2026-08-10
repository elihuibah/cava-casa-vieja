import { forwardRef, useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip-enhanced";
import { FoodMenuLeft } from "./FoodMenuLeft";
import { FoodMenuRight } from "./FoodMenuRight";
import { DrinkMenu1Left } from "./DrinkMenu1Left";
import { DrinkMenu1Right } from "./DrinkMenu1Right";
import { DrinkMenu2Left } from "./DrinkMenu2Left";
import { DrinkMenu2Right } from "./DrinkMenu2Right";

function CornerMarks() {
  return (
    <>
      <span className="absolute top-3 left-3 w-8 h-8 border-t-3 border-l-3 border-amber-800/50 pointer-events-none" />
      <span className="absolute top-3 right-3 w-8 h-8 border-t-3 border-r-3 border-amber-800/50 pointer-events-none" />
      <span className="absolute bottom-3 left-3 w-8 h-8 border-b-3 border-l-3 border-amber-800/50 pointer-events-none" />
      <span className="absolute bottom-3 right-3 w-8 h-8 border-b-3 border-r-3 border-amber-800/50 pointer-events-none" />
    </>
  );
}

const Page = forwardRef(({ children, divider }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative w-full h-full bg-stone-100 shadow-2xl p-6 md:p-8 overflow-y-auto text-base ${divider === "right" ? "border-r border-stone-400" : ""}`}
    >
      <CornerMarks />
      {children}
    </div>
  );
});

export function Menu({ bookRef, onPageChange }) {
  const containerRef = useRef(null);
  const [pageSize, setPageSize] = useState({ width: 450, height: 625 });
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 6;

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const totalWidth = Math.min(containerRef.current.offsetWidth, 1200);
      const singlePageWidth = totalWidth / 2;
      const height = singlePageWidth * 1.1875;
      setPageSize({ width: singlePageWidth, height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleFlip = (e) => {
    setCurrentPage(e.data);
    onPageChange?.(e.data);
  };

  const canGoBack = currentPage > 0;
  const canGoForward = currentPage < totalPages - 2;
  const goPrev = () => bookRef.current?.pageFlip()?.flipPrev();
  const goNext = () => bookRef.current?.pageFlip()?.flipNext();

  return (
    <div ref={containerRef} className="relative w-full">
      <HTMLFlipBook
        width={pageSize.width}
        height={pageSize.height}
        showCover={false}
        usePortrait={false}
        mobileScrollSupport={true}
        flippingTime={450}
        onFlip={handleFlip}
        className="mx-auto"
        ref={bookRef}
      >
        <Page divider="right">
          <FoodMenuLeft />
        </Page>
        <Page>
          <FoodMenuRight />
        </Page>
        <Page divider="right">
          <DrinkMenu1Left />
        </Page>
        <Page>
          <DrinkMenu1Right />
        </Page>
        <Page divider="right">
          <DrinkMenu2Left />
        </Page>
        <Page>
          <DrinkMenu2Right />
        </Page>
      </HTMLFlipBook>

      <button
        onClick={goPrev}
        aria-label="Página anterior"
        className={`cursor-pointer absolute top-1/2 -translate-y-3/4 -left-4 md:-left-20 w-16 flex justify-center text-8xl font-serif font-light text-stone-100/80 hover:text-stone-50 transition-opacity duration-300 ease-in-out ${canGoBack ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        ‹
      </button>
      <button
        onClick={goNext}
        aria-label="Página siguiente"
        className={`cursor-pointer absolute top-1/2 -translate-y-3/4 -right-4 md:-right-20 w-16 flex justify-center text-8xl font-serif font-light text-stone-100/80 hover:text-stone-50 transition-opacity duration-300 ease-in-out ${canGoForward ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        ›
      </button>
      <div className="text-stone-100 italic relative z-10 text-left mt-6">
        <p>*Precios sujetos a cambios</p>
        <p>**Precios desglosados en moneda mexicana (MXN) y con IVA incluido</p>
      </div>
    </div>
  );
}
