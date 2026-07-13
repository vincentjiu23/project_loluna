"use client";

import { createContext, useContext, useState, useCallback } from "react";

// ============================================================
// Types
// ============================================================

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastContextType {
  showToast: (type: ToastType, message: string) => void;
}

// ============================================================
// Context
// ============================================================

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((type: ToastType, message: string) => {
    const id = Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
    setToasts(prev => [...prev, { id, type, message }]);

    // Auto dismiss setelah 4 detik
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const TOAST_CONFIG: Record<ToastType, { bg: string; icon: string; border: string }> = {
    success: { bg: "bg-emerald-50", icon: "check_circle", border: "border-emerald-200" },
    error: { bg: "bg-red-50", icon: "error", border: "border-red-200" },
    warning: { bg: "bg-amber-50", icon: "warning", border: "border-amber-200" },
    info: { bg: "bg-blue-50", icon: "info", border: "border-blue-200" },
  };

  const TOAST_ICON_COLORS: Record<ToastType, string> = {
    success: "text-emerald-500",
    error: "text-red-500",
    warning: "text-amber-500",
    info: "text-blue-500",
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => {
          const config = TOAST_CONFIG[toast.type];
          return (
            <div
              key={toast.id}
              className={`${config.bg} border ${config.border} rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 min-w-[320px] max-w-md pointer-events-auto animate-slide-in-right`}
            >
              <span
                className={`material-symbols-outlined text-xl ${TOAST_ICON_COLORS[toast.type]}`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {config.icon}
              </span>
              <p className="text-sm text-gray-700 flex-1">{toast.message}</p>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
