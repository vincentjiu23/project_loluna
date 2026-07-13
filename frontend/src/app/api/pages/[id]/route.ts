import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const page = await prisma.page.findUnique({
      where: { id: params.id },
      include: {
        sections: true
      }
    });
    
    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    const formattedPage = {
      id: page.id,
      name: page.name,
      slug: page.slug,
      icon: page.icon,
      updatedAt: page.updatedAt.toISOString(),
      sections: page.sections.map(s => s.id)
    };

    return NextResponse.json(formattedPage);
  } catch (error) {
    console.error(`Error fetching page ${params.id}:`, error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
