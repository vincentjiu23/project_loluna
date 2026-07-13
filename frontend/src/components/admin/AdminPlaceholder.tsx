"use client";

import Link from "next/link";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon: string;
  phase: number;
}

export default function AdminPlaceholder({ title, description, icon, phase }: PlaceholderPageProps) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-4xl text-gray-300">{icon}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-400 mb-6">{description}</p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-600">
          <span className="material-symbols-outlined text-lg">schedule</span>
          Coming in Phase {phase}
        </div>
        <div className="mt-6">
          <Link
            href="/admin/dashboard"
            className="text-sm text-[#006781] hover:underline flex items-center justify-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
