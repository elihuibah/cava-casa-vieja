import { useState } from "react";

export function Header() {
  const [lang, setLang] = useState("es");

  return (
    <div className="header flex items-center bg-stone-700 p-5 justify-between">
      <div className="header-log ml-32 mr-8">
        <a href="/">
          <img src="./Logo.svg" alt="Logo" />
        </a>
      </div>
      <div className="line -mx-80">
        <img src="./line.svg" />
      </div>
      <div className="header-links flex gap-8 text-xl text-taupe-50">
        <a href="/about" className="mx-5">
          Nosotros
        </a>
        <a href="/menu" className="mx-5">
          Menú
        </a>
        <a href="/reservations" className="mx-5">
          Reservaciones
        </a>
        <a href="/location" className="mx-5">
          Ubicación
        </a>
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
