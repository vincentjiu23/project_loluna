import prisma from "@/lib/prisma";
import StoresClient from "./StoresClient";
import { extractFields } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function StoresPage() {
  const page = await prisma.page.findUnique({
    where: { slug: "/stores" },
    include: { sections: true }
  });

  const sections = page?.sections || [];
  const headerSection = sections.find(s => s.name === "Stores Header");
  const locationsSection = sections.find(s => s.name === "Stores Locations");

  const headerData = headerSection ? extractFields(headerSection.fields) : null;
  const locationsData = locationsSection ? extractFields(locationsSection.fields) : null;

  return <StoresClient headerData={headerData} locationsData={locationsData} />;
}
