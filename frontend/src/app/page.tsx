import prisma from "@/lib/prisma";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

// Helper function to extract fields from JSON string
function extractFields(fieldsString: string | undefined): Record<string, string> {
  if (!fieldsString) return {};
  try {
    const fieldsArray = JSON.parse(fieldsString);
    const result: Record<string, string> = {};
    fieldsArray.forEach((field: { key: string; value: string }) => {
      result[field.key] = field.value;
    });
    return result;
  } catch (error) {
    console.error("Failed to parse section fields", error);
    return {};
  }
}

export default async function Home() {
  // Fetch home page sections from Prisma
  const homePage = await prisma.page.findUnique({
    where: { slug: "/" },
    include: { sections: true }
  });

  const sections = homePage?.sections || [];
  
  // Find specific sections
  const heroSection = sections.find(s => s.name === "Hero Banner" && s.status === "published");
  const featuresSection = sections.find(s => s.name === "Features" && s.status === "published");
  const scienceSection = sections.find(s => s.name === "Science & CSR" && s.status === "published");
  const testimonialsSection = sections.find(s => s.name === "Testimonials" && s.status === "published");
  const faqSection = sections.find(s => s.name === "FAQ" && s.status === "published");

  // Format CMS data for the Client Component
  const cmsData = {
    hero: extractFields(heroSection?.fields),
    features: extractFields(featuresSection?.fields),
    science: extractFields(scienceSection?.fields),
    testimonials: extractFields(testimonialsSection?.fields),
    faq: extractFields(faqSection?.fields),
  };

  const dbProducts = await prisma.product.findMany({
    where: { status: "published" },
    orderBy: { createdAt: "desc" },
    take: 4, // Show 4 latest products on homepage
  });

  const formattedProducts = dbProducts.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.shortDesc,
    price: p.price > 0 ? `Rp ${p.price.toLocaleString("id-ID")}` : "",
    image: JSON.parse(p.images)[0] || "/images/placeholder.png",
    category: p.category,
    badge: p.badge,
    slug: p.slug
  }));

  return <HomeClient cmsData={cmsData} products={formattedProducts} />;
}
