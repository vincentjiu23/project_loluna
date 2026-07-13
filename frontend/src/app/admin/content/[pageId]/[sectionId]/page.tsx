"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cmsStore, type CMSSection, type CMSField } from "@/lib/cmsStore";

export default function SectionEditorPage({ params }: { params: { pageId: string, sectionId: string } }) {
  const router = useRouter();
  const [section, setSection] = useState<CMSSection | null>(null);
  const [fields, setFields] = useState<CMSField[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await cmsStore.getSection(params.sectionId);
        if (data) {
          setSection(data);
          // Parse fields if it's a string, or just use as is if already parsed by api
          const parsedFields = typeof data.fields === 'string' ? JSON.parse(data.fields) : data.fields;
          setFields(parsedFields);
        }
      } catch (err) {
        console.error("Failed to load section:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [params.sectionId]);

  const handleFieldChange = (index: number, newValue: string) => {
    const newFields = [...fields];
    newFields[index].value = newValue;
    setFields(newFields);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await cmsStore.updateSection(params.sectionId, {
        fields: fields as any, // the API expects the array, we send it
      });
      alert("Section saved successfully!");
      router.push("/admin/content");
    } catch (err) {
      console.error(err);
      alert("Failed to save section");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-gray-500 animate-pulse">Loading section editor...</div>;
  }

  if (!section) {
    return <div className="p-8 text-red-500">Section not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <Link 
          href="/admin/content"
          className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-gray-600">arrow_back</span>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Edit {section.name}</h1>
          <p className="text-sm text-gray-400">Update the content for this section</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8">
        {fields.map((field, index) => (
          <div key={field.key} className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">
              {field.label} <span className="text-xs text-gray-400 font-normal ml-2">({field.type})</span>
            </label>
            
            {field.type === "textarea" || field.type === "richtext" ? (
              <textarea
                value={field.value}
                onChange={(e) => handleFieldChange(index, e.target.value)}
                rows={5}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2cc1ed] focus:border-transparent outline-none transition-all resize-y"
              />
            ) : field.type === "image" ? (
              <div className="space-y-3">
                {field.value && (
                  <img src={field.value} alt={field.label} className="h-32 object-contain bg-gray-50 rounded-lg border border-gray-200" />
                )}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={field.value}
                    onChange={(e) => handleFieldChange(index, e.target.value)}
                    className="flex-1 px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2cc1ed] focus:border-transparent outline-none transition-all"
                    placeholder="Enter image URL or select from Media Library..."
                  />
                  <Link 
                    href="/admin/media" 
                    target="_blank"
                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors whitespace-nowrap flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">photo_library</span>
                    Media Library
                  </Link>
                </div>
              </div>
            ) : (
              <input
                type={field.type === "number" ? "number" : "text"}
                value={field.value}
                onChange={(e) => handleFieldChange(index, e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2cc1ed] focus:border-transparent outline-none transition-all"
              />
            )}
          </div>
        ))}

        <div className="pt-6 mt-6 border-t border-gray-100 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-8 py-3 bg-[#006781] hover:bg-[#005266] text-white rounded-xl font-bold transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2"
          >
            {saving ? "Saving..." : "Save Changes"}
            {!saving && <span className="material-symbols-outlined text-sm">save</span>}
          </button>
        </div>
      </form>
    </div>
  );
}
