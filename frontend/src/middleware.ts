import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY || "loluna-super-secret-jwt-key-2024-development-only"
);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes (except /admin/login)
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const token = request.cookies.get("admin_session")?.value;
    
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      await jwtVerify(token, SECRET_KEY);
      return NextResponse.next();
    } catch (error) {
      // Invalid token
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.delete("admin_session");
      return response;
    }
  }

  // Protect /api routes (except GET requests and /api/auth)
  if (
    pathname.startsWith("/api") && 
    !pathname.startsWith("/api/auth") && 
    request.method !== "GET"
  ) {
    const token = request.cookies.get("admin_session")?.value;
    
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
      await jwtVerify(token, SECRET_KEY);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
  }

  // If going to login page but already logged in, redirect to dashboard
  if (pathname.startsWith("/admin/login")) {
    const token = request.cookies.get("admin_session")?.value;
    if (token) {
      try {
        await jwtVerify(token, SECRET_KEY);
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      } catch (error) {
        // Just let them stay on login page
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};
