"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "bn";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (en: string, bn: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const STORAGE_KEY = "koshaix_lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  // Load saved preference on mount
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === "en" || saved === "bn") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    window.localStorage.setItem(STORAGE_KEY, newLang);
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "bn" : "en");
  };

  // Core translation function: pass English text and Bangla text directly
  const t = (en: string, bn: string): string => {
    return lang === "bn" ? bn : en;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
