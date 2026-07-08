"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "@/context/LanguageContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-surface/80 dark:bg-surface-container-low/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-outline-variant/30 transition-all duration-300 ease-in-out ${
        isScrolled ? "shadow-md h-16" : "shadow-sm h-20"
      }`}
    >
      <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <img src="/images/Navigation/Logo.png" alt="Loluna Logo" className="h-8 md:h-10 object-contain" />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/about" className="text-on-surface-variant font-body-md hover:text-primary transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="/products" className="text-on-surface-variant font-body-md hover:text-primary transition-colors">
              {t("nav.products")}
            </Link>
            <Link href="/stores" className="text-on-surface-variant font-body-md hover:text-primary transition-colors">
              {t("nav.stores")}
            </Link>
            <Link href="/articles" className="text-on-surface-variant font-body-md hover:text-primary transition-colors">
              {t("nav.articles")}
            </Link>
            <Link href="/contact" className="text-on-surface-variant font-body-md hover:text-primary transition-colors">
              {t("nav.contact")}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/50">
            <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-32" placeholder={t("nav.search")} type="text" />
          </div>
          {/* Language Switcher */}
          <div className="relative hidden md:block">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="p-2 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined">language</span>
              <span className="text-sm font-bold uppercase">{language}</span>
            </button>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 bg-surface rounded-xl shadow-lg border border-outline-variant/20 py-2 w-40 overflow-hidden flex flex-col z-50">
                <button 
                  onClick={() => { setLanguage("en"); setIsLangOpen(false); }}
                  className={`px-4 py-2 text-left text-sm hover:bg-surface-container transition-colors ${language === 'en' ? 'font-bold text-primary bg-primary/5' : ''}`}
                >
                  English
                </button>
                <button 
                  onClick={() => { setLanguage("id"); setIsLangOpen(false); }}
                  className={`px-4 py-2 text-left text-sm hover:bg-surface-container transition-colors ${language === 'id' ? 'font-bold text-primary bg-primary/5' : ''}`}
                >
                  Bahasa Indonesia
                </button>
              </div>
            )}
          </div>
          <Link href="/products" className="p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">shopping_basket</span>
          </Link>
          <button className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
