"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const links = [
  { label: "Film", href: "#film" },
  { label: "Concept", href: "#concept" },
  { label: "Characters", href: "#characters" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0E0904]/95 backdrop-blur-md border-b border-[#C99420]/10"
          : "bg-gradient-to-b from-[#0E0904]/80 to-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-5 flex justify-between items-center">
        <a
          href="#"
          className="font-serif text-[18px] tracking-[0.22em] text-[#F5EDD8] hover:text-[#C99420] transition-colors"
        >
          {siteConfig.title}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#8C7456] hover:text-[#F5EDD8] text-[11px] tracking-[0.18em] uppercase transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: just show nothing extra - hamburger not needed for single-page */}
        <div className="md:hidden flex gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#8C7456] hover:text-[#F5EDD8] text-[10px] tracking-[0.14em] uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
