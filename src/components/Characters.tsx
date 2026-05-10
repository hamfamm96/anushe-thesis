"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Characters() {
  return (
    <section
      id="characters"
      className="section section-divider bg-[#0C0804]"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="site-container mb-16 md:mb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">The Characters</p>
            <h2
              className="font-serif font-normal leading-[1.02] text-[#F5EDD8]"
              style={{ fontSize: "var(--fs-h2)" }}
            >
              Four identities.
              <br />
              <span className="text-[#C99420]">One ensemble.</span>
            </h2>
          </div>
          <p
            className="lg:col-span-5 text-[#C8BEAA]/75"
            style={{ fontSize: "var(--fs-body)", lineHeight: 1.85 }}
          >
            Each character is drawn from a close friend &mdash; their
            heritage rendered through traditional dress, regional pattern,
            and the instruments that carry their stories.
          </p>
        </div>
      </motion.div>

      <div className="site-container--wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {siteConfig.characters.map((char, i) => (
            <motion.article
              key={char.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="relative overflow-hidden group cursor-default ring-1 ring-[#C99420]/10"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src={char.image}
                alt={`${char.name} — ${char.ethnicity}, wearing ${char.outfit}, playing ${char.instrument}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
                style={{ filter: "brightness(0.66) saturate(1.05)" }}
              />

              {/* Base bottom gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(12,8,4,0.96) 0%, rgba(12,8,4,0.30) 48%, rgba(12,8,4,0.05) 78%)",
                }}
                aria-hidden="true"
              />

              {/* Index number */}
              <span className="absolute top-5 left-5 md:top-6 md:left-6 font-serif text-[11px] tracking-[0.32em] text-[#C99420]/65 z-10">
                {String(i + 1).padStart(2, "0")} &mdash; 04
              </span>

              {/* Region label, top right */}
              <span className="absolute top-5 right-5 md:top-6 md:right-6 text-[9px] tracking-[0.32em] uppercase text-[#F5EDD8]/55 z-10">
                {char.region}
              </span>

              {/* Static content (default) */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:px-7 md:pb-9 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:-translate-y-3 z-10">
                <span className="inline-block mb-4 px-[10px] py-[4px] border border-[#C99420]/45 rounded-full text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-[#C99420]">
                  {char.ethnicity}
                </span>
                <h3
                  className="font-serif font-normal text-[#F5EDD8] leading-none mb-3"
                  style={{ fontSize: "clamp(22px, 2.1vw, 30px)" }}
                >
                  {char.name}
                </h3>
                <p className="text-[12px] text-[#C99420]/85 tracking-[0.08em]">
                  {char.instrument}
                </p>
              </div>

              {/* Hover reveal */}
              <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8 md:px-7 md:pb-9 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 bg-gradient-to-t from-[#0C0804]/97 via-[#0C0804]/82 to-[#0C0804]/10">
                <p className="text-[9px] tracking-[0.32em] uppercase text-[#C99420]/65 mb-4">
                  {char.region} &middot; {char.ethnicity}
                </p>
                <h3
                  className="font-serif font-normal text-[#F5EDD8] leading-none mb-5"
                  style={{ fontSize: "clamp(24px, 2.3vw, 32px)" }}
                >
                  {char.name}
                </h3>
                <div className="w-7 h-px bg-[#C99420]/55 mb-5" />
                <div className="space-y-4">
                  <div>
                    <p className="text-[9px] tracking-[0.24em] uppercase text-[#C99420]/55 mb-1">
                      Outfit
                    </p>
                    <p className="text-[12px] text-[#F5EDD8]/75 leading-snug">
                      {char.outfit}
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.24em] uppercase text-[#C99420]/55 mb-1">
                      Instrument
                    </p>
                    <p className="text-[12px] text-[#C99420]/95">
                      {char.instrument}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
