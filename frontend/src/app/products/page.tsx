"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Button from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function Products() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const categories = [
    { id: "all", label: t("products.categories.all") },
    { id: "bath", label: t("products.categories.bath") },
    { id: "moisturizers", label: t("products.categories.moisturizers") },
    { id: "fragrance", label: t("products.categories.fragrance") }
  ];
  
  const [activeCategoryId, setActiveCategoryId] = useState("all");

  const products = [
    {
      id: "1",
      name: "Face & Body Baby Lotion",
      description: "80 ml / 200 ml",
      price: "",
      image: "/images/product/loluna face & body baby lotion.png",
      category: "Moisturizers"
    },
    {
      id: "2",
      name: "Head to Toe Baby Wash",
      description: "450 ml",
      price: "",
      image: "/images/product/lolune head to toe baby wash extra 50%25.png",
      badge: "Extra 50%",
      category: "Bath & Wash"
    },
    {
      id: "3",
      name: "Head to Toe Baby Wash",
      description: "300 ml",
      price: "",
      image: "/images/product/loluna head to toe baby wash pump.png",
      category: "Bath & Wash"
    },
    {
      id: "4",
      name: "Head to Toe Baby Wash",
      description: "100 ml",
      price: "",
      image: "/images/product/loluna head to toe baby wash tube.png",
      category: "Bath & Wash"
    },
    {
      id: "5",
      name: "Baby Hair Lotion",
      description: "100 ml",
      price: "",
      image: "/images/product/lolunaa baby hair lotion.png",
      category: "Moisturizers"
    },
    {
      id: "6",
      name: "Cerapair Baby Rash Cream",
      description: "30 ml",
      price: "",
      image: "/images/product/loluna cerapair baby rash cream.png",
      category: "Moisturizers"
    },
    {
      id: "7",
      name: "Baby Cologne",
      description: "100 ml",
      price: "",
      image: "/images/product/loluna baby cologne.png",
      category: "Fragrance"
    },
    {
      id: "8",
      name: "Baby Calming Cream",
      description: "40 ml",
      price: "",
      image: "/images/product/loluna baby calming cream.png",
      category: "Moisturizers"
    }
  ];

  const filteredProducts = useMemo(() => {
    if (activeCategoryId === "all") return products;
    
    // We need to map the category id back to the English category name to match the product data.
    let enCategory = "";
    if (activeCategoryId === "bath") enCategory = "Bath & Wash";
    if (activeCategoryId === "moisturizers") enCategory = "Moisturizers";
    if (activeCategoryId === "fragrance") enCategory = "Fragrance";
    
    return products.filter((p) => p.category === enCategory);
  }, [activeCategoryId, products]);

  return (
    <main className="pt-24 pb-32 bg-surface-container-lowest">
      {/* Hero Banner for Products */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 pt-8">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-primary-fixed/40 to-surface-container-lowest rounded-[2rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden border border-outline-variant/20 shadow-lg">
            <div className="md:w-1/2 relative z-10 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">{t("products.hero.title1")} <br/>{t("products.hero.title2")} <span className="text-gradient-primary">{t("products.hero.title3")}</span></h1>
              <p className="text-on-surface-variant text-xl max-w-md">
                {t("products.hero.desc")}
              </p>
            </div>
            <div className="md:w-1/2 relative z-10">
              <div className="inline-block float-right animate-float">
                <img
                  src="/images/product/loluna head to toe baby wash pump.png"
                  className="w-full max-w-[450px] h-72 object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500"
                  alt="Product Range"
                />
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none animate-blob"></div>
          </div>
        </ScrollReveal>
      </section>

      {/* Categories Filter */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeCategoryId === category.id
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-surface border border-outline-variant text-on-surface-variant hover:bg-primary-container hover:text-primary hover:border-transparent"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Product Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                {...product} 
                onClick={() => setSelectedProduct(product)} 
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Newsletter */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-32">
        <ScrollReveal>
          <div className="bg-surface-container-highest rounded-3xl p-16 text-center relative overflow-hidden shadow-inner border border-white/50">
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl font-bold text-primary">{t("products.newsletter.title")}</h2>
              <p className="text-on-surface-variant text-lg">{t("products.newsletter.desc")}</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <input type="email" placeholder={t("products.newsletter.placeholder")} className="flex-grow px-8 py-5 rounded-full border border-outline-variant focus:ring-4 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-on-surface" />
                <Button variant="primary" className="!px-10">{t("products.newsletter.button")}</Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </main>
  );
}
