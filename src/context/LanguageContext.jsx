import { useEffect, useState } from "react";
import { translations } from "../data/translations";
import { LanguageContext } from "./useLanguage";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");
  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  // Keep <html lang>, the tab title and the meta description in the
  // current language (index.html ships the Spanish ones for crawlers).
  useEffect(() => {
    const { seo } = translations[lang];
    document.documentElement.lang = lang;
    document.title = seo.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", seo.description);
  }, [lang]);

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
