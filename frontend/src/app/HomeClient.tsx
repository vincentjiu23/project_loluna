"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import { useTranslation } from "@/context/LanguageContext";

interface CMSData {
  hero: Record<string, string>;
  features: Record<string, string>;
}

export default function HomeClient({ cmsData, products = [] }: { cmsData: CMSData, products?: any[] }) {
  const { t } = useTranslation();
  
  // Use CMS data if available, fallback to translation keys if CMS data is empty
  const heroBadge = cmsData.hero.badge || t("hero.badge");
  const heroTitle1 = cmsData.hero.title1 || t("hero.title1");
  const heroTitle2 = cmsData.hero.title2 || t("hero.title2");
  const heroTitleHighlight = cmsData.hero.titleHighlight || t("hero.titleHighlight");
  const heroSubtitle = cmsData.hero.subtitle || t("hero.subtitle");
  const heroImage = cmsData.hero.image || "/images/Section 1/Section 1_Making Everyday.png";

  const feature1Title = cmsData.features.feature1Title || t("home.features.hypoallergenic.title");
  const feature1Desc = cmsData.features.feature1Desc || t("home.features.hypoallergenic.desc");
  const feature2Title = cmsData.features.feature2Title || t("home.features.dermatologically.title");
  const feature2Desc = cmsData.features.feature2Desc || t("home.features.dermatologically.desc");
  const feature3Title = cmsData.features.feature3Title || t("home.features.newborn.title");
  const feature3Desc = cmsData.features.feature3Desc || t("home.features.newborn.desc");

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-surface-container-lowest overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/20 to-surface-container-lowest"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-fixed/20 rounded-full blur-[100px] pointer-events-none animate-blob"></div>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <ScrollReveal delay={0.1}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-sm shadow-md">
                {heroBadge}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h1 className="font-headline-xl text-headline-xl text-primary leading-tight">
                {heroTitle1} <br className="hidden md:block"/>
                {heroTitle2} <span className="text-gradient-primary">{heroTitleHighlight}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg whitespace-pre-line">
                {heroSubtitle}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/products">
                  <Button variant="primary">{t("hero.ctaPrimary")}</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">{t("hero.ctaSecondary")}</Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:w-1/2 relative">
            <ScrollReveal delay={0.3} direction="left">
              <div className="glass-card p-4 rounded-2xl rotate-2 shadow-2xl relative z-10 animate-float">
                <img
                  className="rounded-xl w-full aspect-[4/3] object-cover"
                  src={heroImage}
                  alt="Parents with baby"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="glass-panel p-8 rounded-2xl text-center space-y-4 bubble-hover h-full">
                <div className="w-16 h-16 mx-auto bg-primary-container rounded-full flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-primary text-3xl">water_drop</span>
                </div>
                <h3 className="font-bold text-xl text-primary">{feature1Title}</h3>
                <p className="text-on-surface-variant text-sm whitespace-pre-line">{feature1Desc}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glass-panel p-8 rounded-2xl text-center space-y-4 bubble-hover h-full">
                <div className="w-16 h-16 mx-auto bg-primary-container rounded-full flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-primary text-3xl">science</span>
                </div>
                <h3 className="font-bold text-xl text-primary">{feature2Title}</h3>
                <p className="text-on-surface-variant text-sm whitespace-pre-line">{feature2Desc}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="glass-panel p-8 rounded-2xl text-center space-y-4 bubble-hover h-full">
                <div className="w-16 h-16 mx-auto bg-primary-container rounded-full flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-primary text-3xl">child_care</span>
                </div>
                <h3 className="font-bold text-xl text-primary">{feature3Title}</h3>
                <p className="text-on-surface-variant text-sm whitespace-pre-line">{feature3Desc}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Spotlight Section */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <ScrollReveal direction="right">
                <div className="absolute inset-0 bg-secondary-container/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <img
                  className="relative z-10 w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  src="/images/Section 3/Section 3_FBL 1.png"
                  alt="Face & Body Baby Lotion"
                />
                <div className="absolute bottom-8 right-8 bg-secondary-container text-on-secondary-container p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl rotate-12 z-20 animate-float">
                  <span className="font-bold text-2xl">#1</span>
                  <span className="text-xs text-center font-bold">Baby Skincare in Cloudfest</span>
                </div>
              </ScrollReveal>
            </div>
            <div className="md:w-1/2 space-y-8">
              <ScrollReveal delay={0.1}>
                <span className="bg-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                  {t("home.spotlight.badge")}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
                  {t("home.spotlight.title1")}<br />
                  <span className="text-gradient-primary">{t("home.spotlight.title2")}</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-on-surface-variant font-body-md">
                  {t("home.spotlight.desc")}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    {t("home.spotlight.point1")}
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    {t("home.spotlight.point2")}
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    {t("home.spotlight.point3")}
                  </li>
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <Link href="/products" className="inline-block mt-4">
                  <Button variant="primary">
                    {t("home.spotlight.button")} <span className="material-symbols-outlined">arrow_forward</span>
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Products Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Products</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Discover our collection of gentle and safe baby care products.</p>
            </div>
          </ScrollReveal>

          {products && products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product: any, idx: number) => (
                <ScrollReveal key={product.id} delay={idx * 0.1}>
                  <Link href={`/products/${product.slug || product.id}`} className="block h-full">
                    <div className="glass-panel p-6 rounded-3xl text-center group cursor-pointer hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col shadow-sm hover:shadow-xl border border-outline-variant/30">
                      <div className="relative mb-6 flex-1 flex items-center justify-center min-h-[200px]">
                        <div className="absolute inset-0 bg-primary-container/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center blur-2xl"></div>
                        {product.badge && (
                          <span className="absolute top-0 left-0 bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold shadow-md z-10">
                            {product.badge}
                          </span>
                        )}
                        <img
                          src={product.image}
                          className="w-48 h-48 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500 relative z-10"
                          alt={product.name}
                        />
                      </div>
                      <h4 className="font-bold text-lg text-primary mb-2 line-clamp-1">{product.name}</h4>
                      <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 min-h-[40px]">{product.description}</p>
                      <div className="font-bold text-primary text-xl mt-auto">{product.price}</div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center text-on-surface-variant py-10">
              No products found. Add them in the CMS!
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="outline">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CSR & Science Section */}
      <section className="py-32 bg-surface text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-16">
          <ScrollReveal>
            <div className="space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-primary">{cmsData.science?.title || t("home.science.title")}</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                {cmsData.science?.description || t("home.science.desc")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Science Card */}
            <ScrollReveal delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden group h-[400px] shadow-xl">
                <img
                  src={cmsData.science?.image1 || "/images/Section 4/Section 4_Formulated Australia.png"}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Lab"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-2">{cmsData.science?.card1Title || t("home.science.card1.title")}</h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cmsData.science?.card1Desc || t("home.science.card1.desc")}</p>
                </div>
              </div>
            </ScrollReveal>
            {/* Tech Card */}
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden group h-[400px] shadow-xl">
                <img
                  src={cmsData.science?.image2 || "/images/Section 4/Section 4_Scientist.png"}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Tech"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-2">{cmsData.science?.card2Title || t("home.science.card2.title")}</h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cmsData.science?.card2Desc || t("home.science.card2.desc")}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{cmsData.testimonials?.title || "Loved by Millions of Moms"}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-surface p-8 rounded-3xl shadow-sm border border-outline-variant/30">
                <div className="text-secondary text-2xl mb-4">"</div>
                <p className="text-on-surface-variant italic mb-6">
                  {cmsData.testimonials?.[`review${i}`] || `Review ${i} text goes here...`}
                </p>
                <p className="font-bold text-primary">- {cmsData.testimonials?.[`name${i}`] || `Name ${i}`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary">{cmsData.faq?.title || "Frequently Asked Questions"}</h2>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30">
                <h4 className="font-bold text-lg text-primary mb-2">{cmsData.faq?.[`q${i}`] || `Question ${i}?`}</h4>
                <p className="text-on-surface-variant text-sm">{cmsData.faq?.[`a${i}`] || `Answer ${i} text goes here...`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locator Callout */}
      <section className="py-24 bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <div className="glass-panel rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-surface to-primary-fixed/20 shadow-xl border border-primary/10">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-3">{t("home.store.title")}</h3>
                <p className="text-on-surface-variant text-lg">{t("home.store.desc")}</p>
              </div>
              <div className="flex w-full md:w-auto gap-3">
                <input
                  type="text"
                  placeholder={t("home.store.placeholder")}
                  className="px-8 py-4 rounded-full border border-outline-variant bg-white w-full md:w-72 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-on-surface"
                />
                <Button variant="primary" className="!px-0 w-14 h-14 !rounded-full shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
