"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cmsStore, type CMSPage, type CMSSection } from "@/lib/cmsStore";

export default function ContentManagerPage() {
  const [pages, setPages] = useState<CMSPage[]>([]);
  const [sections, setSections] = useState<CMSSection[]>([]);
  const [expandedPage, setExpandedPage] = useState<string | null>(null);
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
        console.error("Failed to load content:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const getPageSections = (pageId: string) => {
    return sections.filter(s => s.page === pageId);
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-xl" />
              <div className="flex-1 space-y-2">
                <div className="w-32 h-4 bg-gray-200 rounded" />
                <div className="w-48 h-3 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Kelola semua konten website berdasarkan halaman dan section</p>
        </div>
      </div>

      {/* Page Tree */}
      <div className="space-y-3">
        {pages.map((page) => {
          const pageSections = getPageSections(page.id);
          const isExpanded = expandedPage === page.id;

          return (
            <div key={page.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Page Header */}
              <button
                onClick={() => setExpandedPage(isExpanded ? null : page.id)}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#006781] to-[#2cc1ed] rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {page.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{page.name}</h3>
                  <p className="text-xs text-gray-400">{pageSections.length} sections • {page.slug}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 hidden sm:block">
                    {new Date(page.updatedAt).toLocaleDateString("id-ID")}
                  </span>
                  <span className={`material-symbols-outlined text-gray-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </div>
              </button>

              {/* Sections List */}
              {isExpanded && (
                <div className="border-t border-gray-100 bg-gray-50/50">
                  {pageSections.length === 0 ? (
                    <div className="p-6 text-center">
                      <span className="material-symbols-outlined text-3xl text-gray-300">widgets</span>
                      <p className="text-sm text-gray-400 mt-2">No editable sections yet</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-100">
                      {pageSections.map((section) => (
                        <div
                          key={section.id}
                          className="flex items-center gap-4 px-5 py-4 hover:bg-white transition-colors group"
                        >
                          <div className="w-1.5 h-8 rounded-full bg-gray-200 group-hover:bg-[#2cc1ed] transition-colors" />
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-700">{section.name}</h4>
                            <p className="text-xs text-gray-400">
                              {section.fields.length} fields •{" "}
                              <span className={section.status === "published" ? "text-emerald-500" : "text-amber-500"}>
                                {section.status}
                              </span>
                            </p>
                          </div>
                          <Link
                            href={`/admin/content/${page.id}/${section.id}`}
                            className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs font-medium text-[#006781] bg-[#2cc1ed]/10 px-3 py-1.5 rounded-lg hover:bg-[#2cc1ed]/20"
                          >
                            <span className="material-symbols-outlined text-sm">edit</span>
                            Edit
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
