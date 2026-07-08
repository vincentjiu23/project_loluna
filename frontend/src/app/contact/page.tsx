"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import { useTranslation } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="pt-24 pb-32 bg-surface relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary-fixed/20 rounded-full blur-[100px] pointer-events-none animate-blob"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-secondary-fixed/20 rounded-full blur-[100px] pointer-events-none animate-blob" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-sm shadow-sm">
              {t("contact.badge")}
            </span>
            <h1 className="text-5xl md:text-6xl font-headline-xl text-primary mt-6 leading-tight">
              {t("contact.title1")} <span className="text-gradient-primary">{t("contact.title2")}</span>
            </h1>
            <p className="text-xl text-on-surface-variant mt-4">
              {t("contact.desc")}
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className="lg:w-1/3 space-y-8">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="glass-panel p-8 rounded-3xl space-y-6 hover:-translate-y-1 transition-transform border border-outline-variant/20 shadow-lg">
                <div className="w-14 h-14 bg-primary-container text-primary rounded-full flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">{t("contact.email.title")}</h3>
                  <p className="text-on-surface-variant mb-2">{t("contact.email.desc")}</p>
                  <a href="mailto:hello@lolunacare.com" className="text-primary font-bold text-lg hover:underline">hello@lolunacare.com</a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="glass-panel p-8 rounded-3xl space-y-6 hover:-translate-y-1 transition-transform border border-outline-variant/20 shadow-lg">
                <div className="w-14 h-14 bg-primary-container text-primary rounded-full flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">{t("contact.call.title")}</h3>
                  <p className="text-on-surface-variant mb-2">{t("contact.call.desc")}</p>
                  <a href="tel:+628112345678" className="text-primary font-bold text-lg hover:underline">+62 811 234 5678</a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <div className="glass-panel p-8 rounded-3xl space-y-6 hover:-translate-y-1 transition-transform border border-outline-variant/20 shadow-lg">
                <div className="w-14 h-14 bg-primary-container text-primary rounded-full flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">{t("contact.location.title")}</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {t("contact.location.l1")}<br />
                    {t("contact.location.l2")}<br />
                    {t("contact.location.l3")}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="glass-panel p-10 md:p-14 rounded-3xl shadow-2xl border border-white/60 bg-white/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/30 rounded-bl-full pointer-events-none"></div>
                <h2 className="text-3xl font-bold text-primary mb-8 relative z-10">{t("contact.form.title")}</h2>
                
                {isSuccess ? (
                  <div className="bg-secondary-fixed/30 border border-secondary-fixed text-on-secondary-fixed-variant p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up min-h-[400px]">
                    <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-4xl text-on-secondary-container">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-bold">{t("contact.form.successTitle")}</h3>
                    <p className="text-lg">{t("contact.form.successDesc")}</p>
                    <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">
                      {t("contact.form.sendAnother")}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="name" className="block text-sm font-bold text-primary">{t("contact.form.name")}</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-xl border border-outline-variant bg-white/80 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-on-surface outline-none"
                          placeholder="Jane Doe"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="email" className="block text-sm font-bold text-primary">{t("contact.form.email")}</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-xl border border-outline-variant bg-white/80 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-on-surface outline-none"
                          placeholder="jane@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="subject" className="block text-sm font-bold text-primary">{t("contact.form.topic")}</label>
                      <select 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-xl border border-outline-variant bg-white/80 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-on-surface outline-none appearance-none"
                        required
                      >
                        <option value="" disabled>{t("contact.form.topicOptions.placeholder")}</option>
                        <option value="order">{t("contact.form.topicOptions.order")}</option>
                        <option value="product">{t("contact.form.topicOptions.product")}</option>
                        <option value="wholesale">{t("contact.form.topicOptions.wholesale")}</option>
                        <option value="other">{t("contact.form.topicOptions.other")}</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="message" className="block text-sm font-bold text-primary">{t("contact.form.message")}</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-6 py-4 rounded-xl border border-outline-variant bg-white/80 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-on-surface outline-none resize-none"
                        placeholder={t("contact.form.messagePlaceholder")}
                        required
                      ></textarea>
                    </div>

                    <Button 
                      type="submit" 
                      variant="primary"
                      className="w-full md:w-auto min-w-[200px]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined animate-spin">progress_activity</span>
                          {t("contact.form.sending")}
                        </div>
                      ) : (
                        t("contact.form.send")
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
