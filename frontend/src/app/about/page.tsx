import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <ScrollReveal delay={0.1}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md shadow-sm">
                  Created by Parent to Parent
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h1 className="font-headline-xl text-headline-xl text-primary leading-tight">
                  Trusted by 3 Million Moms for Gentle, <span className="text-gradient-primary">Safe Care.</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                  Loluna was born from a simple promise: to provide every baby with the purest skincare possible. Our journey began in a kitchen, driven by a parent's love and perfected by clinical science.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button variant="primary">Our Story</Button>
                  <Button variant="outline">Explore Science</Button>
                </div>
              </ScrollReveal>
            </div>
            <div className="relative">
              <ScrollReveal direction="left">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-fixed/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
                <div className="relative glass-panel p-4 rounded-xl rotate-3 shadow-2xl animate-float">
                  <img
                    className="rounded-lg w-full aspect-[4/5] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvzsB1_7Cl44Hl9syNeaLEQKl_xLUD55iykTgHF8sGmxN-9bXzDoY1Vo0zum1-hGcb05rm-sCK2NbW0n2rc9rtCnx-S0YoeXPJUYLgksZ-hsSbRHuO1MlKp-X0Pmjpz4TwNYOgWX23w5-YrkoYJDpYS7J5cqVUtPpctReKsGksFkSuox2OezfHnvRBWp4cjuWLttIQxHqIBEwGLyPdmaOoYoBbR-FftGR5M7iEcmt4MOcrsvxfTzdlVILNI05RbUDxheBdNrqLDK8"
                    alt="Mother with newborn"
                  />
                </div>
                {/* Floating Stats Chip */}
                <div className="absolute bottom-10 -right-8 glass-panel p-6 rounded-xl shadow-xl border border-white/50 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary-container p-3 rounded-full shadow-inner">
                      <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                        favorite
                      </span>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">3M+</p>
                      <p className="text-xs font-label-md uppercase tracking-wider text-on-surface-variant">Happy Moms</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision (Bento Grid) */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-primary">The Loluna Foundation</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                Founded on the principles of transparency, clinical safety, and the emotional connection between parent and child.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Large Card */}
            <ScrollReveal className="md:col-span-2">
              <div className="relative group overflow-hidden rounded-3xl bg-primary-container/10 p-12 flex flex-col justify-end min-h-[400px] shadow-lg border border-primary-container/20 hover:shadow-xl transition-all h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                <div className="relative z-10 space-y-4">
                  <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Heritage</span>
                  <h3 className="text-4xl font-bold text-primary">The "Parent-First" Philosophy</h3>
                  <p className="text-on-surface-variant max-w-md text-lg">
                    Every formula we create is tested first on our own children. If it isn't good enough for our family, it isn't good enough for yours.
                  </p>
                </div>
                <div className="absolute top-12 right-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-[150px]">family_restroom</span>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Small Card 1 */}
            <ScrollReveal delay={0.2}>
              <div className="glass-panel p-10 rounded-3xl border border-secondary-container/30 flex flex-col items-center text-center space-y-6 h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-on-secondary-container text-4xl">verified_user</span>
                </div>
                <h3 className="text-2xl font-bold text-primary">Clinical Purity</h3>
                <p className="text-on-surface-variant">
                  Hypoallergenic and dermatologically tested to the highest international standards.
                </p>
              </div>
            </ScrollReveal>
            
            {/* Small Card 2 */}
            <ScrollReveal delay={0.3}>
              <div className="glass-panel p-10 rounded-3xl bg-primary-fixed/10 border border-primary-container/20 flex flex-col items-center text-center space-y-6 h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-on-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    eco
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary">Nature's Essence</h3>
                <p className="text-on-surface-variant">
                  98% plant-based ingredients sourced from sustainable, organic farms across the globe.
                </p>
              </div>
            </ScrollReveal>
            
            {/* Medium Card */}
            <ScrollReveal delay={0.4} className="md:col-span-2">
              <div className="bg-primary text-on-primary rounded-3xl p-12 relative overflow-hidden group shadow-xl h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center h-full">
                  <div className="space-y-6 md:w-2/3">
                    <h3 className="text-3xl font-bold text-secondary-fixed">3 Million Moms Can't Be Wrong</h3>
                    <p className="text-white/80 text-lg">
                      From our first tube of moisturizing cream to becoming a household name, our growth is fueled by real recommendations from one parent to another.
                    </p>
                    <Link className="inline-flex items-center gap-2 text-secondary-fixed font-bold hover:underline group-hover:gap-4 transition-all" href="#">
                      Read Community Stories <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                  </div>
                  <div className="flex -space-x-4 md:w-1/3 justify-end pr-4">
                    <img className="w-20 h-20 rounded-full border-4 border-primary object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm-A1YfhJCev-WgzbZ06_8DyHCmch8Cy8UZ20ArrQtlct11eKdshQmYMKNZ8S4surOJSQi9NWV-CCI0SJWTakzM_VSQBQShGgIf0mi8a_H_klVSYdf0uO8WTQidOnBh13yQ4WdPcxjbxJQFAjzGNaWXUdTjPv9qL618Tx6N8r8agbTjCMUuPQ4M0pbOvivU3hYtrGGaouaIFVCDIn4LUEJpZu4ybNTZh7N-iCIieEBu9BTUFW--aWdI_ted8GunIIZXXFmSxrSFCw" alt="Community member" />
                    <img className="w-20 h-20 rounded-full border-4 border-primary object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtrJgAgc4I6sVH-oMlCrN_AldSkFO2BfhfQA8bhVR5zWg2guvGcxwH_2ee7JZ8Zr2GCs2Zn7_QnjOLmfKMAI1JXwC3avDV0JnDRq9zkyJAC0PSp3KVF5ILHOAQ9IBCPW2_0847qKDpnjiXxg9VUvQG7dClcWtqMleuwSoqH4dWFDaUl87gumbChR0sa7Dd4QqWcg9WVCACFC-MFchqZilWGtAnspxK4LlD7bl0McJvvk9i8iEqVcCo_HlkWY0jhVIlU0tB7N47WEc" alt="Community member" />
                    <img className="w-20 h-20 rounded-full border-4 border-primary object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXtsn6ouEL7lqhvUJ9PnjoQRFFxuOllAy0JOKrPwgB4wYV_Gp_RZADnFmylmC7SNu6txE1QvnezHd4Ld06GNvCAd4cLAPGyasnM9Wfn6eKjKS9xFR_3cQjcqfElCSzlwHWQDNjJIxvaKsoQcDx2KxFSHfKk8JEif7ciKqMYsK1ZwAaLxIjeidEN4rS7a2YQDteiMFCeEMtyfOJ3h-JiMxDDX4CvUoPXXOdEaTcm0gOJUDOElAHOepVLVk93CVO6vdr0R4bbeL4HxQ" alt="Community member" />
                    <div className="w-20 h-20 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center border-4 border-primary text-sm font-bold shadow-lg z-10">+3M</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Founder Story */}
      <section className="py-32 relative bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <ScrollReveal direction="right">
                <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7KDMKttFUaEl-CbqEWBDiAJJy0SsHcCvnBrxLMQ_uA7D2chcWZaThnxq2wgRPCfHdC6JbuRK5M12604CmFHNHSDnVo-wRFH-3uB82M0VeFxjkqtWl-Vjq4ynbssHzsfMdF6uZCGJHFklByfvyxUSuHK4diwpHJboBu7PrgVeIioiNa3bhhGSEzhsD8Yv2F5pw5oFaprGlPFqlA9-9p5cLdSnyfTDYsx5EX6gacAVtkIiIZnz7L7qz4lG7i63pb02aYOCEVqoKgac" alt="Founder" />
                  <div className="absolute bottom-8 left-8 glass-panel p-8 rounded-2xl max-w-sm shadow-xl">
                    <p className="text-primary font-bold italic text-lg leading-relaxed">
                      "We created Loluna because we wanted a world where parents never have to choose between science and safety."
                    </p>
                    <p className="mt-4 font-bold text-sm text-on-surface-variant">— Dr. Elena Rossi, Founder & Mom</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full md:w-1/2 space-y-10">
              <ScrollReveal delay={0.1}>
                <h2 className="font-headline-lg text-headline-lg text-primary">Born from <span className="text-gradient-primary">Necessity.</span></h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="space-y-6 text-on-surface-variant font-body-md text-lg leading-relaxed">
                  <p>
                    When our daughter was born with extremely sensitive skin, we scoured every shelf for products that were truly safe, effective, and sustainable. We found that most products were either too clinical and harsh, or too organic and ineffective.
                  </p>
                  <p>
                    As a researcher and a mother, I knew there had to be a better way. I spent two years collaborating with world-class pediatric dermatologists to bridge that gap. The result was Loluna—a brand that treats your baby's skin with the same reverence and care we give our own.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
                  <div>
                    <p className="text-4xl font-bold text-primary mb-1">2018</p>
                    <p className="text-sm font-label-md text-on-surface-variant uppercase tracking-wider">Founded in Jakarta</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary mb-1">15+</p>
                    <p className="text-sm font-label-md text-on-surface-variant uppercase tracking-wider">Global Awards</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <div className="bg-primary-container/20 rounded-3xl p-12 md:p-24 text-center space-y-10 relative overflow-hidden shadow-lg border border-primary-container/30">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary-container/40 rounded-full blur-3xl animate-blob"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
              <h2 className="font-headline-xl text-headline-xl text-primary relative z-10">Start Your Gentle Journey.</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto relative z-10 text-lg">
                Join the millions of parents who trust Loluna for their baby's daily skincare routine. Experience the difference of premium, science-backed care.
              </p>
              <div className="flex justify-center gap-4 relative z-10 pt-4">
                <Button variant="primary">Shop Best Sellers</Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
