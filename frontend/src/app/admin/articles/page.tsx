"use client";

import { useState, useEffect } from "react";
import { cmsStore, CMSArticle } from "@/lib/cmsStore";

export default function AdminArticles() {
  const [articles, setArticles] = useState<CMSArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Partial<CMSArticle>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const data = await cmsStore.getArticles();
      setArticles(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleCreate = () => {
    setCurrentArticle({
      title: "",
      slug: "",
      content: "",
      coverImage: "/images/placeholder.png",
      category: "News",
      author: "Admin",
      status: "draft"
    });
    setIsEditing(true);
  };

  const handleEdit = (article: CMSArticle) => {
    setCurrentArticle(article);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      try {
        await cmsStore.deleteArticle(id);
        fetchArticles();
      } catch (err) {
        alert("Failed to delete article");
      }
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (currentArticle.id) {
        await cmsStore.updateArticle(currentArticle.id, currentArticle);
      } else {
        await cmsStore.createArticle(currentArticle as Omit<CMSArticle, "id" | "createdAt" | "updatedAt">);
      }
      setIsEditing(false);
      fetchArticles();
    } catch (err) {
      alert("Failed to save article");
    }
    setSaving(false);
  };

  if (loading && !isEditing) {
    return <div className="p-8 text-on-surface-variant animate-pulse">Loading articles...</div>;
  }

  if (isEditing) {
    return (
      <div className="p-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-primary">
            {currentArticle.id ? "Edit Article" : "Create New Article"}
          </h1>
          <button 
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 border border-outline rounded-lg text-on-surface hover:bg-surface-container transition"
          >
            Cancel
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-6 bg-surface p-8 rounded-2xl shadow-sm border border-outline-variant/30">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-bold text-on-surface mb-2">Title</label>
              <input 
                required
                type="text" 
                value={currentArticle.title || ""}
                onChange={e => setCurrentArticle({...currentArticle, title: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">Slug</label>
              <input 
                required
                type="text" 
                value={currentArticle.slug || ""}
                onChange={e => setCurrentArticle({...currentArticle, slug: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none"
                placeholder="e.g. 5-tips-baby-skin"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">Category</label>
              <input 
                required
                type="text" 
                value={currentArticle.category || ""}
                onChange={e => setCurrentArticle({...currentArticle, category: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">Author</label>
              <input 
                required
                type="text" 
                value={currentArticle.author || ""}
                onChange={e => setCurrentArticle({...currentArticle, author: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">Status</label>
              <select 
                value={currentArticle.status || "draft"}
                onChange={e => setCurrentArticle({...currentArticle, status: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-bold text-on-surface mb-2">Cover Image URL</label>
              <input 
                required
                type="text" 
                value={currentArticle.coverImage || ""}
                onChange={e => setCurrentArticle({...currentArticle, coverImage: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-bold text-on-surface mb-2">Content (Markdown / HTML supported)</label>
              <textarea 
                required
                rows={12}
                value={currentArticle.content || ""}
                onChange={e => setCurrentArticle({...currentArticle, content: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none resize-y"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button 
              type="submit" 
              disabled={saving}
              className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary/90 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Article"}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-primary">Articles</h1>
        <button 
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/90 transition"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          New Article
        </button>
      </div>

      <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
        {articles.length === 0 ? (
          <div className="p-8 text-center text-on-surface-variant">
            No articles found. Create your first one!
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-surface-container-low border-b border-outline-variant/30">
              <tr>
                <th className="p-4 font-bold text-sm text-on-surface-variant">Title</th>
                <th className="p-4 font-bold text-sm text-on-surface-variant">Category</th>
                <th className="p-4 font-bold text-sm text-on-surface-variant">Status</th>
                <th className="p-4 font-bold text-sm text-on-surface-variant">Date</th>
                <th className="p-4 font-bold text-sm text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {articles.map(article => (
                <tr key={article.id} className="hover:bg-surface-container-lowest transition">
                  <td className="p-4">
                    <div className="font-bold text-primary">{article.title}</div>
                    <div className="text-xs text-on-surface-variant">/{article.slug}</div>
                  </td>
                  <td className="p-4 text-sm">{article.category}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {article.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-on-surface-variant">
                    {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : '-'}
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => handleEdit(article)}
                      className="p-2 text-primary hover:bg-primary-container rounded-lg transition mr-2"
                    >
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button 
                      onClick={() => handleDelete(article.id)}
                      className="p-2 text-error hover:bg-error-container rounded-lg transition"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
