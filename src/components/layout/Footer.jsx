import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  scholarships: [
    { label: "ICCR Scholarship", href: "/scholarships/iccr-scholarship" },
    { label: "COMPEX Scholarship", href: "/scholarships/compex-scholarship" },
    { label: "Study in India", href: "/scholarships/study-in-india-sii" },
    {
      label: "Mahatma Gandhi",
      href: "/scholarships/mahatma-gandhi-scholarship",
    },
    {
      label: "Golden Jubilee",
      href: "/scholarships/golden-jubilee-scholarship",
    },
    {
      label: "Homi J. Bhabha",
      href: "/scholarships/homi-j-bhabha-scholarship",
    },
  ],
  resources: [
    { label: "Updates & Alerts", href: "/updates" },
    { label: "Document Guidance", href: "/documents" },
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  social: [
    {
      label: "YouTube",
      href: "https://youtube.com/@prajeetthecreator",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/prajeetshah?igsh=N3BqcDRzZ3FicGFt",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/prajeetshah24",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-dark-800/50">
      {/* Gradient line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl">
                <Image
                  src="/images/new-logo.png"
                  alt="Prajeet the Creator"
                  fill
                  sizes="40px"
                  loading="eager"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold gradient-text">Prajeet</span>
                <span className="text-[10px] text-dark-400 tracking-widest uppercase">
                  The Creator
                </span>
              </div>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed mb-6">
              Helping students understand scholarships, applications & embassy
              updates. Your trusted guide to studying in India.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark-800/50 text-dark-400 hover:text-white hover:bg-primary-600/20 transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Scholarships */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Scholarships
            </h3>
            <ul className="space-y-3">
              {footerLinks.scholarships.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Placeholder */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-dark-400 mb-4">
              Follow our YouTube channel for the latest scholarship updates and
              guidance.
            </p>
            <a
              href="https://youtube.com/@prajeetthecreator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe Now
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-dark-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-500">
            © {new Date().getFullYear()} Prajeet the Creator. All rights
            reserved.
          </p>
          <p className="text-xs text-dark-600">
            Scholarship information is for guidance only. Always verify with
            official sources.
          </p>
        </div>
      </div>
    </footer>
  );
}
