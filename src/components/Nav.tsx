"use client";

import { siteConfig } from "@/config/site";

const links = [
  { label: "Film", href: "#film" },
  { label: "Concept", href: "#concept" },
  { label: "Characters", href: "#characters" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0E0904]/90 backdrop-blur-md border-b border-[#C99420]/12">
      <div className="px-8 md:px-16 lg:px-24 py-5 flex justify-between items-center">
        <a
          href="#"
          className="font-serif text-[18px] tracking-[0.22em] text-[#F5EDD8] hover:text-[#C99420] transition-colors"
        >
          {siteConfig.title}
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#F5EDD8]/65 hover:text-[#F5EDD8] text-[11px] tracking-[0.18em] uppercase transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: horizontal links — works up to ~380px */}
        <div className="md:hidden flex gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#F5EDD8]/60 hover:text-[#F5EDD8] text-[9px] tracking-[0.12em] uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
