"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "04", label: "Regions" },
  { value: "04", label: "Instruments" },
  { value: "3D", label: "Medium" },
  { value: "2026", label: "Thesis Year" },
];

const tools = ["Blender", "Substance", "After Effects", "DaVinci Resolve"];

export default function Craft() {
  return (
    <section
      id="craft"
      className="section--sm section-divider bg-[#0C0804]"
    >
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="eyebrow">The Craft</p>
        </motion.div>

        {/* Stats with vertical dividers on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-20 md:mb-24 relative">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
              className={`flex flex-col items-center text-center px-4 ${
                i > 0 ? "md:border-l md:border-[#C99420]/15" : ""
              }`}
            >
              <span
                className="font-serif font-normal text-[#C99420] leading-none mb-3"
                style={{ fontSize: "clamp(40px, 4.5vw, 60px)" }}
              >
                {s.value}
              </span>
              <span className="text-[10px] tracking-[0.34em] uppercase text-[#F5EDD8]/45">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-[#C99420]/35 mx-auto mb-10" />

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-[10px] tracking-[0.42em] uppercase text-[#C99420] mb-7">
            Crafted with
          </p>
          <ul className="flex flex-wrap justify-center items-center gap-x-7 gap-y-3 list-none">
            {tools.map((t, i) => (
              <li
                key={t}
                className="flex items-center gap-7 text-[12px] md:text-[13px] tracking-[0.18em] uppercase text-[#F5EDD8]/70"
              >
                <span>{t}</span>
                {i < tools.length - 1 && (
                  <span className="hidden sm:inline-block w-[3px] h-[3px] rotate-45 bg-[#C99420]/40" />
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
