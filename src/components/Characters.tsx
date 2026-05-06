"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Characters() {
  return (
    <section
      id="characters"
      className="bg-[#0E0904] py-36 border-t border-[#C99420]/12"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="px-8 md:px-16 lg:px-24 mb-14"
      >
        <p className="text-[#C99420] text-[10px] tracking-[0.4em] uppercase mb-4">
          The Characters
        </p>
        <h2 className="font-serif text-[clamp(36px,5.5vw,68px)] font-normal leading-[1.05] text-[#F5EDD8]">
          Four identities.
          <br />
          One ensemble.
        </h2>
      </motion.div>

      {/* Grid: 2 cols mobile → 4 cols desktop, edge-to-edge with section padding */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {siteConfig.characters.map((char, i) => (
            <motion.div
              key={char.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="relative overflow-hidden group"
              style={{ aspectRatio: "3/5" }}
            >
              <Image
                src={char.image}
                alt={`${char.name} — ${char.ethnicity} character wearing ${char.outfit}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-top"
                style={{
                  filter: "brightness(0.62) saturate(1.05)",
                  transition: "transform 0.7s ease, filter 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter =
                    "brightness(0.82) saturate(1.15)";
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter =
                    "brightness(0.62) saturate(1.05)";
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1)";
                }}
              />

              {/* Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(14,9,4,0.97) 0%, rgba(14,9,4,0.2) 50%, transparent 72%)",
                }}
              />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
                <span className="inline-block mb-3 px-3 py-[5px] border border-[#C99420]/40 rounded-full text-[9px] md:text-[10px] tracking-[0.14em] uppercase text-[#C99420]/90">
                  {char.ethnicity}
                </span>

                <h3 className="font-serif text-[20px] md:text-[26px] font-normal text-[#F5EDD8] leading-none mb-2">
                  {char.name}
                </h3>
                <p className="text-[11px] md:text-[12px] text-[#F5EDD8]/60 leading-relaxed mb-1">
                  {char.outfit}
                </p>
                <p className="text-[11px] md:text-[12px] text-[#C99420]/75 tracking-wide">
                  {char.instrument}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
