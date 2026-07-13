import Link from "next/link";
import prisma from "@/lib/prisma";
import ScrollReveal from "@/components/ScrollReveal";
import { extractFields } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
  const articles = await prisma.article.findMany({
    where: { status: "published" },
    orderBy: { createdAt: "desc" },
  });

  const page = await prisma.page.findUnique({
    where: { slug: "/articles" },
    include: { sections: true }
  });

  const sections = page?.sections || [];
  const headerSection = sections.find(s => s.name === "Articles Header");
  const headerData = headerSection ? extractFields(headerSection.fields) : null;

  return (
    <main className="pt-24 pb-32 bg-surface-container-lowest min-h-screen">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 pt-8">
        <ScrollReveal>
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold text-primary">
              {headerData?.title1 || "Our"} <span className="text-gradient-primary">{headerData?.title2 || "Articles"}</span>
            </h1>
            <p className="text-on-surface-variant text-lg">
              {headerData?.description || "Read the latest tips, news, and guides about baby care and parenting."}
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {articles.length === 0 ? (
          <div className="text-center py-20 text-on-surface-variant">
            No articles published yet. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 0.1}>
                <Link href={`/articles/${article.slug}`} className="block h-full">
                  <div className="glass-panel rounded-3xl overflow-hidden h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-md border border-outline-variant/30 group">
                    <div className="relative h-64 overflow-hidden bg-surface-container-low">
                      <img 
                        src={article.coverImage || "/images/placeholder.png"} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-xs text-on-surface-variant font-bold mb-4">
                        <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{article.author}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4 leading-tight group-hover:text-primary-fixed transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-on-surface-variant mb-6 line-clamp-3 flex-1">
                        {article.content.substring(0, 150)}...
                      </p>
                      <div className="text-primary font-bold flex items-center gap-2 mt-auto">
                        Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
