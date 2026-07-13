import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const [pages, products, media, sections, lastActivity] = await Promise.all([
      prisma.page.count(),
      prisma.product.count(),
      prisma.mediaItem.count(),
      prisma.section.count(),
      prisma.activityLog.findFirst({
        orderBy: { timestamp: 'desc' }
      })
    ]);

    return NextResponse.json({
      totalPages: pages,
      totalProducts: products,
      totalImages: media,
      totalSections: sections,
      lastUpdated: lastActivity ? lastActivity.timestamp.toISOString() : new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
