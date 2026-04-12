"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/updates", label: "Updates" },
  { href: "/documents", label: "Documents" },
  { 
    label: "FAQs",
    dropdown: [
      { href: "/faqs/iccr-scholarship", label: "ICCR" },
      { href: "/faqs/compex-scholarship", label: "COMPEX" },
      { href: "/faqs/study-in-india-sii", label: "Study in India" },
      { href: "/faqs/mahatma-gandhi-scholarship", label: "Mahatma Gandhi" },
      { href: "/faqs/golden-jubilee-scholarship", label: "Golden Jubilee" }
    ]
  },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "glass shadow-lg shadow-black/20 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo.png"
                alt="Prajeet the Creator Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold font-[family-name:var(--font-display)] gradient-text-vibrant leading-tight">
                Prajeet
              </span>
              <span className="text-[10px] text-dark-300 tracking-widest uppercase font-medium">
                The Creator
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 text-dark-200 hover:text-white hover:bg-white/5 flex items-center gap-1">
                      {link.label}
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 pt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="bg-dark-900 border border-dark-800 rounded-xl p-2 shadow-xl">
                        {link.dropdown.map(dropLink => (
                          <Link 
                            key={dropLink.href} 
                            href={dropLink.href}
                            className={`block px-4 py-2 text-sm rounded-lg transition-colors ${pathname === dropLink.href ? "text-primary-400 bg-primary-500/10" : "text-dark-300 hover:text-white hover:bg-dark-800"}`}
                          >
                            {dropLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${pathname === link.href
                      ? "text-primary-400 bg-primary-500/10"
                      : "text-dark-200 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-400" />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* YouTube CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://youtube.com/@prajeetthecreator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-600/20"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-y-auto custom-scrollbar ${isOpen ? "max-h-[80vh] mt-4" : "max-h-0"
            }`}
        >
          <div className="glass rounded-2xl p-4 space-y-2 border border-white/10">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-dark-400 uppercase tracking-wider hover:text-white transition-colors"
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180 text-white" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.label ? "max-h-96" : "max-h-0"}`}>
                      <div className="pl-4 space-y-1 pb-2">
                        {link.dropdown.map(dropLink => (
                          <Link
                            key={dropLink.href}
                            href={dropLink.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${pathname === dropLink.href
                              ? "text-primary-400 bg-primary-500/10"
                              : "text-dark-300 hover:text-white hover:bg-dark-800"
                            }`}
                          >
                            {dropLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${pathname === link.href
                      ? "text-primary-400 bg-primary-500/10"
                      : "text-white hover:bg-white/5"
                      }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="https://youtube.com/@prajeetthecreator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3.5 bg-red-600 hover:bg-red-700 rounded-xl text-sm font-bold text-white transition-all mt-3 active:scale-95"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
