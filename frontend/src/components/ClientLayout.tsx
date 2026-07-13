"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children, footerData = {} }: { children: React.ReactNode, footerData?: any }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  // Admin routes: tanpa Header/Footer website publik
  if (isAdminRoute) {
    return <>{children}</>;
  }

  // Public routes: dengan Header, Footer, dan LanguageProvider
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer data={footerData} />
    </LanguageProvider>
  );
}
