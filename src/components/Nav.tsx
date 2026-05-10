"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

const links = [
  { label: "Film",       href: "#film" },
  { label: "Concept",    href: "#concept" },
  { label: "Characters", href: "#characters" },
  { label: "About",      href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Intersection Observer for active section
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#0C0804]/97 backdrop-blur-md shadow-[0_1px_0_rgba(201,148,32,0.15)]"
            : "bg-[#0C0804]/80 backdrop-blur-sm"
        }`}
      >
        <div className="site-container py-4 md:py-[18px] flex justify-between items-center">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[17px] tracking-[0.24em] text-[#F5EDD8] hover:text-[#C99420] transition-colors duration-200"
          >
            {siteConfig.title}
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                    active === l.href ? "text-[#C99420]" : "text-[#F5EDD8]/60 hover:text-[#F5EDD8]"
                  }`}
                >
                  {l.label}
                  {active === l.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-[3px] left-0 right-0 h-px bg-[#C99420]/70"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="block h-px w-6 bg-[#F5EDD8]/70 origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
              className="block h-px w-4 bg-[#F5EDD8]/70 origin-center"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="block h-px w-6 bg-[#F5EDD8]/70 origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#0C0804]/98 backdrop-blur-md flex flex-col justify-center items-center gap-10 md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: i * 0.06, ease: "easeOut" }}
                onClick={() => setMenuOpen(false)}
                className={`font-serif text-[clamp(32px,8vw,48px)] font-normal tracking-[0.04em] transition-colors duration-200 ${
                  active === l.href ? "text-[#C99420]" : "text-[#F5EDD8]/80 hover:text-[#F5EDD8]"
                }`}
              >
                {l.label}
              </motion.a>
            ))}

            {/* Subtle divider + title */}
            <div className="absolute bottom-10 text-center">
              <span className="font-serif text-[13px] tracking-[0.28em] text-[#F5EDD8]/20">
                {siteConfig.title}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
