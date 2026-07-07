"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="pt-24 pb-32">
      {/* Breadcrumb */}
      <div className="bg-surface-container-low border-b border-surface-container py-4">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <nav className="flex text-sm text-on-surface-variant gap-2 items-center font-label-md">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
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
                  Best Seller
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up">
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`bg-surface-container-lowest border rounded-2xl p-2 aspect-square flex items-center justify-center cursor-pointer transition-all hover:-translate-y-1 shadow-sm ${i === 1 ? 'border-primary ring-2 ring-primary/20' : 'border-outline-variant/30 opacity-70 hover:opacity-100'}`}>
                    <img 
                      src={`https://drive.google.com/uc?export=view&id=${i % 2 === 0 ? '1ZDIQBbIIB1KEDjgKd4qjgnlkjuTa-Fe7' : '1KKD-sR8locv8yJ3niN14-Xn8PdG2ei81'}`}
                      alt="Thumbnail"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
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
                <a href="#reviews" className="text-sm font-bold text-primary hover:underline">(128 Reviews)</a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="font-headline-lg text-4xl text-primary leading-tight mb-2">Face & Body Baby Lotion</h1>
              <p className="text-lg text-on-surface-variant mb-6 font-body-lg">with 5X Ceramide & Natural Shea Butter</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-4xl font-bold text-primary-container mb-8 drop-shadow-sm">$18.50</div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="space-y-6 mb-10">
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Provide ultimate 24-hour protection for your little one. Our ultra-nourishing lotion absorbs instantly without any greasy residue, fortifying the natural skin barrier to prevent dryness and irritation.
                </p>
                <ul className="space-y-3 font-label-md text-on-surface-variant">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed">verified</span> Hypoallergenic & pH Balanced</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed">verified</span> Free from Parabens & Artificial Dyes</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary-fixed">verified</span> Cruelty-Free</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Action Area */}
            <ScrollReveal delay={0.5}>
              <div className="mt-auto space-y-6 p-8 bg-primary-fixed/5 rounded-3xl border border-primary/10 shadow-sm">
                <div className="flex items-center gap-6">
                  <span className="font-bold text-on-surface">Quantity</span>
                  <div className="flex items-center bg-white border border-outline-variant rounded-full overflow-hidden shadow-sm">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-on-surface-variant hover:bg-surface-container transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="px-4 py-2 font-bold w-12 text-center text-primary">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-on-surface-variant hover:bg-surface-container transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" className="flex-grow !py-5 text-lg shadow-xl shadow-primary/20">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    Add to Cart
                  </Button>
                  <Button variant="secondary" className="!px-6 !py-5 shadow-lg shadow-secondary-container/20">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-surface border-t border-b border-surface-container py-16 mt-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <div className="flex gap-8 border-b border-outline-variant/30 mb-12 overflow-x-auto pb-4">
              <button 
                className={`font-headline-lg text-xl pb-4 px-2 whitespace-nowrap transition-all border-b-4 ${activeTab === 'description' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`font-headline-lg text-xl pb-4 px-2 whitespace-nowrap transition-all border-b-4 ${activeTab === 'ingredients' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
                onClick={() => setActiveTab('ingredients')}
              >
                Ingredients
              </button>
              <button 
                className={`font-headline-lg text-xl pb-4 px-2 whitespace-nowrap transition-all border-b-4 ${activeTab === 'how-to' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary'}`}
                onClick={() => setActiveTab('how-to')}
              >
                How to Use
              </button>
            </div>

            <div className="max-w-4xl text-on-surface-variant leading-relaxed space-y-6 text-lg min-h-[300px]">
              {activeTab === 'description' && (
                <div className="animate-fade-in-up">
                  <p>Our Face & Body Baby Lotion is specifically formulated to handle the unique needs of a newborn's developing skin barrier. Unlike adult skin, baby skin loses moisture up to 5 times faster, making our deep-hydration technology critical for preventing dryness and flaking.</p>
                  <p>Infused with a blend of 5 essential ceramides, natural shea butter, and oat extract, it creates a breathable, protective layer that locks in moisture for 24 hours while keeping environmental irritants out.</p>
                  <p>Developed with pediatric dermatologists, the texture is remarkably lightweight, melting instantly into the skin without leaving a greasy or sticky residue, allowing you to dress your baby immediately after application.</p>
                </div>
              )}
              {activeTab === 'ingredients' && (
                <div className="animate-fade-in-up">
                  <h4 className="font-bold text-primary mb-4 text-xl">Key Ingredients:</h4>
                  <ul className="space-y-4 mb-8">
                    <li className="bg-surface-container p-4 rounded-xl"><strong>5X Ceramide Complex:</strong> Mimics the skin's natural lipid barrier to lock in moisture and protect against irritants.</li>
                    <li className="bg-surface-container p-4 rounded-xl"><strong>Natural Shea Butter:</strong> Intensely nourishes and softens rough patches.</li>
                    <li className="bg-surface-container p-4 rounded-xl"><strong>Colloidal Oatmeal:</strong> Clinically proven to soothe redness and itching.</li>
                  </ul>
                  <p className="text-sm"><strong>Full List:</strong> Water (Aqua), Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Butyrospermum Parkii (Shea) Butter, Avena Sativa (Oat) Kernel Extract, Sodium Lauroyl Lactylate, Carbomer, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin.</p>
                </div>
              )}
              {activeTab === 'how-to' && (
                <div className="animate-fade-in-up">
                  <div className="grid md:grid-cols-3 gap-8 text-center mt-8">
                    <div className="glass-panel p-8 rounded-2xl shadow-sm border border-outline-variant/10 hover:-translate-y-2 transition-transform">
                      <div className="w-16 h-16 bg-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
                      <h5 className="font-bold text-primary mb-3 text-lg">Cleanse</h5>
                      <p className="text-sm">Start with clean, towel-dried skin after a gentle bath.</p>
                    </div>
                    <div className="glass-panel p-8 rounded-2xl shadow-sm border border-outline-variant/10 hover:-translate-y-2 transition-transform">
                      <div className="w-16 h-16 bg-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
                      <h5 className="font-bold text-primary mb-3 text-lg">Dispense</h5>
                      <p className="text-sm">Pump a generous amount of lotion into your hands.</p>
                    </div>
                    <div className="glass-panel p-8 rounded-2xl shadow-sm border border-outline-variant/10 hover:-translate-y-2 transition-transform">
                      <div className="w-16 h-16 bg-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
                      <h5 className="font-bold text-primary mb-3 text-lg">Massage</h5>
                      <p className="text-sm">Gently massage in sweeping motions over face and body.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
