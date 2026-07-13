import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import UpdateNotifier from "@/components/layout/UpdateNotifier";
import ClientProviders from "@/components/layout/ClientProviders";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.prajeetthecreator.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Prajeet the Creator | Scholarship Guidance & Study in India",
    template: "%s | Prajeet the Creator",
  },
  description:
    "Your complete guide to Indian scholarships — ICCR, COMPEX, Study in India & more. Get step-by-step application guidance, document checklists, embassy updates, and deadline alerts.",
  keywords: [
    "ICCR scholarship", "COMPEX scholarship", "Study in India",
    "Indian scholarships", "scholarship guidance", "Prajeet the Creator",
    "scholarship application", "embassy updates", "prajeet shah", "prajeetshah",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Prajeet the Creator | Scholarship Guidance & Study in India",
    description: "Your complete guide to Indian scholarships — ICCR, COMPEX, Study in India & more.",
    url: SITE_URL,
    siteName: "Prajeet the Creator",
    images: [{ url: "/images/og-cover.png", width: 1200, height: 630, alt: "Prajeet the Creator — Scholarship Guidance" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajeet the Creator | Scholarship Guidance",
    description: "Your complete guide to Indian scholarships — ICCR, COMPEX, Study in India & more.",
    images: ["/images/og-cover.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prajeet Shah",
              alternateName: "Prajeet the Creator",
              url: SITE_URL,
              sameAs: [
                "https://www.youtube.com/@prajeetthecreator",
                "https://www.facebook.com/prajeetshah24",
                "https://www.instagram.com/prajeetshah?igsh=N3BqcDRzZ3FicGFt",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Prajeet the Creator",
              url: SITE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/scholarships?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ClientProviders>
          <Navbar />
          <UpdateNotifier />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}