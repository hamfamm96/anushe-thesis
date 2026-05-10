"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Ornament from "./Ornament";

const title = "Woven";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Gradient overlay so background characters don't compete with text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(12,8,4,0.35) 0%, rgba(12,8,4,0.0) 30%, rgba(12,8,4,0.92) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Radial gold glow behind title */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] w-[720px] h-[720px] max-w-[95vw] max-h-[95vw] pointer-events-none opacity-55"
        style={{
          background:
            "radial-gradient(circle, rgba(201,148,32,0.18) 0%, rgba(201,148,32,0) 60%)",
          filter: "blur(10px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full site-container text-center pt-28 pb-20">
        {/* Eyebrow */}
        {siteConfig.eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="eyebrow mb-7"
          >
            {siteConfig.eyebrow}
          </motion.p>
        )}

        {/* Title — letter-by-letter, wraps safely */}
        <h1
          className="font-serif font-normal text-[#F5EDD8] mb-6"
          style={{
            fontSize: "var(--fs-h1)",
            lineHeight: 0.88,
            letterSpacing: "-0.012em",
          }}
          aria-label={title}
        >
          <span className="inline-flex flex-wrap justify-center">
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.15 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Ornament className="mb-7" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
          className="font-serif italic text-[#C99420]/90 max-w-[560px] mx-auto mb-12 leading-[1.5]"
          style={{ fontSize: "var(--fs-lead)" }}
        >
          {siteConfig.subtitle}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center max-w-[440px] sm:max-w-none mx-auto mb-20"
        >
          <a
            href="#film"
            className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#C99420] text-[#0C0804] text-[11px] tracking-[0.22em] uppercase font-medium transition-all duration-300 hover:bg-[#E5B649] hover:shadow-[0_0_30px_rgba(201,148,32,0.35)]"
          >
            <span>Watch the Film</span>
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </a>
          <a
            href="#concept"
            className="inline-flex items-center justify-center gap-3 px-7 py-3.5 border border-[#C99420]/40 text-[#C99420] text-[11px] tracking-[0.22em] uppercase transition-all duration-300 hover:border-[#C99420] hover:bg-[#C99420]/10"
          >
            <span>Explore the Concept</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="hidden sm:flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 origin-top"
            style={{
              background: "linear-gradient(to bottom, #C99420, transparent)",
            }}
          />
          <span className="text-[#F5EDD8]/35 text-[9px] tracking-[0.36em] uppercase">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
