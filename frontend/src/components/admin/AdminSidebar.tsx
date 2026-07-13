"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAdminAuth } from "@/context/AdminAuthContext";

interface MenuItem {
  label: string;
  icon: string;
  href: string;
  badge?: number;
}
const MENU_ITEMS: MenuItem[] = [
  { label: "Dashboard", icon: "dashboard", href: "/admin/dashboard" },
  { label: "Content Manager", icon: "edit_note", href: "/admin/content" },
  { label: "Products", icon: "inventory_2", href: "/admin/products" },
  { label: "Articles", icon: "article", href: "/admin/articles" },
  { label: "Media Library", icon: "perm_media", href: "/admin/media" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAdminAuth();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-[#0a1628] to-[#0f2035] text-white z-40 flex flex-col transition-all duration-300 ease-in-out ${
        collapsed ? "w-[72px]" : "w-64"
      }`}
    >
      {/* Logo & Collapse */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-white/10 shrink-0">
        {!collapsed && (
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#2cc1ed] to-[#006781] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Loluna <span className="text-[#2cc1ed] text-xs font-normal">CMS</span></span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <span className="material-symbols-outlined text-xl text-white/70">
            {collapsed ? "chevron_right" : "chevron_left"}
          </span>
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1 scrollbar-thin">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative ${
                isActive
                  ? "bg-[#2cc1ed]/15 text-[#2cc1ed] shadow-sm shadow-[#2cc1ed]/10"
                  : "text-white/60 hover:bg-white/5 hover:text-white/90"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-[#2cc1ed] rounded-r-full" />
              )}
              <span
                className={`material-symbols-outlined text-xl transition-colors ${
                  isActive ? "text-[#2cc1ed]" : "text-white/50 group-hover:text-white/80"
                }`}
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              {!collapsed && (
                <span className="truncate">{item.label}</span>
              )}
              {!collapsed && item.badge !== undefined && item.badge > 0 && (
                <span className="ml-auto bg-[#2cc1ed]/20 text-[#2cc1ed] text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-2 border-t border-white/10 shrink-0">
        <button
          onClick={logout}
          title={collapsed ? "Logout" : undefined}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:bg-red-500/10 hover:text-red-400 transition-all w-full"
        >
          <span className="material-symbols-outlined text-xl">logout</span>
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
