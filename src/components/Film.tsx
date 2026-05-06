"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Film() {
  return (
    <section
      id="film"
      className="bg-[#0A0703] py-28 border-t border-[#C99420]/12"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-8 md:px-16 lg:px-24 xl:px-32"
      >
        <p className="text-[#C99420] text-[10px] tracking-[0.4em] uppercase text-center mb-4">
          The Animation
        </p>
        <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-normal text-[#F5EDD8] text-center mb-12">
          Watch the film
        </h2>

        <div className="w-full aspect-video rounded-sm overflow-hidden border border-[#C99420]/15 bg-black">
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
