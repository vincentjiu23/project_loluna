import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Button from "@/components/Button";

export const dynamic = "force-dynamic";

export default async function ArticleDetail({ params }: { params: { slug: string } }) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });

  if (!article || article.status !== "published") {
    notFound();
  }

  // Related articles (just recent 3 for demo)
  const relatedArticles = await prisma.article.findMany({
    where: { 
      status: "published",
      id: { not: article.id }
    },
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="pt-24 pb-32 bg-surface">
      {/* Article Header */}
      <section className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop pt-12 pb-8">
        <ScrollReveal>
          <Link href="/articles" className="inline-flex items-center gap-2 text-primary font-bold hover:underline mb-8">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Articles
          </Link>
          
          <div className="flex items-center gap-3 text-sm text-on-surface-variant font-bold mb-6">
            <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span>•</span>
            <span>{new Date(article.createdAt).toLocaleDateString()}</span>
            <span>•</span>
            <span>{article.author}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-8">
            {article.title}
          </h1>
        </ScrollReveal>
      </section>

      {/* Cover Image */}
      <section className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop mb-16">
        <ScrollReveal delay={0.2}>
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] w-full">
            <img 
              src={article.coverImage || "/images/placeholder.png"} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop mb-24">
        <ScrollReveal>
          <div className="prose prose-lg prose-primary max-w-none text-on-surface-variant leading-relaxed">
            {/* Simple split by newline for paragraphs if plain text, or render as HTML if rich text */}
            <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} />
          </div>
        </ScrollReveal>
        
        <div className="mt-16 pt-8 border-t border-outline-variant/30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-xl">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-primary">{article.author}</p>
              <p className="text-sm text-on-surface-variant">Author</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="!px-3 !py-2 rounded-full">
              <span className="material-symbols-outlined text-sm">share</span>
            </Button>
            <Button variant="outline" className="!px-3 !py-2 rounded-full">
              <span className="material-symbols-outlined text-sm">bookmark</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 border-t border-outline-variant/20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-primary mb-10">Read More</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((related, index) => (
                <Link href={`/articles/${related.slug}`} key={related.id} className="block group">
                  <div className="glass-panel rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow border border-outline-variant/30">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={related.coverImage || "/images/placeholder.png"} 
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-on-surface-variant font-bold mb-2">
                        {related.category} • {new Date(related.createdAt).toLocaleDateString()}
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2 group-hover:text-primary-fixed transition-colors">
                        {related.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}
    </main>
  );
}
