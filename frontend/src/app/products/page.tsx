import prisma from "@/lib/prisma";
import ProductsClient from "./ProductsClient";
import { extractFields } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function Products() {
  const dbProducts = await prisma.product.findMany({
    where: { status: "published" },
    orderBy: { createdAt: "desc" },
  });

  // Fetch sections for /products page
  const page = await prisma.page.findUnique({
    where: { slug: "/products" },
    include: { sections: true }
  });

  const sections = page?.sections || [];
  const heroSection = sections.find(s => s.name === "Products Hero");
  const newsletterSection = sections.find(s => s.name === "Products Newsletter");

  const heroData = heroSection ? extractFields(heroSection.fields) : null;
  const newsletterData = newsletterSection ? extractFields(newsletterSection.fields) : null;

  // Format products to match the expected format for ProductsClient
  const formattedProducts = dbProducts.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.shortDesc,
    price: p.price > 0 ? `Rp ${p.price.toLocaleString("id-ID")}` : "",
    image: JSON.parse(p.images)[0] || "/images/placeholder.png",
    category: p.category,
    badge: p.badge,
  }));

  return <ProductsClient initialProducts={formattedProducts} heroData={heroData} newsletterData={newsletterData} />;
}
