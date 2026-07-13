import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const pages = await prisma.page.findMany({
      include: {
        sections: true
      }
    });
    
    // Transform Prisma data to match CMS Store interface
    const formattedPages = pages.map(p => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      icon: p.icon,
      updatedAt: p.updatedAt.toISOString(),
      sections: p.sections.map(s => s.id)
    }));

    return NextResponse.json(formattedPages);
  } catch (error) {
    console.error("Error fetching pages:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
