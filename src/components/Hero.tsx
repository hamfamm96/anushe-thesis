"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ArrowDownIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.03]"
        style={{
          backgroundImage: `url('/images/ensemble.jpeg')`,
          backgroundPosition: "center 30%",
          filter: "brightness(0.48) saturate(1.1)",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,9,4,0.1) 0%, rgba(14,9,4,0.05) 35%, rgba(14,9,4,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#C99420] text-[10px] tracking-[0.38em] uppercase mb-7"
        >
          {siteConfig.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-[clamp(80px,15vw,170px)] font-normal leading-[0.88] tracking-[-0.01em] text-[#F5EDD8] mb-8"
        >
          {siteConfig.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-[15px] font-light italic tracking-[0.04em] text-[#F5EDD8]/60 max-w-[500px] mx-auto mb-12 leading-relaxed"
        >
          {siteConfig.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <div
            className="w-px h-12"
            style={{
              background: "linear-gradient(to bottom, #C99420, transparent)",
            }}
          />
          <span className="text-[#8C7456] text-[9px] tracking-[0.3em] uppercase flex items-center gap-2">
            Scroll <ArrowDownIcon size={12} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
