import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

export default function Home() {
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
                New Formula with 5X Ceramide
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h1 className="font-headline-xl text-headline-xl text-primary leading-tight">
                Making Everyday Moments Extra <span className="text-gradient-primary">Special</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Safe, Premium, and Accessible skincare designed for your baby's delicate skin. Formulated with love and clinical precision.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/products">
                  <Button variant="primary">Shop Now</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">Our Story</Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:w-1/2 relative">
            <ScrollReveal delay={0.3} direction="left">
              <div className="glass-card p-4 rounded-2xl rotate-2 shadow-2xl relative z-10 animate-float">
                <img
                  className="rounded-xl w-full aspect-[4/3] object-cover"
                  src="/images/Section 1/Section 1_Making Everyday.png"
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
              <div className="glass-panel p-8 rounded-2xl text-center space-y-4 bubble-hover">
                <div className="w-16 h-16 mx-auto bg-primary-container rounded-full flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-primary text-3xl">water_drop</span>
                </div>
                <h3 className="font-bold text-xl text-primary">Hypoallergenic</h3>
                <p className="text-on-surface-variant text-sm">Carefully crafted to minimize allergy risks.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glass-panel p-8 rounded-2xl text-center space-y-4 bubble-hover">
                <div className="w-16 h-16 mx-auto bg-primary-container rounded-full flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-primary text-3xl">science</span>
                </div>
                <h3 className="font-bold text-xl text-primary">Dermatologically Tested</h3>
                <p className="text-on-surface-variant text-sm">Proven safe for sensitive baby skin.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="glass-panel p-8 rounded-2xl text-center space-y-4 bubble-hover">
                <div className="w-16 h-16 mx-auto bg-primary-container rounded-full flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-primary text-3xl">child_care</span>
                </div>
                <h3 className="font-bold text-xl text-primary">Safe for Newborn</h3>
                <p className="text-on-surface-variant text-sm">Gentle enough from day one.</p>
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
                  Best Seller
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
                  Face & Body Baby Lotion<br />
                  <span className="text-gradient-primary">with 5X Ceramide</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-on-surface-variant font-body-md">
                  Our clinically backed formula hydrates and strengthens the skin barrier using 5 essential ceramides. It's the ultimate protection for your baby's delicate complexion, crafted after years of research in Australian laboratories.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    24-hour deep hydration
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    Soothes dry and itchy patches
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    Non-greasy, fast-absorbing texture
                  </li>
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <Link href="/products" className="inline-block mt-4">
                  <Button variant="primary">
                    Discover the Magic <span className="material-symbols-outlined">arrow_forward</span>
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CSR & Science Section */}
      <section className="py-32 bg-surface text-center">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-16">
          <ScrollReveal>
            <div className="space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-primary">Science Meets Gentleness</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                We bridge the gap between laboratory precision and maternal instinct.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Science Card */}
            <ScrollReveal delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden group h-[400px] shadow-xl">
                <img
                  src="/images/Section 4/Section 4_Formulated Australia.png"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Lab"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-2">Tested in Australia</h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">World-class standards for every drop.</p>
                </div>
              </div>
            </ScrollReveal>
            {/* Tech Card */}
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden group h-[400px] shadow-xl">
                <img
                  src="/images/Section 4/Section 4_Scientist.png"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Tech"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-2">Modern Skincare Tech</h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Innovation for the next generation.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CSR Stats */}
      <section className="py-32 bg-primary text-on-primary overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <ScrollReveal direction="left">
              <span className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase backdrop-blur-md border border-white/10">
                Community
              </span>
              <h2 className="font-headline-lg text-headline-lg mt-6">Caring for Children and Families</h2>
              <p className="text-primary-fixed opacity-90 text-lg mt-6">
                Our commitment goes beyond skincare. We believe every child deserves a healthy start in life, which is why we actively support communities across the region.
              </p>
            </ScrollReveal>
          </div>
          <div className="space-y-6">
            <ScrollReveal delay={0.2} direction="right">
              <div className="bg-white/10 p-8 rounded-2xl flex items-center justify-between backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                <div>
                  <h4 className="text-4xl font-bold">150,000+</h4>
                  <p className="text-primary-fixed text-sm mt-2">Skincare products donated to families in need.</p>
                </div>
                <div className="w-16 h-16 bg-primary-container text-primary rounded-full flex items-center justify-center shrink-0 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4} direction="right">
              <div className="bg-white/10 p-8 rounded-2xl flex items-center justify-between backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                <div>
                  <h4 className="text-3xl font-bold">Playground Support</h4>
                  <p className="text-primary-fixed text-sm mt-2">Developing inclusive spaces for children with Down Syndrome.</p>
                </div>
                <div className="w-16 h-16 bg-primary-container text-primary rounded-full flex items-center justify-center shrink-0 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">toys_and_games</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Store Locator Callout */}
      <section className="py-24 bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <div className="glass-panel rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-surface to-primary-fixed/20 shadow-xl border border-primary/10">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-3">Find Our Stores</h3>
                <p className="text-on-surface-variant text-lg">Experience the gentleness of Loluna at a retailer near you.</p>
              </div>
              <div className="flex w-full md:w-auto gap-3">
                <input
                  type="text"
                  placeholder="Enter your city or zip code"
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
