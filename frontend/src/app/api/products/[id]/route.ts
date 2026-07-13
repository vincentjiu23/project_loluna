import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
    });
    
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const formattedProduct = {
      ...product,
      images: JSON.parse(product.images),
      seo: { title: product.seoTitle, description: product.seoDesc, keywords: product.seoKeywords },
    };

    return NextResponse.json(formattedProduct);
  } catch (error) {
    console.error(`Error fetching product ${params.id}:`, error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();
    const dataToUpdate: any = {};
    
    if (data.name !== undefined) dataToUpdate.name = data.name;
    if (data.price !== undefined) dataToUpdate.price = data.price;
    if (data.shortDesc !== undefined) dataToUpdate.shortDesc = data.shortDesc;
    if (data.fullDesc !== undefined) dataToUpdate.fullDesc = data.fullDesc;
    if (data.images !== undefined) dataToUpdate.images = JSON.stringify(data.images);
    if (data.category !== undefined) dataToUpdate.category = data.category;
    if (data.stock !== undefined) dataToUpdate.stock = data.stock;
    if (data.badge !== undefined) dataToUpdate.badge = data.badge;
    if (data.featured !== undefined) dataToUpdate.featured = data.featured;
    if (data.buttonLink !== undefined) dataToUpdate.buttonLink = data.buttonLink;
    if (data.slug !== undefined) dataToUpdate.slug = data.slug;
    if (data.status !== undefined) dataToUpdate.status = data.status;
    if (data.seo !== undefined) {
      dataToUpdate.seoTitle = data.seo.title;
      dataToUpdate.seoDesc = data.seo.description;
      dataToUpdate.seoKeywords = data.seo.keywords;
    }

    const product = await prisma.product.update({
      where: { id: params.id },
      data: dataToUpdate,
    });

    await prisma.activityLog.create({
      data: {
        action: "update",
        target: "product",
        detail: `Updated product: ${product.name}`
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error updating product ${params.id}:`, error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const product = await prisma.product.delete({
      where: { id: params.id },
    });

    await prisma.activityLog.create({
      data: {
        action: "delete",
        target: "product",
        detail: `Deleted product: ${product.name}`
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error deleting product ${params.id}:`, error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
