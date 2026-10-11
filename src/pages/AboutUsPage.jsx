import { useLanguage } from "../context/useLanguage";
import { RevealEffect } from "../components/RevealEffect";

// Drop cap drawn with ::first-letter, so the paragraph keeps its full first
// word ("Fundada", not "F" + "undada") for screen readers and search engines.
const dropCap =
  "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:pl-2.5 first-letter:pr-2.5 first-letter:text-3xl first-letter:leading-10 first-letter:font-serif first-letter:font-bold first-letter:not-italic first-letter:text-stone-800 first-letter:bg-taupe-200 first-letter:shadow-[-4px_4px_0_0_#78716c]";

export function AboutUsPage() {
  const { t } = useLanguage();
  return (
    <section
      id="nosotros"
      className="relative py-24 px-8 md:px-16 bg-linear-to-r from-stone-50 via-stone-100 to-stone-300 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-no-repeat bg-top-right opacity-10 pointer-events-none"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}origenes-laus.png')` }}
      />

      {/* Two columns only from lg: on tablets the title and the collage were
          too cramped side by side. */}
      <div className="columns relative grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* The bottom photo hangs 3.5rem below the collage box (-bottom-14).
            mb-14 reserves that space so it doesn't touch the title when the
            columns stack; lg:mb-16 adds the gray square's 0.5rem offset so the
            gaps above and below the section match. */}
        <div className="collage relative w-full max-w-md mx-auto aspect-4/5 mb-14 lg:mb-16">
          <RevealEffect
            delay={0}
            aria-hidden="true"
            className="brown-border absolute top-8 left-8 right-12 -bottom-8 border-3 border-amber-800/40 z-0"
          />
          <RevealEffect
            delay={150}
            aria-hidden="true"
            className="gray-square absolute top-2 right-34 w-24 h-24 bg-neutral-500 z-0"
          />
          <RevealEffect
            delay={300}
            className="absolute top-14 left-0 w-3/5 aspect-4/5 z-20"
          >
            <img
              src={`${import.meta.env.BASE_URL}DSC01279.JPG`}
              alt={t("about.signAlt")}
              className="w-full h-full object-cover shadow-xl/25"
            />
          </RevealEffect>

          <RevealEffect
            delay={450}
            className="absolute -bottom-14 right-0 w-3/5 aspect-4/5 z-30"
          >
            <img
              src={`${import.meta.env.BASE_URL}475122804_2687146191495051_646480903382055388_n.jpg`}
              alt={t("about.wineAlt")}
              className="w-full h-full object-cover shadow-xl/25"
            />
          </RevealEffect>
          <RevealEffect
            delay={600}
            aria-hidden="true"
            className="absolute -bottom-2 -left-2 w-38 h-38 z-0"
          >
            <svg
              className="w-full h-full text-neutral-500"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="35"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="25"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="20"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="15"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="50"
                cy="50"
                r="10"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </svg>
          </RevealEffect>
        </div>

        <div className="text-column w-full max-w-2xl mx-auto">
          <h2 className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-stone-800 leading-tight text-balance mb-10 text-center">
            {/* The forced break is dropped at lg, where the column is too
                narrow for "…LA VIEJA" on one line; text-balance evens it out. */}
            {t("about.title1")} <br className="lg:hidden xl:inline" />
            {t("about.title2")}
          </h2>
          <p className={`${dropCap} text-stone-900 leading-relaxed text-xl`}>
            {t("about.p1")}
          </p>

          <div
            aria-hidden="true"
            className="line flex items-center gap-4 my-8 clear-left"
          >
            <div className="flex-1 h-px bg-stone-400" />
            <img src={`${import.meta.env.BASE_URL}boxicons_wine-filled.svg`} alt="" />
            <div className="flex-1 h-px bg-stone-400" />
          </div>

          <p className={`${dropCap} text-stone-900 leading-relaxed text-xl`}>
            {t("about.p2")}
          </p>
        </div>
      </div>
    </section>
  );
}
