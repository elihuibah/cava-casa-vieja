import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const sections = [
  { id: "nosotros", label: "Nosotros" },
  { id: "menu", label: "Menú" },
  { id: "reservaciones", label: "Reservaciones" },
  { id: "ubicacion", label: "Ubicación" },
];

function NavLink({ id, label, isActive }) {
  return (
    <a
      href={`#${id}`}
      className={`relative pb-1 transition-colors duration-300 ${isActive ? "text-taupe-300" : "text-stone-100 hover:text-taupe-300"}`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left transition-transform duration-300 ease-out ${isActive ? "scale-x-100" : "scale-x-0"}`}
      />
    </a>
  );
}

export function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("nosotros");
  const [hidden, setHidden] = useState(false);
  const [moblieMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`flex items-center bg-stone-800 py-5 px-8 md:px-16 fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="header-logo mr-8">
        <a href="#/">
          <img src="./Logo.svg" alt="Logo" className="ml-24" />
        </a>
      </div>
      <div className="line ml-8">
        <img src="./line.svg" />
      </div>
      <nav className="hidden md:flex header-links flex-1 justify-center gap-20 text-xl">
        {sections.map(({ id, key }) => (
          <NavLink
            key={id}
            id={id}
            label={t(`nav.${key}`)}
            isActive={activeSection === id}
          />
        ))}
      </nav>

      <button
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Abrir menú de navegación"
        className="md:hidden text-stone-50 text-3xl cursor-pointer"
      >
        ☰
      </button>

      <div className="hidden md:block language-toggle-button mr-24">
        <button
          onClick={toggleLang}
          aria-label="Cambiar idioma"
          className="relative w-22.5 h-9 rounded-full bg-transparent border-2 border-taupe-50 p-1"
        >
          <span
            className={`absolute left-0 top-0 h-full w-12 rounded-full bg-taupe-50 flex items-center justify-center text-xl font-semibold text-stone-700 transition-transform duration-300 underline ${
              lang === "es" ? "translate-x-0" : "translate-x-10"
            }`}
          >
            {lang === "es" ? "ES" : "EN"}
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-stone-800/95 z-50 flex flex-col items-center justify-center gap-8 text-2xl transition-opacity duration-300 ${moblieMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Cerrar menú de navegación"
          className="absolute top-6 right-6 text-stone-50 text-4xl cursor-pointer"
        >
          ×
        </button>

        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMobileMenuOpen(false)}
            className="text-stone-50"
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
