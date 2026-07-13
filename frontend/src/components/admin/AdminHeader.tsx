"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

// Map route segments ke label yang lebih ramah
const ROUTE_LABELS: Record<string, string> = {
  admin: "Admin",
  dashboard: "Dashboard",
  content: "Content Manager",
  products: "Products",
  media: "Media Library",
  pages: "Pages",
  banner: "Banner",
  gallery: "Gallery",
  testimonials: "Testimonials",
  faq: "FAQ",
  footer: "Footer",
  seo: "SEO",
  settings: "Settings",
  login: "Login",
};

export default function AdminHeader() {
  const pathname = usePathname();

  // Generate breadcrumbs dari pathname
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = ROUTE_LABELS[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    return { href, label };
  });

  // Ambil judul halaman saat ini
  const currentTitle = breadcrumbs[breadcrumbs.length - 1]?.label || "Dashboard";

  return (
    <header className="h-16 bg-white border-b border-gray-200/80 flex items-center justify-between px-6 shrink-0 sticky top-0 z-30">
      {/* Breadcrumb & Title */}
      <div>
        <nav className="flex items-center gap-1 text-xs text-gray-400">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.href} className="flex items-center gap-1">
              {index > 0 && (
                <span className="material-symbols-outlined text-[14px] text-gray-300">chevron_right</span>
              )}
              {index < breadcrumbs.length - 1 ? (
                <Link href={crumb.href} className="hover:text-[#006781] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-600 font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-lg font-bold text-gray-800 -mt-0.5">{currentTitle}</h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-56 hover:bg-gray-100/80 focus-within:ring-2 focus-within:ring-[#2cc1ed]/30 transition-all">
          <span className="material-symbols-outlined text-gray-400 text-lg mr-2">search</span>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm w-full text-gray-600 placeholder-gray-400"
          />
        </div>

        {/* Notifications */}
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
          <span className="material-symbols-outlined text-gray-500 text-xl">notifications</span>
          <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#2cc1ed] rounded-full"></div>
        </button>

        {/* Admin avatar */}
        <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
          <div className="w-8 h-8 bg-gradient-to-br from-[#006781] to-[#2cc1ed] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">A</span>
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-semibold text-gray-700 leading-none">Admin</p>
            <p className="text-[10px] text-gray-400 leading-none mt-0.5">lolunaadmin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
