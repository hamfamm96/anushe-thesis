"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Concept() {
  const [line1, line2] = siteConfig.concept.pullQuote;

  return (
    <section
      id="concept"
      className="bg-[#17100A] py-32 px-6 md:px-16 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[760px] mx-auto"
      >
        <p className="text-[#C99420] text-[10px] tracking-[0.38em] uppercase mb-6">
          The Concept
        </p>

        <p className="font-serif italic text-[clamp(28px,4.5vw,50px)] font-normal leading-[1.22] text-[#F5EDD8] mb-14">
          &ldquo;{line1}
          <br />
          <span className="text-[#C99420] not-italic">{line2}&rdquo;</span>
        </p>

        <div className="w-12 h-px bg-[#C99420]/20 mx-auto mb-10" />

        <div className="space-y-5 text-left md:text-center">
          {siteConfig.concept.body.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="text-[15px] text-[#F5EDD8]/55 leading-[1.9]"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
