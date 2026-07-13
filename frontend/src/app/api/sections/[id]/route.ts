import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const section = await prisma.section.findUnique({
      where: { id: params.id },
    });
    
    if (!section) {
      return NextResponse.json({ error: "Section not found" }, { status: 404 });
    }

    const formattedSection = {
      id: section.id,
      name: section.name,
      page: section.pageId,
      status: section.status,
      fields: JSON.parse(section.fields),
      updatedAt: section.updatedAt.toISOString(),
    };

    return NextResponse.json(formattedSection);
  } catch (error) {
    console.error(`Error fetching section ${params.id}:`, error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const dataToUpdate: any = {};
    
    if (body.name !== undefined) dataToUpdate.name = body.name;
    if (body.status !== undefined) dataToUpdate.status = body.status;
    if (body.fields !== undefined) dataToUpdate.fields = JSON.stringify(body.fields);

    const section = await prisma.section.update({
      where: { id: params.id },
      data: dataToUpdate,
    });

    await prisma.activityLog.create({
      data: {
        action: "update",
        target: "section",
        detail: `Updated section: ${section.name}`
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error updating section ${params.id}:`, error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
