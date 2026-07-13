"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cmsStore, type CMSPage, type CMSSection } from "@/lib/cmsStore";

export default function PagesManagerPage() {
  const [pages, setPages] = useState<CMSPage[]>([]);
  const [sections, setSections] = useState<CMSSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [pagesData, sectionsData] = await Promise.all([
          cmsStore.getPages(),
          cmsStore.getSections(),
        ]);
        setPages(pagesData);
        setSections(sectionsData);
      } catch (err) {
        console.error("Failed to load pages:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const getSectionCount = (pageId: string) => {
    return sections.filter(s => s.page === pageId).length;
  };

  const PAGE_COLORS = [
    "from-blue-500 to-cyan-500",
    "from-violet-500 to-purple-500",
    "from-emerald-500 to-teal-500",
    "from-amber-500 to-orange-500",
    "from-rose-500 to-pink-500",
    "from-indigo-500 to-blue-500",
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
            <div className="w-12 h-12 bg-gray-200 rounded-xl mb-4" />
            <div className="w-24 h-5 bg-gray-200 rounded mb-2" />
            <div className="w-16 h-3 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-sm text-gray-400">Pilih halaman untuk mengedit section-section di dalamnya</p>
      </div>

      {/* Pages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page, index) => {
          const sectionCount = getSectionCount(page.id);
          const colorClass = PAGE_COLORS[index % PAGE_COLORS.length];

          return (
            <Link
              key={page.id}
              href={`/admin/content?page=${page.id}`}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {page.icon}
                </span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#006781] transition-colors">
                {page.name}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{sectionCount} sections</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-400">{page.slug}</span>
                <span className="material-symbols-outlined text-gray-300 text-lg group-hover:text-[#2cc1ed] group-hover:translate-x-0.5 transition-all">
                  arrow_forward
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
