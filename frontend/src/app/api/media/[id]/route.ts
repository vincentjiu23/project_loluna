import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const mediaItem = await prisma.mediaItem.delete({
      where: { id: params.id },
    });

    await prisma.activityLog.create({
      data: {
        action: "delete",
        target: "media",
        detail: `Deleted media: ${mediaItem.name}`
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error deleting media ${params.id}:`, error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
