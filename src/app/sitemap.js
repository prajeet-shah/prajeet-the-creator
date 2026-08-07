import { scholarships } from "@/data/scholarships";
import { faqsData } from "@/data/faqs";

const BASE_URL = "https://www.prajeetthecreator.com"; // must match your canonical (www) domain

export default function sitemap() {
  const now = new Date();

  const scholarshipPages = scholarships.map((s) => ({
    url: `${BASE_URL}/scholarships/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const faqPages = scholarships
    .filter((s) => faqsData[s.slug])
    .map((s) => ({
      url: `${BASE_URL}/faqs/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    }));

  return [
    { url: BASE_URL, lastModified: now, changeFrequency: "daily", priority: 1 },
    {
      url: `${BASE_URL}/scholarships`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/updates`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/documents`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/compex-practice`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/compex-practice/dashboard`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // ── Tools ──────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tools/image-resizer`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/tools/pdf-compressor`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/tools/merge-pdf`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/tools/jpg-to-pdf`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/tools/pdf-to-jpg`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/tools/compex-documents`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...scholarshipPages,
    ...faqPages,
  ];
}
