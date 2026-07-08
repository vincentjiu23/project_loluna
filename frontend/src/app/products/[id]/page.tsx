"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="pt-24 pb-32">
      {/* Breadcrumb */}
      <div className="bg-surface-container-low border-b border-surface-container py-4">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <nav className="flex text-sm text-on-surface-variant gap-2 items-center font-label-md">
            <Link href="/" className="hover:text-primary transition-colors">{t("productDetail.breadcrumbs.home")}</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <Link href="/products" className="hover:text-primary transition-colors">{t("productDetail.breadcrumbs.products")}</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary font-bold">Face & Body Baby Lotion</span>
          </nav>
        </div>
      </div>

      {/* Product Main Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Image Gallery */}
          <div className="md:w-1/2 space-y-4">
            <ScrollReveal direction="left">
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden shadow-lg group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src="/images/Section 3/Section 3_FBL 1.png" 
                  alt="Product Image" 
                  className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                  {t("productDetail.badge")}
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Product Info */}
          <div className="md:w-1/2 flex flex-col pt-4">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-2 text-primary-fixed mb-4">
                <div className="flex text-lg drop-shadow-sm">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                </div>
                <a href="#reviews" className="text-sm font-bold text-primary hover:underline">({t("productDetail.reviews")})</a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="font-headline-lg text-4xl text-primary leading-tight mb-2">Face & Body Baby Lotion</h1>
              <p className="text-lg text-on-surface-variant mb-6 font-body-lg">{t("productDetail.subtitle")}</p>
            </ScrollReveal>



            <ScrollReveal delay={0.4}>
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
            </ScrollReveal>

            {/* Action Area */}
            <ScrollReveal delay={0.5}>
              <div className="mt-12 space-y-6">
                <h3 className="font-bold text-lg text-primary border-b border-outline-variant/30 pb-2">{t("productDetail.availableAt")}</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/stores" className="flex-1">
                    <Button variant="primary" className="w-full !py-4 text-md shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">storefront</span>
                      {t("productDetail.offlineStores")}
                    </Button>
                  </Link>
                  <a href="#" className="flex-1">
                    <Button variant="outline" className="w-full !py-4 text-md flex items-center justify-center gap-2 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors">
                      <span className="material-symbols-outlined text-lg">shopping_bag</span>
                      Shopee
                    </Button>
                  </a>
                  <a href="#" className="flex-1">
                    <Button variant="outline" className="w-full !py-4 text-md flex items-center justify-center gap-2 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-colors">
                      <span className="material-symbols-outlined text-lg">shopping_bag</span>
                      Tokopedia
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="bg-surface border-t border-b border-surface-container py-24 mt-20 overflow-hidden relative">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <ScrollReveal>
            {/* Tab Navigation */}
            <div className="flex justify-center gap-4 md:gap-8 border-b border-outline-variant/30 mb-16 overflow-x-auto pb-1 max-w-3xl mx-auto">
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
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 w-full h-1 rounded-t-full bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto min-h-[350px]">
              <AnimatePresence mode="wait">
                {activeTab === 'description' && (
                  <motion.div 
                    key="desc"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
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
                    transition={{ duration: 0.4 }}
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
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-3 gap-6 text-center"
                  >
                    {[
                      { step: 1, title: t("productDetail.tabs.howto.step1.title"), desc: t("productDetail.tabs.howto.step1.desc"), icon: 'shower' },
                      { step: 2, title: t("productDetail.tabs.howto.step2.title"), desc: t("productDetail.tabs.howto.step2.desc"), icon: 'front_hand' },
                      { step: 3, title: t("productDetail.tabs.howto.step3.title"), desc: t("productDetail.tabs.howto.step3.desc"), icon: 'self_care' }
                    ].map((item) => (
                      <div key={item.step} className="glass-panel p-10 rounded-[2rem] shadow-md border border-outline-variant/10 hover:-translate-y-4 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-20 h-20 bg-primary-container text-primary rounded-2xl rotate-3 group-hover:rotate-12 transition-transform flex items-center justify-center mx-auto mb-8 relative">
                          <span className="material-symbols-outlined text-4xl relative z-10">{item.icon}</span>
                          <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary-fixed text-on-secondary-fixed rounded-full flex items-center justify-center font-bold text-sm shadow-sm">{item.step}</div>
                        </div>
                        <h5 className="font-bold text-primary mb-4 text-2xl group-hover:text-secondary-fixed transition-colors">{item.title}</h5>
                        <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
