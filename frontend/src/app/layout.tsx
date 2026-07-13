import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import prisma from "@/lib/prisma";

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
    return {};
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const globalPage = await prisma.page.findUnique({
    where: { slug: "/global" },
    include: { sections: true }
  });

  const seoSection = globalPage?.sections.find(s => s.name === "SEO" && s.status === "published");
  const seoData = extractFields(seoSection?.fields);

  return {
    title: seoData.siteTitle || "Loluna | Premium Baby Skincare",
    description: seoData.siteDesc || "Safe, Premium, and Accessible skincare designed for your baby's delicate skin.",
    keywords: seoData.keywords || "baby skincare, lotion, gentle care",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalPage = await prisma.page.findUnique({
    where: { slug: "/global" },
    include: { sections: true }
  });

  const footerSection = globalPage?.sections.find(s => s.name === "Footer" && s.status === "published");
  const footerData = extractFields(footerSection?.fields);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface font-body-md overflow-x-hidden">
        <ClientLayout footerData={footerData}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
