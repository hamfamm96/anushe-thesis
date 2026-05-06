"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Concept() {
  const [line1, line2] = siteConfig.concept.pullQuote;

  return (
    <section
      id="concept"
      className="bg-[#17100A] py-36 border-t border-[#C99420]/12"
    >
      {/* Pull-quote: centred, narrow column */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-8 md:px-16 lg:px-24 text-center mb-16"
      >
        <p className="text-[#C99420] text-[10px] tracking-[0.4em] uppercase mb-6">
          The Concept
        </p>
        <p className="font-serif italic text-[clamp(30px,4.5vw,52px)] font-normal leading-[1.22] text-[#F5EDD8]">
          &ldquo;{line1}
          <br />
          <span className="text-[#C99420] not-italic">{line2}&rdquo;</span>
        </p>
      </motion.div>

      {/* Divider */}
      <div className="w-12 h-px bg-[#C99420]/20 mx-auto mb-16" />

      {/* Body copy: left-aligned in a readable column, centred on page */}
      <div className="px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-[780px] mx-auto space-y-7">
          {siteConfig.concept.body.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="text-[17px] text-[#F5EDD8]/72 leading-[1.9]"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
