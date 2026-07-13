import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    
    const formattedProducts = products.map(p => ({
      id: p.id,
      name: p.name,
      price: p.price,
      shortDesc: p.shortDesc,
      fullDesc: p.fullDesc,
      images: JSON.parse(p.images),
      category: p.category,
      stock: p.stock,
      badge: p.badge,
      featured: p.featured,
      buttonLink: p.buttonLink,
      slug: p.slug,
      status: p.status,
      seo: {
        title: p.seoTitle,
        description: p.seoDesc,
        keywords: p.seoKeywords,
      },
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString(),
    }));

    return NextResponse.json(formattedProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const product = await prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        shortDesc: data.shortDesc,
        fullDesc: data.fullDesc,
        images: JSON.stringify(data.images),
        category: data.category,
        stock: data.stock,
        badge: data.badge,
        featured: data.featured,
        buttonLink: data.buttonLink,
        slug: data.slug,
        status: data.status,
        seoTitle: data.seo.title,
        seoDesc: data.seo.description,
        seoKeywords: data.seo.keywords,
      }
    });

    await prisma.activityLog.create({
      data: {
        action: "create",
        target: "product",
        detail: `Created product: ${product.name}`
      }
    });

    return NextResponse.json({
      ...product,
      images: JSON.parse(product.images),
      seo: { title: product.seoTitle, description: product.seoDesc, keywords: product.seoKeywords },
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
