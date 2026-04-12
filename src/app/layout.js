import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

export const metadata = {
  title: "Prajeet the Creator | Scholarship Guidance & Study in India",
  description:
    "Your complete guide to Indian scholarships — ICCR, COMPEX, Study in India & more. Get step-by-step application guidance, document checklists, embassy updates, and deadline alerts.",
  keywords: [
    "ICCR scholarship",
    "COMPEX scholarship",
    "Study in India",
    "Indian scholarships",
    "scholarship guidance",
    "Prajeet the Creator",
    "scholarship application",
    "embassy updates",
    "prajeet shah",
    "prajeetshah"

  ],
  openGraph: {
    title: "Prajeet the Creator | Scholarship Guidance & Study in India",
    description:
      "Your complete guide to Indian scholarships — ICCR, COMPEX, Study in India & more.",
    type: "website",
    locale: "en_US",
    siteName: "Prajeet the Creator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajeet the Creator | Scholarship Guidance",
    description:
      "Your complete guide to Indian scholarships — ICCR, COMPEX, Study in India & more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Prajeet Shah",
              "url": "https://prajeetthecreator.com",
              "sameAs": [
                "https://www.youtube.com/@prajeetthecreator",
                "https://www.facebook.com/prajeetshah24",
                "https://www.instagram.com/prajeetshah?igsh=N3BqcDRzZ3FicGFt"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
