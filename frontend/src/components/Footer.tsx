"use client";

import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

export default function Footer({ data = {} }: { data?: any }) {
  const { t } = useTranslation();
  
  const description = data.description || t("footer.slogan");
  const copyright = data.copyright || t("footer.copyright");
  const igLink = data.instagram || "#";
  const tiktokLink = data.tiktok || "#";
  const waLink = data.whatsapp || "#";

  return (
    <footer className="bg-surface-container-lowest w-full py-16 px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-8">
      <div className="max-w-container-max w-full grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 flex flex-col gap-4">
          <img src="/images/Navigation/Logo.png" alt="Loluna Logo" className="h-10 object-contain object-left max-w-fit" />
          <p className="text-on-surface-variant font-label-md">
            {description}
          </p>
          <div className="flex gap-4 mt-4">
            <Link href={igLink} target="_blank" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
            </Link>
            <Link href={tiktokLink} target="_blank" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">music_note</span>
            </Link>
            <Link href={waLink} target="_blank" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">chat</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">{t("footer.about")}</h4>
          <div className="flex flex-col gap-3">
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/about">{t("footer.company")}</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">{t("footer.founder")}</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">{t("footer.csr")}</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">{t("footer.product")}</h4>
          <div className="flex flex-col gap-3">
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">{t("footer.ingredients")}</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">{t("footer.tech")}</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="/stores">{t("footer.store")}</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">{t("footer.contact")}</h4>
          <div className="flex flex-col gap-3">
            <p className="text-on-surface-variant text-sm">Indonesia: +62 21 5571123</p>
            <p className="text-on-surface-variant text-sm">Vietnam: +84 21 5571123</p>
            <p className="text-on-surface-variant text-sm">Singapore: +65 21 5571123</p>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-sm opacity-90">
          {copyright}
        </p>
        <div className="flex gap-6">
          <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">{t("footer.privacy")}</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">{t("footer.terms")}</Link>
        </div>
      </div>
    </footer>
  );
}
