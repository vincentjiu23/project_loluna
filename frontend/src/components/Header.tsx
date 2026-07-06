"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <Link href="/" className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Loluna
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/about" className="text-on-surface-variant font-body-md hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/products" className="text-on-surface-variant font-body-md hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/articles" className="text-on-surface-variant font-body-md hover:text-primary transition-colors">
              Articles
            </Link>
            <Link href="/contact" className="text-on-surface-variant font-body-md hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/50">
            <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-32" placeholder="Search..." type="text" />
          </div>
          {/* Language Switcher */}
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors hidden md:block">
            <span className="material-symbols-outlined">language</span>
          </button>
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">shopping_basket</span>
          </button>
          <button className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <img
            className="w-10 h-10 rounded-full border-2 border-primary-container object-cover hidden md:block"
            alt="User profile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwTx3qNGvVR8GMfH2RkVMnODE42PLOvIylRgROo6l-tafsxKlcOtkx1XozTcvUZKstXO8xUg11XTnFgRr-xrm5OMH3skMwMbPJ7BfVW__o6waKngxhfSqekJOw5-0kNb4mzr6J7YiwTeoyC7C1vZt8_hruR9H1tuUjjsvrImePD09AJL3fvajSbiIy8W-TQmr8eJMXvY3OSs643Npn4F-IJ-uMxAeJ9_4mvOKcfzwT4KpDxOFxgLNP45-fg8OHqwNCD5k9gKuQnus"
          />
        </div>
      </div>
    </header>
  );
}
