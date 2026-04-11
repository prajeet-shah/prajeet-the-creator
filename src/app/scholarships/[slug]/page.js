import { scholarships } from "@/data/scholarships";
import ScholarshipDetailClient from "./ScholarshipDetailClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return scholarships.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const scholarship = scholarships.find((s) => s.slug === slug);
  if (!scholarship) return {};
  return {
    title: `${scholarship.title} | Prajeet the Creator`,
    description: scholarship.shortDescription,
  };
}

export default async function ScholarshipDetailPage({ params }) {
  const { slug } = await params;
  const scholarship = scholarships.find((s) => s.slug === slug);
  if (!scholarship) notFound();

  return <ScholarshipDetailClient scholarship={scholarship} />;
}
