"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AdminAuthProvider, useAdminAuth } from "@/context/AdminAuthContext";
import { ToastProvider } from "@/components/admin/AdminToast";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAdminAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated && !isLoginPage) {
        router.replace("/admin/login");
      }
      if (isAuthenticated && isLoginPage) {
        router.replace("/admin/dashboard");
      }
    }
  }, [isAuthenticated, isLoading, isLoginPage, router]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[#006781] to-[#2cc1ed] rounded-xl animate-pulse flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-[#2cc1ed] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 bg-[#2cc1ed] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 bg-[#2cc1ed] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    );
  }

  // Login page: tampilkan tanpa sidebar/header
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Belum login: jangan render apapun (akan redirect)
  if (!isAuthenticated) {
    return null;
  }

  // Authenticated: tampilkan layout admin dengan sidebar
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen transition-all duration-300">
        <AdminHeader />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <ToastProvider>
        <AdminLayoutInner>
          {children}
        </AdminLayoutInner>
      </ToastProvider>
    </AdminAuthProvider>
  );
}
