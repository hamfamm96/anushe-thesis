"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Concept() {
  const [line1, line2] = siteConfig.concept.pullQuote;
  const [para1, para2, para3] = siteConfig.concept.body;

  return (
    <section
      id="concept"
      className="section section-divider bg-[#100D09]"
    >
      <div className="site-container">
        {/* Asymmetric editorial header — eyebrow & pull-quote anchored left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 md:mb-28"
        >
          <div className="lg:col-span-3">
            <p className="eyebrow mb-4">The Concept</p>
            <div className="hidden lg:block w-10 h-px bg-[#C99420]/50" />
          </div>

          <div className="lg:col-span-9">
            <p
              className="font-serif italic font-normal text-[#F5EDD8] leading-[1.18]"
              style={{ fontSize: "var(--fs-h2)" }}
            >
              &ldquo;{line1}
              <br />
              <span className="text-[#C99420] not-italic">{line2}&rdquo;</span>
            </p>
          </div>
        </motion.div>

        {/* Two-column body on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-3 lg:col-start-1"
          >
            <p className="font-serif text-[14px] tracking-[0.32em] uppercase text-[#C99420]/55">
              Pakistan
              <br />
              <span className="text-[#F5EDD8]/40">Four regions</span>
            </p>
          </motion.div>

          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
              className="text-[#C8BEAA] drop-cap md:col-span-2"
              style={{ fontSize: "var(--fs-body)", lineHeight: 1.9 }}
            >
              {para1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" }}
              className="text-[#C8BEAA]"
              style={{ fontSize: "var(--fs-body)", lineHeight: 1.9 }}
            >
              {para2}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.24, ease: "easeOut" }}
              className="text-[#C8BEAA]"
              style={{ fontSize: "var(--fs-body)", lineHeight: 1.9 }}
            >
              {para3}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
