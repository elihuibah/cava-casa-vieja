import { useEffect, useRef, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(20);
  const [visible, setVisible] = useState(false);
  const hideTimeout = useRef(null);

  useEffect(() => {
    const calcThumb = () => {
      const docHeight = document.documentElement.scrollHeight;
      const pct = (window.innerHeight / docHeight) * 100;
      setThumbHeight(Math.max(pct, 6));
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? scrollTop / maxScroll : 0;
      setProgress(pct);
      setVisible(true);

      clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => setVisible(false), 1200);
    };

    calcThumb();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", calcThumb);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calcThumb);
      clearTimeout(hideTimeout.current);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-1.5 h-screen w-1.5 z-9999 pointer-events-none transition-opacity duration-700 ease-in-out ${
        visible ? "opacity-60" : "opacity-0"
      }`}
    >
      <div
        className="absolute w-full bg-amber-900 rounded-full transition-[top] duration-100 ease-out"
        style={{
          height: `${thumbHeight}%`,
          top: `${progress * (100 - thumbHeight)}%`,
        }}
      />
    </div>
  );
}
