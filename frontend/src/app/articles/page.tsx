import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import { useTranslation } from "@/context/LanguageContext";

export default function Articles() {
  const { t } = useTranslation();
  const articles = [
    {
      id: "1",
      title: t("articles.list.0.title"),
      excerpt: t("articles.list.0.excerpt"),
      category: t("articles.list.0.category"),
      date: "Oct 12, 2024",
      image: "/images/Section 4/Section 4_Scientist.png"
    },
    {
      id: "2",
      title: t("articles.list.1.title"),
      excerpt: t("articles.list.1.excerpt"),
      category: t("articles.list.1.category"),
      date: "Oct 05, 2024",
      image: "/images/Section 4/Section 4_Formulated Australia.png"
    },
    {
      id: "3",
      title: t("articles.list.2.title"),
      excerpt: t("articles.list.2.excerpt"),
      category: t("articles.list.2.category"),
      date: "Sep 28, 2024",
      image: "/images/Background/Background.jpg"
    },
    {
      id: "4",
      title: t("articles.list.3.title"),
      excerpt: t("articles.list.3.excerpt"),
      category: t("articles.list.3.category"),
      date: "Sep 15, 2024",
      image: "/images/Section 4/Section 4_Scientist.png"
    },
    {
      id: "5",
      title: t("articles.list.4.title"),
      excerpt: t("articles.list.4.excerpt"),
      category: t("articles.list.4.category"),
      date: "Sep 02, 2024",
      image: "/images/Section 4/Section 4_Formulated Australia.png"
    },
    {
      id: "6",
      title: t("articles.list.5.title"),
      excerpt: t("articles.list.5.excerpt"),
      category: t("articles.list.5.category"),
      date: "Aug 20, 2024",
      image: "/images/Background/Background.jpg"
    }
  ];

  return (
    <main className="pt-24 pb-32 bg-surface">
      {/* Header Section */}
      <section className="text-center py-16 px-margin-mobile relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary-fixed/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-sm shadow-sm">
              {t("articles.badge")}
            </span>
            <h1 className="text-5xl md:text-6xl font-headline-xl text-primary leading-tight">
              {t("articles.title1")} <br/><span className="text-gradient-primary">{t("articles.title2")}</span>
            </h1>
            <p className="text-xl text-on-surface-variant">
              {t("articles.desc")}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Featured Article */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/5 relative overflow-hidden">
                <img 
                  src="/images/Section 4/Section 4_Scientist.png" 
                  alt="Featured Article" 
                  className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-2/5 bg-primary text-on-primary p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl group-hover:bg-primary-container/40 transition-colors duration-500"></div>
                <div className="relative z-10 space-y-6">
                  <span className="text-primary-fixed font-bold tracking-widest uppercase text-sm">{t("articles.featured")} • {articles[0].category.split(" ")[0]}</span>
                  <h2 className="text-3xl md:text-4xl font-bold leading-snug group-hover:text-secondary-fixed transition-colors">{articles[0].title}</h2>
                  <p className="text-primary-fixed/90 text-lg leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 font-bold text-secondary-fixed hover:underline pt-4 group-hover:gap-4 transition-all">
                    {t("articles.readFull")} <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Categories */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 pb-4 border-b border-outline-variant/30">
            <Button variant="primary" className="!px-6 !py-2.5 !text-sm">{t("articles.categories.all")}</Button>
            <Button variant="text" className="!px-6 !py-2.5 !text-sm !text-on-surface-variant hover:!text-primary">{t("articles.categories.science")}</Button>
            <Button variant="text" className="!px-6 !py-2.5 !text-sm !text-on-surface-variant hover:!text-primary">{t("articles.categories.parenting")}</Button>
            <Button variant="text" className="!px-6 !py-2.5 !text-sm !text-on-surface-variant hover:!text-primary">{t("articles.categories.product")}</Button>
            <Button variant="text" className="!px-6 !py-2.5 !text-sm !text-on-surface-variant hover:!text-primary">{t("articles.categories.community")}</Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Article Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.slice(1).map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 0.1}>
              <Link href="#" className="group block h-full">
                <article className="glass-panel p-4 rounded-3xl h-full flex flex-col border border-outline-variant/20 hover:border-primary/30 transition-colors shadow-sm hover:shadow-xl">
                  <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3] relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="px-2 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-sm text-on-surface-variant mb-4">
                      <span className="bg-surface-container-high px-3 py-1 rounded-full font-bold text-primary">{article.category}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="font-bold text-2xl text-primary mb-3 leading-tight group-hover:text-primary-container transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-on-surface-variant mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto text-primary font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t("articles.readMore")} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-16">
          <ScrollReveal>
            <Button variant="outline" className="mx-auto !px-12 !py-4">{t("articles.loadMore")}</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
