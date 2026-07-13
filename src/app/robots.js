const BASE_URL = "https://www.prajeetthecreator.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/compex-practice/set*/exam",
          "/compex-practice/set*/physics",
          "/compex-practice/set*/chemistry",
          "/compex-practice/set*/english",
          "/compex-practice/set*/math",
          "/compex-practice/set*/biology",
          "/compex-practice/results/",
        ],
      },
      // explicit allow for AI crawlers — removes any ambiguity for GEO/AI visibility
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
