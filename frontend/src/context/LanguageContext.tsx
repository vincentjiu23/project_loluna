"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en.json";
import id from "../locales/id.json";

type Language = "en" | "id";
type Dictionary = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id"); // Default to Indonesian
  const [dictionary, setDictionary] = useState<Dictionary>(id);

  // Load language from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem("loluna-lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "id")) {
      setLanguage(savedLang);
    }
  }, []);

  // Update dictionary and localStorage when language changes
  useEffect(() => {
    setDictionary(language === "en" ? en : id);
    localStorage.setItem("loluna-lang", language);
  }, [language]);

  // Translation function using dot notation (e.g., "nav.products")
  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = dictionary;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key; // Return the key if not found
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
