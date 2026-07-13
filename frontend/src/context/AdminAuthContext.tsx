"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

// ============================================================
// Types
// ============================================================

interface AdminAuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  error: string | null;
  clearError: () => void;
}

// Removed hardcoded credentials - now using API

// ============================================================
// Context
// ============================================================

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Middleware handles the real protection. This is just for UI toggles if needed.
  useEffect(() => {
    // If we are on this page and not redirected, we assume we are authenticated
    // (except on login page itself).
    if (window.location.pathname.startsWith('/admin') && !window.location.pathname.includes('/login')) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (username: string, password: string): Promise<boolean> => {
    setError(null);
    try {
      const res = await fetch("/api/auth/login", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }) 
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        // Refresh to apply middleware session
        window.location.href = "/admin/dashboard";
        return true;
      } else {
        setError(data.error || "Incorrect username or password.");
        return false;
      }
    } catch (err) {
      setError("An error occurred during login.");
      return false;
    }
  }, []);

  const logout = useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setIsAuthenticated(false);
    window.location.href = "/admin/login";
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, error, clearError }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}
