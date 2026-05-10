"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Film() {
  return (
    <section
      id="film"
      className="section section-divider bg-[#0C0804] relative"
    >
      {/* Top edge gold glow */}
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(201,148,32,0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="site-container--wide relative"
      >
        <div className="text-center mb-14 md:mb-20">
          <p className="eyebrow mb-5">The Animation</p>
          <h2
            className="font-serif font-normal text-[#F5EDD8] mb-5"
            style={{ fontSize: "var(--fs-h3)", lineHeight: 1.1 }}
          >
            Watch the film
          </h2>
          <p className="text-[13px] text-[#C8BEAA]/70 tracking-[0.02em] max-w-[480px] mx-auto">
            3D character animation &middot; Blender &middot;{" "}
            {siteConfig.about.creator.institution.split(",")[0]}
          </p>
        </div>

        {/* Video frame with gold corner brackets */}
        <div className="relative">
          <CornerAccents />
          <div className="relative overflow-hidden ring-1 ring-[#C99420]/20 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.75)]">
            <video
              className="w-full aspect-video block bg-black"
              controls
              preload="metadata"
              playsInline
              poster={siteConfig.film.poster}
            >
              <source src={siteConfig.film.src} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-3 px-1">
          <p className="text-[11px] text-[#F5EDD8]/30 tracking-[0.18em] uppercase">
            {siteConfig.title} &mdash; {siteConfig.about.creator.name}
          </p>
          <p className="text-[11px] text-[#F5EDD8]/30 tracking-[0.18em] uppercase">
            2026 &middot; BDes Thesis Film
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function CornerAccents() {
  const corners = [
    { pos: "-top-3 -left-3", rotate: "rotate-0" },
    { pos: "-top-3 -right-3", rotate: "rotate-90" },
    { pos: "-bottom-3 -right-3", rotate: "rotate-180" },
    { pos: "-bottom-3 -left-3", rotate: "-rotate-90" },
  ];
  return (
    <>
      {corners.map((c, i) => (
        <span
          key={i}
          className={`absolute ${c.pos} ${c.rotate} w-5 h-5 pointer-events-none z-10`}
          aria-hidden="true"
        >
          <span className="absolute top-0 left-0 w-full h-px bg-[#C99420]/70" />
          <span className="absolute top-0 left-0 h-full w-px bg-[#C99420]/70" />
        </span>
      ))}
    </>
  );
}
