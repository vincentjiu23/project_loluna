const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const DEFAULT_PAGES = [
  { name: "Home", slug: "/", icon: "home" },
  { name: "About", slug: "/about", icon: "info" },
  { name: "Products", slug: "/products", icon: "shopping_bag" },
  { name: "Contact", slug: "/contact", icon: "mail" },
  { name: "Articles", slug: "/articles", icon: "article" },
  { name: "Stores", slug: "/stores", icon: "store" },
];

const DEFAULT_SECTIONS = [
  {
    name: "Hero Banner", pageSlug: "/", status: "published",
    fields: [
      { key: "badge", label: "Badge Text", type: "text", value: "New Formula with 5X Ceramide" },
      { key: "title1", label: "Title Line 1", type: "text", value: "Gentle Care" },
      { key: "title2", label: "Title Line 2", type: "text", value: "for Your" },
      { key: "titleHighlight", label: "Title Highlight", type: "text", value: "Little One" },
      { key: "subtitle", label: "Subtitle", type: "textarea", value: "Discover our scientifically proven, nature-inspired skincare range designed exclusively for baby's delicate skin." },
      { key: "image", label: "Hero Image", type: "image", value: "/images/Section 1/Section 1_Making Everyday.png" },
    ]
  },
  {
    name: "Features", pageSlug: "/", status: "published",
    fields: [
      { key: "feature1Title", label: "Feature 1 Title", type: "text", value: "Hypoallergenic" },
      { key: "feature1Desc", label: "Feature 1 Description", type: "textarea", value: "Carefully crafted to minimize allergy risks." },
      { key: "feature2Title", label: "Feature 2 Title", type: "text", value: "Dermatologically Tested" },
      { key: "feature2Desc", label: "Feature 2 Description", type: "textarea", value: "Proven safe for sensitive baby skin." },
      { key: "feature3Title", label: "Feature 3 Title", type: "text", value: "Safe for Newborn" },
      { key: "feature3Desc", label: "Feature 3 Description", type: "textarea", value: "Gentle enough from day one." },
    ]
  },
  {
    name: "Hero", pageSlug: "/about", status: "published",
    fields: [
      { key: "badge", label: "Badge", type: "text", value: "Created by Parent to Parent" },
      { key: "title1", label: "Title Line 1", type: "text", value: "Trusted by 3 Million Moms for Gentle," },
      { key: "title2", label: "Title Highlight", type: "text", value: "Safe Care." },
      { key: "description", label: "Description", type: "textarea", value: "Loluna was born from a simple promise..." },
      { key: "image", label: "Hero Image", type: "image", value: "/images/Section 2/Section 2_Baby.png" },
    ]
  },
];

async function main() {
  console.log("Start seeding...");

  for (const p of DEFAULT_PAGES) {
    const page = await prisma.page.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        name: p.name,
        slug: p.slug,
        icon: p.icon,
      },
    });
    console.log(`Created page: ${page.name}`);

    // Seed sections for this page
    const sectionsForPage = DEFAULT_SECTIONS.filter(s => s.pageSlug === p.slug);
    for (const sec of sectionsForPage) {
      await prisma.section.create({
        data: {
          name: sec.name,
          status: sec.status,
          fields: JSON.stringify(sec.fields),
          pageId: page.id,
        }
      });
      console.log(`  -> Created section: ${sec.name}`);
    }
  }

  // Create one default product to prevent empty state
  await prisma.product.upsert({
    where: { slug: "face-body-lotion" },
    update: {},
    create: {
      name: "Face & Body Baby Lotion",
      price: 150000,
      shortDesc: "Our clinically backed formula hydrates and strengthens the skin barrier.",
      fullDesc: "Our clinically backed formula hydrates and strengthens the skin barrier using 5 essential ceramides.",
      images: JSON.stringify(["/images/Section 3/Section 3_FBL 1.png"]),
      category: "Lotion",
      stock: 100,
      badge: "Best Seller",
      featured: true,
      buttonLink: "/products/face-body-lotion",
      slug: "face-body-lotion",
      status: "published",
      seoTitle: "Face & Body Baby Lotion - Loluna",
      seoDesc: "Buy Loluna Face & Body Baby Lotion",
      seoKeywords: "baby lotion, loluna, skincare",
    }
  });
  console.log(`Created default product`);

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
