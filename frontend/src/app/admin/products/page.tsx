"use client";

import { useState, useEffect } from "react";
import { cmsStore, CMSProduct } from "@/lib/cmsStore";

export default function AdminProducts() {
  const [products, setProducts] = useState<CMSProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<CMSProduct>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await cmsStore.getProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleCreate = () => {
    setCurrentProduct({
      name: "",
      slug: "",
      price: 0,
      shortDesc: "",
      fullDesc: "",
      images: ["/images/placeholder.png"],
      category: "Baby Care",
      stock: 100,
      badge: "New",
      featured: false,
      buttonLink: "/cart",
      status: "published",
      seo: { title: "", description: "", keywords: "" }
    });
    setIsEditing(true);
  };

  const handleEdit = (product: CMSProduct) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        await cmsStore.deleteProduct(id);
        fetchProducts();
      } catch (err) {
        alert("Failed to delete product");
      }
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const dataToSave = { ...currentProduct };
      // Convert images to JSON string if needed, but our API handles array to string internally via Prisma
      // Wait, let's check API route first, actually I can just pass the array and API will stringify it.
      
      if (currentProduct.id) {
        await cmsStore.updateProduct(currentProduct.id, dataToSave);
      } else {
        await cmsStore.createProduct(dataToSave as any);
      }
      setIsEditing(false);
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Failed to save product");
    }
    setSaving(false);
  };

  if (loading && !isEditing) {
    return <div className="p-8 text-on-surface-variant animate-pulse">Loading products...</div>;
  }

  if (isEditing) {
    return (
      <div className="p-8 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-primary">
            {currentProduct.id ? "Edit Product" : "Create New Product"}
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
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-bold text-on-surface mb-2">Product Name</label>
              <input 
                required
                type="text" 
                value={currentProduct.name || ""}
                onChange={e => setCurrentProduct({...currentProduct, name: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-bold text-on-surface mb-2">Slug</label>
              <input 
                required
                type="text" 
                value={currentProduct.slug || ""}
                onChange={e => setCurrentProduct({...currentProduct, slug: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">Price (Rp)</label>
              <input 
                required
                type="number" 
                value={currentProduct.price || 0}
                onChange={e => setCurrentProduct({...currentProduct, price: parseFloat(e.target.value)})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">Category</label>
              <input 
                required
                type="text" 
                value={currentProduct.category || ""}
                onChange={e => setCurrentProduct({...currentProduct, category: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">Badge (e.g. New, Bestseller)</label>
              <input 
                type="text" 
                value={currentProduct.badge || ""}
                onChange={e => setCurrentProduct({...currentProduct, badge: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">Status</label>
              <select 
                value={currentProduct.status || "draft"}
                onChange={e => setCurrentProduct({...currentProduct, status: e.target.value as any})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="hidden">Hidden</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-bold text-on-surface mb-2">Main Image URL</label>
              <input 
                required
                type="text" 
                value={(currentProduct.images && currentProduct.images[0]) || ""}
                onChange={e => setCurrentProduct({...currentProduct, images: [e.target.value]})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-bold text-on-surface mb-2">Short Description</label>
              <textarea 
                required
                rows={2}
                value={currentProduct.shortDesc || ""}
                onChange={e => setCurrentProduct({...currentProduct, shortDesc: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary outline-none resize-y"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-bold text-on-surface mb-2">Full Description</label>
              <textarea 
                required
                rows={6}
                value={currentProduct.fullDesc || ""}
                onChange={e => setCurrentProduct({...currentProduct, fullDesc: e.target.value})}
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
              {saving ? "Saving..." : "Save Product"}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-primary">Products</h1>
        <button 
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/90 transition"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          New Product
        </button>
      </div>

      <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
        {products.length === 0 ? (
          <div className="p-8 text-center text-on-surface-variant">
            No products found. Create your first one!
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-surface-container-low border-b border-outline-variant/30">
              <tr>
                <th className="p-4 font-bold text-sm text-on-surface-variant">Image</th>
                <th className="p-4 font-bold text-sm text-on-surface-variant">Name</th>
                <th className="p-4 font-bold text-sm text-on-surface-variant">Price</th>
                <th className="p-4 font-bold text-sm text-on-surface-variant">Status</th>
                <th className="p-4 font-bold text-sm text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {products.map(product => (
                <tr key={product.id} className="hover:bg-surface-container-lowest transition">
                  <td className="p-4 w-20">
                    <img 
                      src={(product.images && product.images[0]) || "/images/placeholder.png"} 
                      alt={product.name} 
                      className="w-12 h-12 object-contain bg-surface-container rounded-lg"
                    />
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-primary">{product.name}</div>
                    <div className="text-xs text-on-surface-variant">{product.category}</div>
                  </td>
                  <td className="p-4 font-mono text-sm">
                    Rp {product.price.toLocaleString("id-ID")}
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      product.status === 'published' ? 'bg-green-100 text-green-800' : 
                      product.status === 'draft' ? 'bg-gray-100 text-gray-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => handleEdit(product)}
                      className="p-2 text-primary hover:bg-primary-container rounded-lg transition mr-2"
                    >
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button 
                      onClick={() => handleDelete(product.id)}
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
