import { scholarships } from "@/data/scholarships";
import ScholarshipDetailClient from "./ScholarshipDetailClient";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.prajeetthecreator.com";

export function generateStaticParams() {
  return scholarships.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const scholarship = scholarships.find((s) => s.slug === slug);
  if (!scholarship) return {};
  return {
    title: `${scholarship.title}: Eligibility, Documents & How to Apply (${scholarship.deadline !== "NA" ? "2026-27" : "Guide"})`,
    description: scholarship.shortDescription,
    alternates: { canonical: `/scholarships/${slug}` },
    openGraph: {
      title: scholarship.title,
      description: scholarship.shortDescription,
      url: `${SITE_URL}/scholarships/${slug}`,
      type: "article",
    },
  };
}

export default async function ScholarshipDetailPage({ params }) {
  const { slug } = await params;
  const scholarship = scholarships.find((s) => s.slug === slug);
  if (!scholarship) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: scholarship.title,
    description: scholarship.shortDescription,
    author: { "@type": "Person", name: "Prajeet Shah" },
    publisher: { "@type": "Organization", name: "Prajeet the Creator" },
    mainEntityOfPage: `${SITE_URL}/scholarships/${slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Scholarships",
        item: `${SITE_URL}/scholarships`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: scholarship.title,
        item: `${SITE_URL}/scholarships/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ScholarshipDetailClient scholarship={scholarship} />
    </>
  );
}
