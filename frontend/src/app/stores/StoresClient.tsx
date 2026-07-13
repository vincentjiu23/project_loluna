"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function StoresClient({ headerData, locationsData }: { headerData: any, locationsData: any }) {
  const { t } = useTranslation();
  
  // Default to hardcoded locations if CMS data fails or is invalid
  let storeLocations = [];
  try {
    storeLocations = locationsData?.locationsJSON ? JSON.parse(locationsData.locationsJSON) : [];
  } catch (e) {
    console.error("Failed to parse store locations from CMS", e);
  }

  // Fallback if empty
  if (!storeLocations || storeLocations.length === 0) {
    storeLocations = [
      {
        city: "Jakarta",
        stores: [
          { name: "Loluna Headquarters", address: "Jl. Sudirman Kav 123, Jakarta Selatan, 12190" }
        ]
      }
    ];
  }

  const [activeCity, setActiveCity] = useState(storeLocations[0]?.city || "");
  const activeRegion = storeLocations.find((r: any) => r.city === activeCity);

  return (
    <main className="pt-24 pb-32 bg-surface-container-lowest min-h-screen">
      {/* Header */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 pt-8 text-center">
        <ScrollReveal>
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-sm shadow-sm mb-6">
            {headerData?.badge || t("stores.badge")}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            {headerData?.title || t("stores.title")}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            {headerData?.description || t("stores.desc")}
          </p>
        </ScrollReveal>
      </section>

      {/* Tabs */}
      {storeLocations.length > 0 && (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {storeLocations.map((region: any) => (
              <button
                key={region.city}
                onClick={() => setActiveCity(region.city)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeCity === region.city
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-surface text-on-surface-variant hover:bg-primary-container hover:text-primary shadow-sm"
                }`}
              >
                {region.city}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Stores Horizontal Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {activeRegion?.stores.map((store: any, i: number) => (
              <div key={i} className="bg-surface rounded-2xl p-6 shadow-sm border border-outline-variant/30 hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">storefront</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary group-hover:text-secondary transition-colors text-lg">
                      {store.name}
                    </h3>
                  </div>
                </div>
                <div className="flex items-start gap-2 mt-auto">
                  <span className="material-symbols-outlined text-on-surface-variant text-sm mt-1 shrink-0">location_on</span>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {store.address}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}
