import { scholarships } from "@/data/scholarships";
import FAQClient from "./FAQClient";
import { faqsData } from "@/data/faqs";

export function generateStaticParams() {
  return scholarships.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const scholarship = scholarships.find((s) => s.slug === resolvedParams.slug);
  if (!scholarship) return { title: "Not Found" };
  return {
    title: `${scholarship.title} FAQs | Prajeet the Creator`,
    description: `Frequently asked questions about the ${scholarship.title}.`,
  };
}

export default async function FAQPage({ params }) {
  const resolvedParams = await params;
  const scholarship = scholarships.find((s) => s.slug === resolvedParams.slug);
  const faqs = faqsData[resolvedParams.slug];
  
  if (!scholarship || !faqs) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <h1 className="text-2xl font-bold">FAQs not found</h1>
      </div>
    );
  }

  return <FAQClient scholarship={scholarship} faqs={faqs} />;
}
