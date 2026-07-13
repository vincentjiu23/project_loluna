import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: { createdAt: "desc" },
    });

    const formattedArticles = articles.map(a => ({
      ...a,
      createdAt: a.createdAt.toISOString(),
      updatedAt: a.updatedAt.toISOString(),
    }));

    return NextResponse.json(formattedArticles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Ensure unique slug
    let slug = body.slug;
    let existingArticle = await prisma.article.findUnique({ where: { slug } });
    if (existingArticle) {
      slug = `${slug}-${Date.now()}`;
    }

    const article = await prisma.article.create({
      data: {
        title: body.title,
        slug: slug,
        content: body.content,
        coverImage: body.coverImage,
        category: body.category,
        author: body.author || "Admin",
        status: body.status || "draft",
      },
    });

    await prisma.activityLog.create({
      data: {
        action: "create",
        target: "article",
        detail: `Created article: ${article.title}`
      }
    });

    return NextResponse.json({
      ...article,
      createdAt: article.createdAt.toISOString(),
      updatedAt: article.updatedAt.toISOString(),
    });
  } catch (error) {
    console.error("Error creating article:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
