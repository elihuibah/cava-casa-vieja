import { forwardRef, useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip-enhanced";
import { FoodMenuLeft } from "./FoodMenuLeft";
import { FoodMenuRight } from "./FoodMenuRight";
import { DrinkMenu1Left } from "./DrinkMenu1Left";
import { DrinkMenu1Right } from "./DrinkMenu1Right";
import { DrinkMenu2Left } from "./DrinkMenu2Left";
import { DrinkMenu2Right } from "./DrinkMenu2Right";

function CornerMarks() {
  <>
    <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-amber-800/50 pointer-events-none" />
    <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-amber-800/50 pointer-events-none" />
    <span className="absolute bottom-3 left-3 w-4 h-4 border-t border-l border-amber-800/50 pointer-events-none" />
    <span className="absolute bottom-3 right-3 w-4 h-4 border-t border-r border-amber-800/50 pointer-events-none" />
  </>;
}

const Page = forwardRef(({ children, divider }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative w-full h-full bg-stone-100 shadow-2xl p-8 md:p-10 overflow-y-auto ${divider === "right" ? "border-r border-stone-400" : ""}`}
    >
      <CornerMarks />
      {children}
    </div>
  );
});

export function Menu({ bookRef }) {
  const containerRef = useRef(null);
  const [pageSize, setPageSize] = useState({ width: 450, height: 650 });

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const totalWidth = Math.min(containerRef.current.offsetWidth, 1300);
      const singlePageWidth = totalWidth / 2;
      const height = singlePageWidth / 1.55;
      setPageSize({ width: singlePageWidth, height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <HTMLFlipBook
        width={pageSize.width}
        height={pageSize.height}
        showCover={false}
        mobileScrollSupport={true}
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
    </div>
  );
}
