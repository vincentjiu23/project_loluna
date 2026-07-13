"use client";

import { useState } from "react";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "danger" | "warning" | "info";
  onConfirm: () => void | Promise<void>;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "danger",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm();
    } finally {
      setLoading(false);
    }
  };

  const VARIANT_STYLES = {
    danger: {
      icon: "warning",
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      btn: "bg-red-500 hover:bg-red-600 text-white",
    },
    warning: {
      icon: "info",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-500",
      btn: "bg-amber-500 hover:bg-amber-600 text-white",
    },
    info: {
      icon: "help",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      btn: "bg-blue-500 hover:bg-blue-600 text-white",
    },
  };

  const style = VARIANT_STYLES[variant];

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onCancel} />

      {/* Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 animate-scale-in">
        <div className="flex items-start gap-4">
          <div className={`${style.iconBg} p-3 rounded-xl shrink-0`}>
            <span
              className={`material-symbols-outlined text-2xl ${style.iconColor}`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {style.icon}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{message}</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onCancel}
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {cancelLabel}
          </button>
          <button
            onClick={handleConfirm}
            disabled={loading}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2 ${style.btn}`}
          >
            {loading && (
              <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
            )}
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
