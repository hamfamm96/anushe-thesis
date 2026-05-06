"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Characters() {
  return (
    <section id="characters" className="bg-[#0E0904] py-28 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-16"
      >
        <p className="text-[#C99420] text-[10px] tracking-[0.38em] uppercase mb-3">
          The Characters
        </p>
        <h2 className="font-serif text-[clamp(36px,5.5vw,68px)] font-normal leading-[1.05] text-[#F5EDD8]">
          Four identities.
          <br />
          One ensemble.
        </h2>
      </motion.div>

      {/* Grid: 2 cols on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px]">
        {siteConfig.characters.map((char, i) => (
          <motion.div
            key={char.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className="relative overflow-hidden group"
            style={{ aspectRatio: "2/3" }}
          >
            <Image
              src={char.image}
              alt={char.name}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{
                filter: "brightness(0.65) saturate(1.05)",
                transition: "transform 0.7s ease, filter 0.4s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.filter =
                  "brightness(0.85) saturate(1.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.filter =
                  "brightness(0.65) saturate(1.05)";
              }}
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(14,9,4,0.97) 0%, rgba(14,9,4,0.3) 45%, transparent 70%)",
              }}
            />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
              {/* Ethnicity pill */}
              <span className="inline-block mb-3 px-3 py-1 border border-[#C99420]/40 rounded-full text-[9px] md:text-[10px] tracking-[0.14em] uppercase text-[#C99420]/90">
                {char.ethnicity}
              </span>

              <h3 className="font-serif text-[22px] md:text-[28px] font-normal text-[#F5EDD8] leading-none mb-2">
                {char.name}
              </h3>
              <p className="text-[11px] md:text-[12px] text-[#F5EDD8]/50 leading-relaxed">
                {char.outfit}
              </p>
              <p className="text-[11px] md:text-[12px] text-[#C99420]/70 mt-1 tracking-wide">
                {char.instrument}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
