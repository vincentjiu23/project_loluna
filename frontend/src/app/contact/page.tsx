import prisma from "@/lib/prisma";
import ContactClient from "./ContactClient";
import { extractFields } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const page = await prisma.page.findUnique({
    where: { slug: "/contact" },
    include: { sections: true }
  });

  const sections = page?.sections || [];
  const headerSection = sections.find(s => s.name === "Contact Header");
  const infoSection = sections.find(s => s.name === "Contact Info");
  const formSection = sections.find(s => s.name === "Contact Form");

  const headerData = headerSection ? extractFields(headerSection.fields) : null;
  const infoData = infoSection ? extractFields(infoSection.fields) : null;
  const formDataSettings = formSection ? extractFields(formSection.fields) : null;

  return <ContactClient headerData={headerData} infoData={infoData} formDataSettings={formDataSettings} />;
}
