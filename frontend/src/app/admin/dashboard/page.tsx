"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cmsStore, type CMSStats, type CMSActivityLog } from "@/lib/cmsStore";

// Stat card config
const STAT_CARDS = [
  { key: "totalPages", label: "Total Pages", icon: "web", color: "from-blue-500 to-cyan-500", bgLight: "bg-blue-50" },
  { key: "totalProducts", label: "Total Products", icon: "inventory_2", color: "from-emerald-500 to-teal-500", bgLight: "bg-emerald-50" },
  { key: "totalImages", label: "Total Images", icon: "perm_media", color: "from-violet-500 to-purple-500", bgLight: "bg-violet-50" },
  { key: "totalSections", label: "Total Sections", icon: "widgets", color: "from-amber-500 to-orange-500", bgLight: "bg-amber-50" },
] as const;

// Quick actions
const QUICK_ACTIONS = [
  { label: "Edit Home", icon: "home", href: "/admin/content", color: "text-blue-600 bg-blue-50" },
  { label: "Add Product", icon: "add_circle", href: "/admin/products", color: "text-emerald-600 bg-emerald-50" },
  { label: "Upload Media", icon: "cloud_upload", href: "/admin/media", color: "text-violet-600 bg-violet-50" },
  { label: "View Website", icon: "open_in_new", href: "/", color: "text-gray-600 bg-gray-100" },
];

function formatTimeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "Just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return date.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
}

const ACTION_ICONS: Record<string, { icon: string; color: string }> = {
  create: { icon: "add_circle", color: "text-emerald-500 bg-emerald-50" },
  update: { icon: "edit", color: "text-blue-500 bg-blue-50" },
  delete: { icon: "delete", color: "text-red-500 bg-red-50" },
  upload: { icon: "cloud_upload", color: "text-violet-500 bg-violet-50" },
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<CMSStats | null>(null);
  const [activity, setActivity] = useState<CMSActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [statsData, activityData] = await Promise.all([
          cmsStore.getStats(),
          cmsStore.getRecentActivity(8),
        ]);
        setStats(statsData);
        setActivity(activityData);
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Loading skeleton
  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="w-20 h-3 bg-gray-200 rounded" />
                  <div className="w-12 h-8 bg-gray-200 rounded" />
                </div>
                <div className="w-12 h-12 bg-gray-200 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
            <div className="w-40 h-5 bg-gray-200 rounded mb-4" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg" />
                  <div className="flex-1 space-y-1">
                    <div className="w-3/4 h-3 bg-gray-200 rounded" />
                    <div className="w-1/4 h-2 bg-gray-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
            <div className="w-32 h-5 bg-gray-200 rounded mb-4" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-full h-10 bg-gray-200 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-[#006781] to-[#2cc1ed] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-white/5 rounded-full translate-y-1/2" />
        <div className="relative z-10">
          <p className="text-white/70 text-sm font-medium">Welcome back,</p>
          <h2 className="text-2xl font-bold mt-1">Admin Panel</h2>
          <p className="text-white/60 text-sm mt-2 max-w-md">
            Kelola seluruh konten website Loluna dari sini. Update teks, gambar, produk, dan lainnya tanpa coding.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STAT_CARDS.map((card) => (
          <div
            key={card.key}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{card.label}</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {stats ? (stats as any)[card.key] : 0}
                </p>
              </div>
              <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {card.icon}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Activity & Quick Actions Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-gray-400">history</span>
              Recent Activity
            </h3>
            {stats?.lastUpdated && (
              <span className="text-xs text-gray-400">
                Last update: {formatTimeAgo(stats.lastUpdated)}
              </span>
            )}
          </div>

          {activity.length === 0 ? (
            <div className="text-center py-12">
              <span className="material-symbols-outlined text-5xl text-gray-200">inbox</span>
              <p className="text-sm text-gray-400 mt-3">No recent activity</p>
              <p className="text-xs text-gray-300 mt-1">Start editing content to see activity here</p>
            </div>
          ) : (
            <div className="space-y-3">
              {activity.map((item) => {
                const config = ACTION_ICONS[item.action] || { icon: "info", color: "text-gray-500 bg-gray-50" };
                return (
                  <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${config.color}`}>
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {config.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700 font-medium truncate">{item.detail}</p>
                      <p className="text-xs text-gray-400 capitalize">{item.target}</p>
                    </div>
                    <span className="text-xs text-gray-400 shrink-0">{formatTimeAgo(item.timestamp)}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-5">
            <span className="material-symbols-outlined text-lg text-gray-400">bolt</span>
            Quick Actions
          </h3>
          <div className="space-y-2">
            {QUICK_ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                target={action.href === "/" ? "_blank" : undefined}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${action.color} group-hover:scale-105 transition-transform`}>
                  <span className="material-symbols-outlined text-xl">{action.icon}</span>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{action.label}</span>
                <span className="material-symbols-outlined text-gray-300 text-lg ml-auto group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all">
                  chevron_right
                </span>
              </Link>
            ))}
          </div>

          {/* Last Updated Info */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>
                Last updated: {stats?.lastUpdated ? new Date(stats.lastUpdated).toLocaleString("id-ID") : "Never"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
