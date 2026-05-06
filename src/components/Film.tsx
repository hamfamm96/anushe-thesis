"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Film() {
  return (
    <section id="film" className="bg-[#070402] py-24 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1040px] mx-auto"
      >
        <p className="text-[#C99420] text-[10px] tracking-[0.38em] uppercase text-center mb-3">
          The Animation
        </p>
        <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-normal text-[#F5EDD8] text-center mb-10">
          Watch the film
        </h2>

        <div
          className="w-full rounded-sm overflow-hidden border border-[#C99420]/15"
          style={{ aspectRatio: "16/9" }}
        >
          <video
            className="w-full h-full object-cover block"
            controls
            playsInline
            poster={siteConfig.film.poster}
          >
            <source src={siteConfig.film.src} type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </section>
  );
}
