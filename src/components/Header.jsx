import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/useLanguage";

// Each id is both the section anchor and its key under `nav` in translations.
const sections = ["nosotros", "menu", "reservaciones", "ubicacion"];

function NavLink({ id, label, isActive }) {
  return (
    <a
      href={`#${id}`}
      aria-current={isActive ? "location" : undefined}
      className={`relative pb-1 transition-colors duration-300 ${isActive ? "text-taupe-300" : "text-stone-100 hover:text-taupe-300"}`}
    >
      {label}
      <span
        aria-hidden="true"
        className={`absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left transition-transform duration-300 ease-out ${isActive ? "scale-x-100" : "scale-x-0"}`}
      />
    </a>
  );
}

export function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("inicio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Keyboard users land on the close button when the overlay opens…
  useEffect(() => {
    if (mobileMenuOpen) closeButtonRef.current?.focus();
  }, [mobileMenuOpen]);

  // …and go back to the hamburger when it is dismissed (× or Escape).
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    openButtonRef.current?.focus();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    // The hero is observed too (it has no nav link) so that scrolling back to
    // the top clears the active link.
    ["inicio", ...sections].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Visible only when focused with the keyboard. */}
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-70 focus:px-4 focus:py-2 focus:rounded focus:bg-taupe-50 focus:text-stone-900"
      >
        {t("header.skipToContent")}
      </a>
      {/* The upward solid shadow (same color as the header) covers the 1px
          strip of page that subpixel rounding leaves above a sticky header on
          screens with fractional pixel ratios (most Android phones). */}
      <header className="sticky top-0 z-50 h-(--header-h) bg-stone-800 shadow-[0_-0.5rem_0_0_var(--color-stone-800)]">
        <div className="mx-auto flex h-full max-w-6xl items-center gap-8 xl:gap-12 px-8 md:px-16">
          <a href="#inicio" className="shrink-0" aria-label={t("header.home")}>
            <img
              src="./Logo.svg"
              alt={t("header.logoAlt")}
              className="h-10 w-auto lg:h-14"
            />
          </a>
          <img
            src="./line.svg"
            alt=""
            aria-hidden="true"
            className="hidden lg:block h-14"
          />
          {/* flex-1 + justify-center: the links sit centered between the
              ornamental line and the language toggle, with equal gaps. */}
          <nav
            aria-label={t("header.navLabel")}
            className="hidden lg:flex flex-1 justify-center items-center gap-8 xl:gap-12 text-xl"
          >
            {sections.map((id) => (
              <NavLink
                key={id}
                id={id}
                label={t(`nav.${id}`)}
                isActive={activeSection === id}
              />
            ))}
          </nav>

          <button
            onClick={toggleLang}
            aria-label={t("header.toggleLang")}
            className="relative ml-auto shrink-0 w-22.5 h-9 rounded-full bg-transparent border-2 border-taupe-50 p-1"
          >
            <span
              aria-hidden="true"
              className={`absolute left-0 top-0 h-full w-12 rounded-full bg-taupe-50 flex items-center justify-center text-xl font-semibold text-stone-700 transition-transform duration-300 underline ${
                lang === "es" ? "translate-x-0" : "translate-x-10"
              }`}
            >
              {lang === "es" ? "ES" : "EN"}
            </span>
          </button>

          <button
            ref={openButtonRef}
            onClick={() => setMobileMenuOpen(true)}
            aria-label={t("header.openMenu")}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden -ml-4 text-stone-50 text-3xl cursor-pointer"
          >
            <span aria-hidden="true">☰</span>
          </button>
        </div>
      </header>

      {/* `inert` while closed: the invisible links can't be focused or read. */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={t("header.navLabel")}
        inert={!mobileMenuOpen}
        onKeyDown={(e) => e.key === "Escape" && closeMobileMenu()}
        className={`lg:hidden fixed inset-0 bg-stone-800/95 z-60 flex flex-col items-center justify-center gap-8 text-2xl transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <button
          ref={closeButtonRef}
          onClick={closeMobileMenu}
          aria-label={t("header.closeMenu")}
          className="absolute top-6 right-6 text-stone-50 text-4xl cursor-pointer"
        >
          <span aria-hidden="true">×</span>
        </button>

        <nav
          aria-label={t("header.navLabel")}
          className="flex flex-col items-center gap-8"
        >
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-50"
            >
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
