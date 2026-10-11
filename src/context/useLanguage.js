import { createContext, useContext } from "react";

// Lives here rather than in LanguageContext.jsx so that file only exports
// components (required by react-refresh).
export const LanguageContext = createContext();

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return context;
}
