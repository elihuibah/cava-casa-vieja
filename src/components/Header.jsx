import { useState, useEffect } from "react";

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
  const [lang, setLang] = useState("es");
  const [activeSection, setActiveSection] = useState("nosotros");

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
    <div className="header flex items-center bg-stone-800 py-5 px-8 md:px-16 fixed top-0 left-0 w-full z-50 ">
      <div className="header-logo mr-8">
        <a href="# ">
          <img src="./Logo.svg" alt="Logo" className="ml-24" />
        </a>
      </div>
      <div className="line ml-8">
        <img src="./line.svg" />
      </div>
      <div className="header-links flex-1 flex justify-center gap-20 text-xl">
        {sections.map(({ id, label }) => (
          <NavLink
            key={id}
            id={id}
            label={label}
            isActive={activeSection === id}
          />
        ))}
      </div>

      <div className="language-toggle-button mr-24">
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
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
    </div>
  );
}
