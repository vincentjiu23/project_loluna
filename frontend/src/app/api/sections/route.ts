import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageId = searchParams.get("pageId");

    const sections = await prisma.section.findMany({
      where: pageId ? { pageId } : undefined,
    });
    
    const formattedSections = sections.map(s => ({
      id: s.id,
      name: s.name,
      page: s.pageId,
      status: s.status,
      fields: JSON.parse(s.fields),
      updatedAt: s.updatedAt.toISOString(),
    }));

    return NextResponse.json(formattedSections);
  } catch (error) {
    console.error("Error fetching sections:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
