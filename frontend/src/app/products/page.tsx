import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";

export default function Products() {
  const products = [
    {
      id: "1",
      name: "Face & Body Baby Lotion",
      description: "80 ml / 200 ml",
      price: "",
      image: "/images/product/loluna face & body baby lotion.png",
    },
    {
      id: "2",
      name: "Head to Toe Baby Wash",
      description: "450 ml",
      price: "",
      image: "/images/product/lolune head to toe baby wash extra 50%25.png",
      badge: "Extra 50%"
    },
    {
      id: "3",
      name: "Head to Toe Baby Wash",
      description: "300 ml",
      price: "",
      image: "/images/product/loluna head to toe baby wash pump.png",
    },
    {
      id: "4",
      name: "Head to Toe Baby Wash",
      description: "100 ml",
      price: "",
      image: "/images/product/loluna head to toe baby wash tube.png",
    },
    {
      id: "5",
      name: "Baby Hair Lotion",
      description: "100 ml",
      price: "",
      image: "/images/product/lolunaa baby hair lotion.png",
    },
    {
      id: "6",
      name: "Cerapair Baby Rash Cream",
      description: "30 ml",
      price: "",
      image: "/images/product/loluna cerapair baby rash cream.png",
    },
    {
      id: "7",
      name: "Baby Cologne",
      description: "100 ml",
      price: "",
      image: "/images/product/loluna baby cologne.png",
    },
    {
      id: "8",
      name: "Baby Calming Cream",
      description: "40 ml",
      price: "",
      image: "/images/product/loluna baby calming cream.png",
    }
  ];

  return (
    <main className="pt-24 pb-32 bg-surface-container-lowest">
      {/* Hero Banner for Products */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 pt-8">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-primary-fixed/40 to-surface-container-lowest rounded-[2rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden border border-outline-variant/20 shadow-lg">
            <div className="md:w-1/2 relative z-10 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">Gentle Care <br/>for Your <span className="text-gradient-primary">Little One</span></h1>
              <p className="text-on-surface-variant text-xl max-w-md">
                Discover our scientifically proven, nature-inspired skincare range designed exclusively for baby's delicate skin.
              </p>
            </div>
            <div className="md:w-1/2 relative z-10">
              <div className="glass-panel p-3 rounded-2xl rotate-3 shadow-2xl inline-block float-right animate-float">
                <img
                  src="/images/Section 3/Section 3_FBL 2.png"
                  className="rounded-xl w-full max-w-[450px] h-72 object-contain bg-primary-container/20"
                  alt="Product Range"
                />
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none animate-blob"></div>
          </div>
        </ScrollReveal>
      </section>

      {/* Categories Filter */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16">
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-4 pb-4">
            <Button variant="primary" className="!px-6 !py-3">All Products</Button>
            <Button variant="outline" className="!px-6 !py-3 !border-outline-variant !text-on-surface-variant hover:!bg-outline-variant/10">Bath & Wash</Button>
            <Button variant="outline" className="!px-6 !py-3 !border-outline-variant !text-on-surface-variant hover:!bg-outline-variant/10">Moisturizers</Button>
            <Button variant="outline" className="!px-6 !py-3 !border-outline-variant !text-on-surface-variant hover:!bg-outline-variant/10">Oils & Balms</Button>
            <Button variant="outline" className="!px-6 !py-3 !border-outline-variant !text-on-surface-variant hover:!bg-outline-variant/10">Gift Sets</Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Product Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <ProductCard {...product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-32">
        <ScrollReveal>
          <div className="bg-surface-container-highest rounded-3xl p-16 text-center relative overflow-hidden shadow-inner border border-white/50">
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl font-bold text-primary">Join the Loluna Family</h2>
              <p className="text-on-surface-variant text-lg">Subscribe for exclusive offers, parenting tips, and new product early access.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <input type="email" placeholder="Your email address" className="flex-grow px-8 py-5 rounded-full border border-outline-variant focus:ring-4 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-on-surface" />
                <Button variant="primary" className="!px-10">Subscribe</Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
