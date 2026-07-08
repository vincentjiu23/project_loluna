"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  category: string;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("description");

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-surface w-full max-w-5xl rounded-[2.5rem] shadow-2xl overflow-hidden relative my-8 flex flex-col max-h-[90vh]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-primary transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          <div className="overflow-y-auto flex-1 custom-scrollbar">
            {/* Product Main Section */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
                
                {/* Image Gallery */}
                <div className="md:w-1/2 flex items-center justify-center">
                  <div className="aspect-square flex items-center justify-center relative w-full group">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-[90%] h-[90%] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 relative z-10"
                    />
                    <div className="absolute inset-0 bg-primary/10 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 blur-3xl z-0 pointer-events-none"></div>
                    {product.badge && (
                      <div className="absolute top-6 left-6 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md z-20">
                        {product.badge}
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-primary-fixed mb-4">
                    <div className="flex text-lg drop-shadow-sm">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                    </div>
                    <span className="text-sm font-bold text-primary">({t("productDetail.reviews")})</span>
                  </div>

                  <h1 className="font-headline-lg text-4xl text-primary leading-tight mb-2">{product.name}</h1>
                  <p className="text-lg text-on-surface-variant mb-6 font-body-lg">{t("productDetail.subtitle")}</p>

                  <div className="space-y-6 mb-10">
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                      {t("productDetail.desc")}
                    </p>
                    <ul className="space-y-3 font-label-md text-on-surface-variant">
                      <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed">verified</span> {t("productDetail.bullets.hypoallergenic")}</li>
                      <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed">verified</span> {t("productDetail.bullets.freeFrom")}</li>
                      <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed">verified</span> {t("productDetail.bullets.crueltyFree")}</li>
                    </ul>
                  </div>

                  {/* Action Area */}
                  <div className="mt-auto space-y-6">
                    <h3 className="font-bold text-lg text-primary border-b border-outline-variant/30 pb-2">{t("productDetail.availableAt")}</h3>
                    <div className="flex flex-wrap gap-4">
                      <Link href="/stores" onClick={onClose} className="flex-1 min-w-[150px]">
                        <Button variant="primary" className="w-full !py-4 text-md shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-lg">storefront</span>
                          {t("productDetail.offlineStores")}
                        </Button>
                      </Link>
                      <a href="#" className="flex-1 min-w-[120px]">
                        <Button variant="outline" className="w-full !py-4 text-md flex items-center justify-center gap-2 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors">
                          <span className="material-symbols-outlined text-lg">shopping_bag</span>
                          Shopee
                        </Button>
                      </a>
                      <a href="#" className="flex-1 min-w-[120px]">
                        <Button variant="outline" className="w-full !py-4 text-md flex items-center justify-center gap-2 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-colors">
                          <span className="material-symbols-outlined text-lg">shopping_bag</span>
                          Tokopedia
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Tabs Section */}
            <div className="bg-surface border-t border-surface-container py-16 px-8 md:px-12 lg:px-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                {/* Tab Navigation */}
                <div className="flex justify-center gap-4 md:gap-8 border-b border-outline-variant/30 mb-12 overflow-x-auto pb-1 max-w-3xl mx-auto">
                  {[
                    { id: 'description', label: t("productDetail.tabs.description.title"), icon: 'auto_awesome' },
                    { id: 'ingredients', label: t("productDetail.tabs.ingredients.title"), icon: 'science' },
                    { id: 'how-to', label: t("productDetail.tabs.howto.title"), icon: 'touch_app' }
                  ].map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center gap-2 font-headline-lg text-lg md:text-xl pb-4 px-4 whitespace-nowrap transition-colors ${activeTab === tab.id ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
                    >
                      <span className="material-symbols-outlined text-xl">{tab.icon}</span>
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div 
                          layoutId="activeTabIndicatorModal"
                          className="absolute bottom-0 left-0 w-full h-1 rounded-t-full bg-primary"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="max-w-4xl mx-auto min-h-[300px]">
                  <AnimatePresence mode="wait">
                    {activeTab === 'description' && (
                      <motion.div 
                        key="desc"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="glass-panel p-8 md:p-12 rounded-[2rem] border border-primary/10 shadow-lg text-center space-y-6"
                      >
                        <div className="w-20 h-20 bg-primary-fixed/20 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                          <span className="material-symbols-outlined text-4xl">water_drop</span>
                        </div>
                        <p className="text-xl text-on-surface font-medium leading-relaxed">
                          {t("productDetail.tabs.description.p1")}
                        </p>
                        <p className="text-lg text-on-surface-variant leading-relaxed">
                          {t("productDetail.tabs.description.p2")}
                        </p>
                        <p className="text-lg text-on-surface-variant leading-relaxed font-semibold italic mt-4 text-primary">
                          {t("productDetail.tabs.description.quote")}
                        </p>
                      </motion.div>
                    )}

                    {activeTab === 'ingredients' && (
                      <motion.div 
                        key="ing"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 gap-8"
                      >
                        <div className="space-y-6">
                          <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined">shield</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-primary mb-2 text-lg">{t("productDetail.tabs.ingredients.ceramide.title")}</h4>
                              <p className="text-on-surface-variant text-sm">{t("productDetail.tabs.ingredients.ceramide.desc")}</p>
                            </div>
                          </div>
                          <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
                            <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined">spa</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-primary mb-2 text-lg">{t("productDetail.tabs.ingredients.shea.title")}</h4>
                              <p className="text-on-surface-variant text-sm">{t("productDetail.tabs.ingredients.shea.desc")}</p>
                            </div>
                          </div>
                          <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined">eco</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-primary mb-2 text-lg">{t("productDetail.tabs.ingredients.oat.title")}</h4>
                              <p className="text-on-surface-variant text-sm">{t("productDetail.tabs.ingredients.oat.desc")}</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-surface-container p-8 rounded-[2rem] border border-outline-variant/20 flex flex-col justify-center relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-8 opacity-5 text-primary pointer-events-none">
                            <span className="material-symbols-outlined text-9xl">science</span>
                          </div>
                          <h4 className="font-bold text-primary mb-6 text-xl relative z-10 flex items-center gap-2">
                            <span className="material-symbols-outlined">list_alt</span> {t("productDetail.tabs.ingredients.full")}
                          </h4>
                          <p className="text-on-surface-variant text-sm leading-loose relative z-10 font-mono bg-white/50 p-6 rounded-2xl">
                            Water (Aqua), Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Butyrospermum Parkii (Shea) Butter, Avena Sativa (Oat) Kernel Extract, Sodium Lauroyl Lactylate, Carbomer, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'how-to' && (
                      <motion.div 
                        key="how"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-3 gap-6 text-center"
                      >
                        {[
                          { step: 1, title: t("productDetail.tabs.howto.step1.title"), desc: t("productDetail.tabs.howto.step1.desc"), icon: 'shower' },
                          { step: 2, title: t("productDetail.tabs.howto.step2.title"), desc: t("productDetail.tabs.howto.step2.desc"), icon: 'front_hand' },
                          { step: 3, title: t("productDetail.tabs.howto.step3.title"), desc: t("productDetail.tabs.howto.step3.desc"), icon: 'self_care' }
                        ].map((item) => (
                          <div key={item.step} className="glass-panel p-8 rounded-[2rem] shadow-md border border-outline-variant/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 bg-primary-container text-primary rounded-2xl rotate-3 group-hover:rotate-12 transition-transform flex items-center justify-center mx-auto mb-6 relative">
                              <span className="material-symbols-outlined text-3xl relative z-10">{item.icon}</span>
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary-fixed text-on-secondary-fixed rounded-full flex items-center justify-center font-bold text-xs shadow-sm">{item.step}</div>
                            </div>
                            <h5 className="font-bold text-primary mb-3 text-xl group-hover:text-secondary-fixed transition-colors">{item.title}</h5>
                            <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
