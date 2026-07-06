import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

export default function Articles() {
  const articles = [
    {
      id: "1",
      title: "Understanding Baby Skin: Why It Needs Special Care",
      excerpt: "A deep dive into the anatomy of newborn skin and why it loses moisture up to 5 times faster than adult skin.",
      category: "Science & Education",
      date: "Oct 12, 2024",
      image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "The 5X Ceramide Difference",
      excerpt: "What are ceramides, and why did our clinical team choose a 5-complex blend for our signature lotion?",
      category: "Product Spotlight",
      date: "Oct 05, 2024",
      image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "3",
      title: "Building a Calming Bedtime Routine",
      excerpt: "Pediatricians share their top tips for using bath time and massage to help your baby sleep through the night.",
      category: "Parenting Tips",
      date: "Sep 28, 2024",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "4",
      title: "Decoding Eczema in Newborns",
      excerpt: "How to spot the early signs of eczema and the best gentle ingredients to soothe flare-ups naturally.",
      category: "Science & Education",
      date: "Sep 15, 2024",
      image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "5",
      title: "Our Sustainability Pledge: 2025 and Beyond",
      excerpt: "Read about our commitment to reducing plastic waste and ensuring our ingredients are ethically sourced.",
      category: "Behind the Brand",
      date: "Sep 02, 2024",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "6",
      title: "Navigating Sun Protection for Infants",
      excerpt: "When is it safe to use sunscreen on your baby? A comprehensive guide for summer safety.",
      category: "Parenting Tips",
      date: "Aug 20, 2024",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop"
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
              Loluna Journal
            </span>
            <h1 className="text-5xl md:text-6xl font-headline-xl text-primary leading-tight">
              Insights for the <br/><span className="text-gradient-primary">Modern Parent</span>
            </h1>
            <p className="text-xl text-on-surface-variant">
              Expert advice, scientific breakdowns, and stories from our community.
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
                  src="https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Featured Article" 
                  className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-2/5 bg-primary text-on-primary p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl group-hover:bg-primary-container/40 transition-colors duration-500"></div>
                <div className="relative z-10 space-y-6">
                  <span className="text-primary-fixed font-bold tracking-widest uppercase text-sm">Featured • Science</span>
                  <h2 className="text-3xl md:text-4xl font-bold leading-snug group-hover:text-secondary-fixed transition-colors">Understanding Baby Skin: Why It Needs Special Care</h2>
                  <p className="text-primary-fixed/90 text-lg leading-relaxed">
                    A deep dive into the anatomy of newborn skin and why it loses moisture up to 5 times faster than adult skin, requiring specialized barrier protection.
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 font-bold text-secondary-fixed hover:underline pt-4 group-hover:gap-4 transition-all">
                    Read Full Article <span className="material-symbols-outlined">arrow_forward</span>
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
            <Button variant="primary" className="!px-6 !py-2.5 !text-sm">All Topics</Button>
            <Button variant="text" className="!px-6 !py-2.5 !text-sm !text-on-surface-variant hover:!text-primary">Science & Education</Button>
            <Button variant="text" className="!px-6 !py-2.5 !text-sm !text-on-surface-variant hover:!text-primary">Parenting Tips</Button>
            <Button variant="text" className="!px-6 !py-2.5 !text-sm !text-on-surface-variant hover:!text-primary">Product Spotlight</Button>
            <Button variant="text" className="!px-6 !py-2.5 !text-sm !text-on-surface-variant hover:!text-primary">Community</Button>
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
                      Read more <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-16">
          <ScrollReveal>
            <Button variant="outline" className="mx-auto !px-12 !py-4">Load More Articles</Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
