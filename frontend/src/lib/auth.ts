import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

// Menggunakan env var di production, fallback untuk development
const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY || "loluna-super-secret-jwt-key-2024-development-only"
);

export async function createToken(payload: { id: string; username: string }) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h") // Token expires in 24 hours
    .sign(SECRET_KEY);
  return token;
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return payload;
  } catch (error) {
    return null;
  }
}

export function getSession(request: NextRequest) {
  const token = request.cookies.get("admin_session")?.value;
  return token ? verifyToken(token) : null;
}
