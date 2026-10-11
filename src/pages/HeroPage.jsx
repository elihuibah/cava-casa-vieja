import { useState, useEffect } from "react";
import { RevealEffect } from "../components/RevealEffect";
import { useLanguage } from "../context/useLanguage";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpeg";
import hero4 from "../assets/hero4.jpg";
import wine from "../assets/wine-bottle.png";

const heroImages = [hero1, hero2, hero3, hero4];

export function HeroPage() {
  const { t } = useLanguage();
  const [slide, setSlide] = useState({ current: 0, previous: null });

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(({ current }) => ({
        previous: current,
        current: (current + 1) % heroImages.length,
      }));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // The incoming image always fades in on top of the previous one, which stays
  // opaque underneath. Relying on DOM order instead made the last→first
  // transition fade the top image out rather than the new one in.
  const imageLayer = (index) => {
    if (index === slide.current) return "z-2 opacity-100";
    if (index === slide.previous) return "z-1 opacity-100";
    return "z-0 opacity-0";
  };

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="hero-page relative w-full h-[calc(100svh-var(--header-h))] min-h-128 overflow-hidden"
    >
      {/* The page's only h1: invisible, but it tells search engines and
          screen readers what the site is about. */}
      <h1 id="hero-heading" className="sr-only">
        {t("hero.heading")}
      </h1>

      {/* Decorative slideshow, hidden from assistive technology. */}
      <div aria-hidden="true" className="absolute inset-0 isolate">
        {heroImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${imageLayer(index)}`}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-stone-900/90 via-stone-900/50 to-transparent"
      />

      <div className="relative z-10 h-full max-w-6xl px-8 text-stone-50 mx-auto md:px-16 flex items-center">
        {/* items-end: the bottle's base lines up with the bottom of the CTA.
            From lg the bottle column is only as wide as the image, so the
            quote gets the rest and fits in three lines. */}
        <div className="grid w-full items-end gap-8 md:grid-cols-2 lg:grid-cols-[1fr_auto]">
          <div>
            <figure>
              <q className="text-3xl md:text-5xl lg:text-6xl leading-tight italic font-bold block">
                {t("hero.quote")}
              </q>
              <figcaption className="mt-6 text-2xl md:text-4xl italic">
                {t("hero.author")}
              </figcaption>
            </figure>
            <a
              href="#reservaciones"
              className="block w-fit mt-10 px-8 py-3 border-2 border-stone-50 bg-stone-800 rounded-full font-semibold tracking-wide hover:bg-stone-50 hover:text-stone-900 transition"
            >
              {t("hero.cta")}
            </a>
          </div>
          <RevealEffect delay={300} className="hidden md:flex justify-end">
            <img
              src={wine}
              alt={t("hero.imageAlt")}
              className="h-[min(68vh,38rem)] max-w-full object-contain object-bottom"
            />
          </RevealEffect>
        </div>
      </div>
    </section>
  );
}
