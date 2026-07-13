/**
 * CMS Data Store - API Implementation (Phase 2)
 * 
 * Terhubung ke SQLite database via Next.js API Routes
 */

export interface CMSSection {
  id: string;
  name: string;
  page: string;
  fields: CMSField[];
  updatedAt: string;
  status: "published" | "draft";
}

export interface CMSField {
  key: string;
  label: string;
  type: "text" | "textarea" | "image" | "url" | "color" | "number" | "toggle" | "richtext";
  value: string;
}

export interface CMSPage {
  id: string;
  name: string;
  slug: string;
  sections: string[]; 
  icon: string; 
  updatedAt: string;
}

export interface CMSProduct {
  id: string;
  name: string;
  price: number;
  shortDesc: string;
  fullDesc: string;
  images: string[];
  category: string;
  stock: number;
  badge: string;
  featured: boolean;
  buttonLink: string;
  slug: string;
  status: "published" | "draft" | "hidden";
  seo: { title: string; description: string; keywords: string };
  createdAt: string;
  updatedAt: string;
}

export interface CMSMediaItem {
  id: string;
  name: string;
  url: string; 
  category: string;
  alt: string;
  size: number;
  type: string;
  uploadedAt: string;
}

export interface CMSActivityLog {
  id: string;
  action: string;
  target: string;
  detail: string;
  timestamp: string;
}

export interface CMSStats {
  totalPages: number;
  totalProducts: number;
  totalImages: number;
  totalSections: number;
  lastUpdated: string;
}

export interface ICMSStore {
  getPages(): Promise<CMSPage[]>;
  getPage(id: string): Promise<CMSPage | null>;
  getSections(pageId?: string): Promise<CMSSection[]>;
  getSection(id: string): Promise<CMSSection | null>;
  updateSection(id: string, data: Partial<CMSSection>): Promise<void>;
  getProducts(): Promise<CMSProduct[]>;
  getProduct(id: string): Promise<CMSProduct | null>;
  createProduct(data: Omit<CMSProduct, "id" | "createdAt" | "updatedAt">): Promise<CMSProduct>;
  updateProduct(id: string, data: Partial<CMSProduct>): Promise<void>;
  deleteProduct(id: string): Promise<void>;
  getMedia(category?: string): Promise<CMSMediaItem[]>;
  uploadMedia(file: File, category: string): Promise<CMSMediaItem>;
  deleteMedia(id: string): Promise<void>;
  getStats(): Promise<CMSStats>;
  getRecentActivity(limit?: number): Promise<CMSActivityLog[]>;
  getArticles(): Promise<CMSArticle[]>;
  getArticle(id: string): Promise<CMSArticle | null>;
  createArticle(data: Omit<CMSArticle, "id" | "createdAt" | "updatedAt">): Promise<CMSArticle>;
  updateArticle(id: string, data: Partial<CMSArticle>): Promise<void>;
  deleteArticle(id: string): Promise<void>;
}

class ApiCMSStore implements ICMSStore {
  private baseUrl = "/api";

  async getPages(): Promise<CMSPage[]> {
    const res = await fetch(`${this.baseUrl}/pages`);
    if (!res.ok) return [];
    return res.json();
  }

  async getPage(id: string): Promise<CMSPage | null> {
    const res = await fetch(`${this.baseUrl}/pages/${id}`);
    if (!res.ok) return null;
    return res.json();
  }

  async getSections(pageId?: string): Promise<CMSSection[]> {
    const url = pageId ? `${this.baseUrl}/sections?pageId=${pageId}` : `${this.baseUrl}/sections`;
    const res = await fetch(url);
    if (!res.ok) return [];
    return res.json();
  }

  async getSection(id: string): Promise<CMSSection | null> {
    const res = await fetch(`${this.baseUrl}/sections/${id}`);
    if (!res.ok) return null;
    return res.json();
  }

  async updateSection(id: string, data: Partial<CMSSection>): Promise<void> {
    await fetch(`${this.baseUrl}/sections/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  async getProducts(): Promise<CMSProduct[]> {
    const res = await fetch(`${this.baseUrl}/products`);
    if (!res.ok) return [];
    return res.json();
  }

  async getProduct(id: string): Promise<CMSProduct | null> {
    const res = await fetch(`${this.baseUrl}/products/${id}`);
    if (!res.ok) return null;
    return res.json();
  }

  async createProduct(data: Omit<CMSProduct, "id" | "createdAt" | "updatedAt">): Promise<CMSProduct> {
    const res = await fetch(`${this.baseUrl}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create product");
    return res.json();
  }

  async updateProduct(id: string, data: Partial<CMSProduct>): Promise<void> {
    await fetch(`${this.baseUrl}/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  async deleteProduct(id: string): Promise<void> {
    await fetch(`${this.baseUrl}/products/${id}`, { method: "DELETE" });
  }

  async getMedia(category?: string): Promise<CMSMediaItem[]> {
    const url = category ? `${this.baseUrl}/media?category=${category}` : `${this.baseUrl}/media`;
    const res = await fetch(url);
    if (!res.ok) return [];
    return res.json();
  }

  async uploadMedia(file: File, category: string): Promise<CMSMediaItem> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);

    const res = await fetch(`${this.baseUrl}/media`, {
      method: "POST",
      body: formData,
    });
    
    if (!res.ok) throw new Error("Upload failed");
    return res.json();
  }

  async deleteMedia(id: string): Promise<void> {
    await fetch(`${this.baseUrl}/media/${id}`, { method: "DELETE" });
  }

  async getStats(): Promise<CMSStats> {
    const res = await fetch(`${this.baseUrl}/stats`);
    if (!res.ok) throw new Error("Failed to fetch stats");
    return res.json();
  }

  async getRecentActivity(limit = 10): Promise<CMSActivityLog[]> {
    const res = await fetch(`${this.baseUrl}/activity?limit=${limit}`);
    if (!res.ok) return [];
    return res.json();
  }

  async getArticles(): Promise<CMSArticle[]> {
    const res = await fetch(`${this.baseUrl}/articles`);
    if (!res.ok) return [];
    return res.json();
  }

  async getArticle(id: string): Promise<CMSArticle | null> {
    const res = await fetch(`${this.baseUrl}/articles/${id}`);
    if (!res.ok) return null;
    return res.json();
  }

  async createArticle(data: Omit<CMSArticle, "id" | "createdAt" | "updatedAt">): Promise<CMSArticle> {
    const res = await fetch(`${this.baseUrl}/articles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create article");
    return res.json();
  }

  async updateArticle(id: string, data: Partial<CMSArticle>): Promise<void> {
    await fetch(`${this.baseUrl}/articles/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  async deleteArticle(id: string): Promise<void> {
    await fetch(`${this.baseUrl}/articles/${id}`, { method: "DELETE" });
  }
}

// Export the API-based CMS Store
export const cmsStore: ICMSStore = new ApiCMSStore();
