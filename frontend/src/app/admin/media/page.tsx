"use client";

import { useState } from "react";

// Mock data for Media Library since we don't have a backend implementation for this yet
const MOCK_MEDIA = [
  { id: 1, name: "Section 2_Baby.png", url: "/images/Section 2/Section 2_Baby.png", type: "image/png", size: "1.2 MB", date: "2023-10-01" },
  { id: 2, name: "Section 4_Formulated Australia.png", url: "/images/Section 4/Section 4_Formulated Australia.png", type: "image/png", size: "2.1 MB", date: "2023-10-02" },
  { id: 3, name: "Section 4_Scientist.png", url: "/images/Section 4/Section 4_Scientist.png", type: "image/png", size: "1.8 MB", date: "2023-10-03" },
  { id: 4, name: "Section 6_Created by Parent.png", url: "/images/Section 6/Section 6_Created by Parent.png", type: "image/png", size: "3.5 MB", date: "2023-10-04" },
];

export default function MediaLibraryPage() {
  const [media, setMedia] = useState(MOCK_MEDIA);
  const [uploading, setUploading] = useState(false);

  const handleUploadClick = () => {
    alert("In a real app, this would open a file picker and upload to S3/Cloudinary.");
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this image?")) {
      setMedia(media.filter(m => m.id !== id));
    }
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    alert("URL copied to clipboard: " + url);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary">Media Library</h1>
          <p className="text-on-surface-variant mt-2">Manage your uploaded images and assets.</p>
        </div>
        <button 
          onClick={handleUploadClick}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary/90 transition"
        >
          <span className="material-symbols-outlined text-sm">upload</span>
          Upload New
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {media.map((item) => (
          <div key={item.id} className="bg-surface rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden group">
            <div className="aspect-square bg-surface-container-lowest relative overflow-hidden flex items-center justify-center p-4">
              <img src={item.url} alt={item.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button 
                  onClick={() => handleCopyUrl(item.url)}
                  className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  title="Copy URL"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                </button>
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="w-10 h-10 bg-error text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  title="Delete"
                >
                  <span className="material-symbols-outlined text-sm">delete</span>
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="font-bold text-sm text-primary truncate" title={item.name}>{item.name}</p>
              <div className="flex items-center justify-between mt-2 text-xs text-on-surface-variant">
                <span>{item.size}</span>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
        
        {/* Upload Placeholder Card */}
        <button 
          onClick={handleUploadClick}
          className="bg-surface-container-lowest rounded-2xl border-2 border-dashed border-outline-variant/50 flex flex-col items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:bg-primary-container/10 transition-all aspect-[3/4] md:aspect-auto"
        >
          <span className="material-symbols-outlined text-4xl mb-2">add_photo_alternate</span>
          <span className="font-bold">Upload Media</span>
        </button>
      </div>
    </div>
  );
}
