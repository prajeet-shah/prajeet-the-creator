const BASE_URL = "https://prajeetthecreator.com"; // Update when you have your real domain

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
