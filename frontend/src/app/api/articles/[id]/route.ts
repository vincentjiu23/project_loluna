import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: params.id },
    });
    
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    return NextResponse.json({
      ...article,
      createdAt: article.createdAt.toISOString(),
      updatedAt: article.updatedAt.toISOString(),
    });
  } catch (error) {
    console.error(`Error fetching article ${params.id}:`, error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const dataToUpdate: any = {};
    
    if (body.title !== undefined) dataToUpdate.title = body.title;
    if (body.slug !== undefined) dataToUpdate.slug = body.slug;
    if (body.content !== undefined) dataToUpdate.content = body.content;
    if (body.coverImage !== undefined) dataToUpdate.coverImage = body.coverImage;
    if (body.category !== undefined) dataToUpdate.category = body.category;
    if (body.author !== undefined) dataToUpdate.author = body.author;
    if (body.status !== undefined) dataToUpdate.status = body.status;

    const article = await prisma.article.update({
      where: { id: params.id },
      data: dataToUpdate,
    });

    await prisma.activityLog.create({
      data: {
        action: "update",
        target: "article",
        detail: `Updated article: ${article.title}`
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error updating article ${params.id}:`, error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const article = await prisma.article.delete({
      where: { id: params.id },
    });

    await prisma.activityLog.create({
      data: {
        action: "delete",
        target: "article",
        detail: `Deleted article: ${article.title}`
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error deleting article ${params.id}:`, error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
