import prisma from "@/lib/prisma";
import AboutClient from "./AboutClient";

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

export default async function About() {
  // Fetch about page sections from Prisma
  const aboutPage = await prisma.page.findUnique({
    where: { slug: "/about" },
    include: { sections: true }
  });

  const sections = aboutPage?.sections || [];
  
  // Find specific sections
  const heroSection = sections.find(s => (s.name === "Hero" || s.name === "Hero Banner") && s.status === "published");
  const visionSection = sections.find(s => s.name === "Vision" && s.status === "published");
  const founderSection = sections.find(s => s.name === "Founder" && s.status === "published");
  const ctaSection = sections.find(s => s.name === "CTA" && s.status === "published");

  // Format CMS data for the Client Component
  const cmsData = {
    hero: extractFields(heroSection?.fields),
    vision: extractFields(visionSection?.fields),
    founder: extractFields(founderSection?.fields),
    cta: extractFields(ctaSection?.fields),
  };

  return <AboutClient cmsData={cmsData} />;
}
