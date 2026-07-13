const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const NEW_PAGES = [
  { name: "Global Settings", slug: "/global", icon: "language" },
  { name: "Products", slug: "/products", icon: "inventory_2" },
  { name: "Articles", slug: "/articles", icon: "article" },
  { name: "Contact", slug: "/contact", icon: "mail" },
  { name: "Stores", slug: "/stores", icon: "storefront" },
];

const storeLocationsJSON = JSON.stringify([
  {
    city: "Jakarta",
    stores: [
      { name: "Agung Toys", address: "Jl. Buaran Raya No.34, RT.6/RW.13, Klender, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13440" },
      { name: "Yens Baby Shop - TK II", address: "Jl. Kemanggisan Ilir Raya No.15, RT.1/RW.7, Kemanggisan, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480" }
    ]
  },
  {
    city: "Depok",
    stores: [
      { name: "Faza Baby Shop", address: "Ruko Grha Kintamani, Jl. Radar Auri, Cisalak Ps., Kec. Cimanggis, Kota Depok, Jawa Barat 16452" }
    ]
  },
  {
    city: "Banten",
    stores: [
      { name: "Cilapop Baby Shop", address: "Jl. Yusuf Martadilaga Serang No.46, Cipare, Kec. Serang, Kota Serang, Banten 42117" }
    ]
  },
  {
    city: "Tangerang",
    stores: [
      { name: "Babywise BSD", address: "Jl. Boulevard BSD Tim. No.3C-3D Kav. AH 2, Rw. Buntu, Kec. Serpong, Kota Tangerang Selatan, Banten 15310" },
      { name: "Mae Bebe", address: "Jl. Bintaro Utama 5 Blok. EA No. 5, Jurangmangu Timur, Pondok Aren, Pd. Ranji, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412" }
    ]
  },
  {
    city: "Bekasi",
    stores: [
      { name: "Calista Baby Shop", address: "Prima Orchard Trade Mall, Prima Orchard Trade Mall RT 001, RT.001/RW.012, Harapan Baru, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17123" },
      { name: "Hello Baby Bintara", address: "Jl. Bintara VIII No.14D, RT.005/RW.003, Bintara, Kec. Bekasi Bar., Kota Bks, Jawa Barat 17134" },
      { name: "Hello Baby Tambun", address: "Jl. Raya Mangun Jaya No.8a, Mangunjaya, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17112" }
    ]
  },
  {
    city: "Cirebon",
    stores: [
      { name: "Yogya Cirebon", address: "Jl. Kartini No.26, Sukapura, Kec. Kejaksan, Kota Cirebon, Jawa Barat 45123" }
    ]
  },
  {
    city: "Garut",
    stores: [
      { name: "Yogya Garut", address: "Jl. Siliwangi No.21, Pakuwon, Kec. Garut Kota, Kabupaten Garut, Jawa Barat 44110" }
    ]
  },
  {
    city: "Sukabumi",
    stores: [
      { name: "Yogya Sukabumi", address: "Jl. R. E. Martadinata No.3, Gunungparang, Kec. Cikole, Kota Sukabumi, Jawa Barat 43111" }
    ]
  },
  {
    city: "Sumedang",
    stores: [
      { name: "Griya Plaza Sumedang", address: "Jl. Mayor Abdurahman No.163, Kotakaler, Kec. Sumedang Utara, Kabupaten Sumedang, Jawa Barat 45322" }
    ]
  },
  {
    city: "Surabaya",
    stores: [
      { name: "Mama Asi Baby Shop", address: "Perum Alam Bukit Raya Blok A 15 no. 27, Dahanreja, Kec. Gresik, Kabupaten Gresik, Jawa Timur 61124" },
      { name: "Palapa Toserba", address: "Jl. Adityawarman No.47, Sawunggaling, Kec. Wonokromo, Surabaya, Jawa Timur 60242" },
      { name: "Makmur Mulyosari", address: "Jl. Raya Mulyosari, Kalisari, Kec. Mulyorejo, Surabaya, Jawa Timur 60112" },
      { name: "Makmur Lidah Wetan", address: "Raya Lidah Wetan No.844, Lidah Kulon, Kec. Lakarsantri, Surabaya, Jawa Timur 60213" },
      { name: "Makmur Kapas Krampung", address: "Jl. Kapas Krampung No.138, Ploso, Kec. Tambaksari, Surabaya, Jawa Timur 60133" },
      { name: "Makmur Krampung 2", address: "Jl. Kapas Krampung No.75-E, Ploso, Kec. Tambaksari, Surabaya, Jawa Timur 60133" },
      { name: "Makmur Pucang", address: "Jl. Pucang Anom No.50, Pucang Sewu, Kec. Gubeng, Surabaya, Jawa Timur 60283" }
    ]
  },
  {
    city: "Bandung",
    stores: [
      { name: "Borma - Cijerah", address: "Jl. Raya Cijerah No.90, Cijerah, Kec. Bandung Kulon, Kota Bandung, Jawa Barat 40213" },
      { name: "Borma - Cikutra SMR", address: "Jl. Cikutra Barat No.66, Cigadung, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40191" },
      { name: "Borma - DS Cipandung / SM Cipandung", address: "Borma Cipandung, Jl. A.H. Nasution No.4, Cipandung Kulon, Kec. Panyileukan, Kota Bandung, Jawa Barat 40615" },
      { name: "Borma - DS Setiabudi", address: "Jl. Dr. Setiabudi, Hegarmanah, Kec. Cidadap, Kota Bandung, Jawa Barat" },
      { name: "Borma Gempol", address: "Melong, Cimahi Selatan, Cimahi City, Jawa Barat" },
      { name: "Borma Kerkop", address: "Jl. Kerkof No.35, Leuwigajah, Kec. Cimahi Sel., Kota Cimahi, Jawa Barat 40532" },
      { name: "Ciku Ciku Baby & Kids Shop", address: "Jl. Astana Anyar No.60, Cibadak, Kec. Astanaanyar, Kota Bandung, Jawa Barat 40241" },
      { name: "Indokids - Antapani", address: "Jl. Terusan Jakarta No.53, Cicaheum, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40291" },
      { name: "Indokids - Jatos", address: "Jl. Raya Jatinangor No.150, Jatinangor Town Square, GFA05, Kec. Sumedang, Jawa Barat 45363" },
      { name: "Lavie Baby House", address: "Jl. Imam Bonjol No.6, Lebakgede, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132" },
      { name: "Prama Fresh Burangrang", address: "Jl. Burangrang No.37, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262" },
      { name: "Prama Fresh Garuda", address: "Jl. Garuda No.81, Garuda, Kec. Andir, Kota Bandung, Jawa Barat 40184" },
      { name: "Prama Fresh Perintis", address: "Jl. Perintis No.72, Sarijadi, Kec. Sukasari, Kota Bandung, Jawa Barat 40151" },
      { name: "Prama Toserba Babakan Sari", address: "Jl. Babakan Sari No.11, Babakan Sari, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40283" },
      { name: "Prama Toserba Ciparay", address: "Jl. Raya Laswi No.382, Serangmekar, Kec. Ciparay, Kabupaten Bandung, Jawa Barat 40381" },
      { name: "Prama Toserba Panjaran", address: "Jl. Raya Banjaran Barat No.588, Lebakwangi, Kec. Arjasari, Kabupaten Bandung, Jawa Barat 40379" },
      { name: "Suzana Babyshop", address: "Jl. Lembong No.12 14, RT.16/RW.18, Braga, Sumurbandung, Bandung City, West Java 40111" },
      { name: "Yens Baby Shop - Dakota", address: "Jl. Dakota No.109, Sukaraja, Kec. Cicendo, Kota Bandung, Jawa Barat 40175" },
      { name: "Yens Baby Shop - Lembang", address: "Jl. Raya Lembang 289 (Borma), Lembang, Bandung, Jawa Barat 40391" },
      { name: "Yens Baby Shop - Setiabudi", address: "Jl. Dr. Setiabudi No.174, Hegarmanah, Kec. Sukasari, Kota Bandung, Jawa Barat 40141" },
      { name: "Yogya Riau Junction", address: "LLRE Martadinata St, Citarum, Bandung Wetan, Bandung City, West Java 40115" }
    ]
  }
], null, 2);

const NEW_SECTIONS = [
  // GLOBAL
  {
    name: "Footer", pageSlug: "/global", status: "published",
    fields: [
      { key: "description", label: "Company Description", type: "textarea", value: "Loluna is dedicated to providing the safest, most gentle care for your little ones. Formulated in Australia, loved globally." },
      { key: "copyright", label: "Copyright Text", type: "text", value: "© 2026 Loluna. All rights reserved." },
      { key: "instagram", label: "Instagram URL", type: "text", value: "https://instagram.com/loluna.id" },
      { key: "tiktok", label: "TikTok URL", type: "text", value: "https://tiktok.com/@loluna.id" },
      { key: "whatsapp", label: "WhatsApp URL", type: "text", value: "https://wa.me/628123456789" },
    ]
  },
  {
    name: "SEO", pageSlug: "/global", status: "published",
    fields: [
      { key: "siteTitle", label: "Global Site Title", type: "text", value: "Loluna | Premium Baby Skincare" },
      { key: "siteDesc", label: "Global Site Description", type: "textarea", value: "Premium baby skincare formulated in Australia." },
      { key: "keywords", label: "Global Keywords", type: "text", value: "baby skincare, lotion, gentle care" },
    ]
  },
  
  // HOME PAGE
  {
    name: "Science & CSR", pageSlug: "/", status: "published",
    fields: [
      { key: "title", label: "Section Title", type: "text", value: "Formulated with Science, Crafted with Love" },
      { key: "description", label: "Section Description", type: "textarea", value: "Our products are formulated in Australia using 5X Ceramide technology to protect and nourish your baby's delicate skin barrier." },
      { key: "image1", label: "Image 1", type: "image", value: "/images/Section 4/Section 4_Formulated Australia.png" },
      { key: "image2", label: "Image 2", type: "image", value: "/images/Section 4/Section 4_Social Responsibility.png" },
      { key: "card1Title", label: "Card 1 Title", type: "text", value: "Formulated in Australia" },
      { key: "card1Desc", label: "Card 1 Description", type: "textarea", value: "Developed by experts with premium ingredients." },
      { key: "card2Title", label: "Card 2 Title", type: "text", value: "Social Responsibility" },
      { key: "card2Desc", label: "Card 2 Description", type: "textarea", value: "Committed to sustainability and community." },
    ]
  },
  {
    name: "Testimonials", pageSlug: "/", status: "published",
    fields: [
      { key: "title", label: "Section Title", type: "text", value: "Loved by Millions of Moms" },
      { key: "review1", label: "Review 1", type: "textarea", value: "\"Loluna is the only brand I trust for my newborn. The lotion is incredibly gentle and absorbs so fast!\"" },
      { key: "name1", label: "Name 1", type: "text", value: "Sarah W." },
      { key: "review2", label: "Review 2", type: "textarea", value: "\"I love how it smells! My baby's skin feels so soft and hydrated all day long.\"" },
      { key: "name2", label: "Name 2", type: "text", value: "Jessica K." },
      { key: "review3", label: "Review 3", type: "textarea", value: "\"Highly recommend! It cleared up my baby's dry patches within days.\"" },
      { key: "name3", label: "Name 3", type: "text", value: "Amanda R." },
    ]
  },
  {
    name: "FAQ", pageSlug: "/", status: "published",
    fields: [
      { key: "title", label: "Section Title", type: "text", value: "Frequently Asked Questions" },
      { key: "q1", label: "Question 1", type: "text", value: "Is Loluna safe for newborns?" },
      { key: "a1", label: "Answer 1", type: "textarea", value: "Yes, our products are hypoallergenic and dermatologically tested, making them safe for newborns." },
      { key: "q2", label: "Question 2", type: "text", value: "Are there any artificial fragrances?" },
      { key: "a2", label: "Answer 2", type: "textarea", value: "We only use allergen-free, subtle scents that are safe for delicate baby skin." },
      { key: "q3", label: "Question 3", type: "text", value: "Where are the products made?" },
      { key: "a3", label: "Answer 3", type: "textarea", value: "Our formulas are developed in Australia and manufactured in certified facilities." },
    ]
  },
  
  // ABOUT PAGE
  {
    name: "Our Story", pageSlug: "/about", status: "published",
    fields: [
      { key: "title", label: "Section Title", type: "text", value: "Our Story" },
      { key: "description", label: "Description", type: "textarea", value: "We started with a simple mission: to create the safest products for our own children. Years of research and testing led us to formulate Loluna." },
    ]
  },

  // PRODUCTS PAGE
  {
    name: "Products Hero", pageSlug: "/products", status: "published",
    fields: [
      { key: "title1", label: "Title Part 1", type: "text", value: "Premium skincare" },
      { key: "title2", label: "Title Part 2", type: "text", value: "formulated specially for" },
      { key: "title3", label: "Title Part 3 (Gradient)", type: "text", value: "your little ones" },
      { key: "description", label: "Description", type: "textarea", value: "Discover our range of gentle, effective, and safe baby products." },
      { key: "image", label: "Hero Image", type: "image", value: "/images/product/loluna head to toe baby wash pump.png" }
    ]
  },
  {
    name: "Products Newsletter", pageSlug: "/products", status: "published",
    fields: [
      { key: "title", label: "Title", type: "text", value: "Want early access to new products?" },
      { key: "description", label: "Description", type: "textarea", value: "Join our newsletter and get exclusive offers, parenting tips, and be the first to know about our latest launches." },
      { key: "placeholder", label: "Input Placeholder", type: "text", value: "Enter your email address" },
      { key: "buttonText", label: "Button Text", type: "text", value: "Subscribe Now" }
    ]
  },

  // ARTICLES PAGE
  {
    name: "Articles Header", pageSlug: "/articles", status: "published",
    fields: [
      { key: "title1", label: "Title Part 1", type: "text", value: "Our" },
      { key: "title2", label: "Title Part 2 (Gradient)", type: "text", value: "Articles" },
      { key: "description", label: "Description", type: "textarea", value: "Read the latest tips, news, and guides about baby care and parenting." }
    ]
  },

  // CONTACT PAGE
  {
    name: "Contact Header", pageSlug: "/contact", status: "published",
    fields: [
      { key: "badge", label: "Badge Text", type: "text", value: "Contact Us" },
      { key: "title1", label: "Title Part 1", type: "text", value: "Get in" },
      { key: "title2", label: "Title Part 2 (Gradient)", type: "text", value: "Touch" },
      { key: "description", label: "Description", type: "textarea", value: "We'd love to hear from you. Our friendly team is always here to chat." }
    ]
  },
  {
    name: "Contact Info", pageSlug: "/contact", status: "published",
    fields: [
      { key: "emailTitle", label: "Email Title", type: "text", value: "Chat to us" },
      { key: "emailDesc", label: "Email Description", type: "text", value: "Our friendly team is here to help." },
      { key: "emailValue", label: "Email Address", type: "text", value: "hello@lolunacare.com" },
      { key: "callTitle", label: "Call Title", type: "text", value: "Call us" },
      { key: "callDesc", label: "Call Description", type: "text", value: "Mon-Fri from 8am to 5pm." },
      { key: "callValue", label: "Phone Number", type: "text", value: "+62 811 234 5678" },
      { key: "locTitle", label: "Location Title", type: "text", value: "Visit us" },
      { key: "loc1", label: "Address Line 1", type: "text", value: "Loluna Headquarters" },
      { key: "loc2", label: "Address Line 2", type: "text", value: "Jl. Sudirman Kav 123" },
      { key: "loc3", label: "Address Line 3", type: "text", value: "Jakarta Selatan, 12190" }
    ]
  },
  {
    name: "Contact Form", pageSlug: "/contact", status: "published",
    fields: [
      { key: "title", label: "Form Title", type: "text", value: "Send us a message" },
      { key: "successTitle", label: "Success Title", type: "text", value: "Message Sent!" },
      { key: "successDesc", label: "Success Description", type: "text", value: "Thanks for reaching out. We'll get back to you shortly." }
    ]
  },

  // STORES PAGE
  {
    name: "Stores Header", pageSlug: "/stores", status: "published",
    fields: [
      { key: "badge", label: "Badge Text", type: "text", value: "Find Us" },
      { key: "title", label: "Title", type: "text", value: "Available at Your Favorite Stores" },
      { key: "description", label: "Description", type: "textarea", value: "Find Loluna products at trusted baby shops and supermarkets near you." }
    ]
  },
  {
    name: "Stores Locations", pageSlug: "/stores", status: "published",
    fields: [
      { key: "locationsJSON", label: "Locations Data (JSON)", type: "textarea", value: storeLocationsJSON }
    ]
  }
];

async function main() {
  console.log("Start seeding additional sections...");

  // Insert new pages
  for (const p of NEW_PAGES) {
    await prisma.page.upsert({
      where: { slug: p.slug },
      update: {},
      create: { name: p.name, slug: p.slug, icon: p.icon },
    });
    console.log(`Created/verified page: ${p.name}`);
  }

  // Get all pages to map slugs to IDs
  const allPages = await prisma.page.findMany();
  const pageMap = {};
  allPages.forEach(p => {
    pageMap[p.slug] = p.id;
  });

  // Seed sections
  for (const sec of NEW_SECTIONS) {
    const pageId = pageMap[sec.pageSlug];
    if (!pageId) {
      console.error(`Page ${sec.pageSlug} not found!`);
      continue;
    }
    
    // Check if section already exists
    const existing = await prisma.section.findFirst({
      where: { name: sec.name, pageId: pageId }
    });

    if (!existing) {
      await prisma.section.create({
        data: {
          name: sec.name,
          status: sec.status,
          fields: JSON.stringify(sec.fields),
          pageId: pageId,
        }
      });
      console.log(`  -> Created section: ${sec.name} for ${sec.pageSlug}`);
    } else {
      console.log(`  -> Section ${sec.name} already exists for ${sec.pageSlug}, skipping.`);
    }
  }

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
