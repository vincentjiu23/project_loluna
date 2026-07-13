import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs/promises";
import path from "path";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    const media = await prisma.mediaItem.findMany({
      where: category ? { category } : undefined,
      orderBy: { uploadedAt: "desc" }
    });

    const formattedMedia = media.map(m => ({
      ...m,
      uploadedAt: m.uploadedAt.toISOString(),
    }));

    return NextResponse.json(formattedMedia);
  } catch (error) {
    console.error("Error fetching media:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const category = formData.get("category") as string || "general";

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = uniqueSuffix + '-' + file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    
    // Ensure public/uploads directory exists
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    try {
      await fs.access(uploadDir);
    } catch {
      await fs.mkdir(uploadDir, { recursive: true });
    }

    // Write file to public/uploads
    const filepath = path.join(uploadDir, filename);
    await fs.writeFile(filepath, buffer);

    // Image URL relative to public directory
    const url = `/uploads/${filename}`;

    const mediaItem = await prisma.mediaItem.create({
      data: {
        name: file.name,
        url: url,
        category: category,
        alt: file.name.replace(/\.[^/.]+$/, ""), // filename without extension
        size: file.size,
        type: file.type,
      }
    });

    await prisma.activityLog.create({
      data: {
        action: "upload",
        target: "media",
        detail: `Uploaded media: ${mediaItem.name}`
      }
    });

    return NextResponse.json({
      ...mediaItem,
      uploadedAt: mediaItem.uploadedAt.toISOString(),
    });
  } catch (error) {
    console.error("Error creating media:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
