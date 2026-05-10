"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { DownloadIcon, LinkedInIcon } from "./Icons";

export default function About() {
  const { project, creator } = siteConfig.about;
  const { thesis } = siteConfig;

  return (
    <section id="about" className="section-divider bg-[#100D09]">
      {/* ═══ BLOCK 01 — The Project ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="site-container section"
      >
        <p className="eyebrow mb-12 md:mb-16">01 &mdash; The Project</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h3
              className="font-serif font-normal text-[#F5EDD8] leading-[1.15] mb-6"
              style={{ fontSize: "var(--fs-h3)" }}
            >
              {project.heading}
            </h3>
            <div className="w-12 h-px bg-[#C99420]/45" />
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-7 mb-12">
              {project.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-[#C8BEAA]"
                  style={{ fontSize: "var(--fs-body)", lineHeight: 1.95 }}
                >
                  {para}
                </p>
              ))}
            </div>

            <a
              href={thesis.downloadPath}
              download
              className="inline-flex items-center gap-5 group"
            >
              <span className="flex items-center justify-center w-12 h-12 border border-[#C99420]/45 text-[#C99420] transition-all duration-300 group-hover:bg-[#C99420]/12 group-hover:border-[#C99420]">
                <DownloadIcon size={15} />
              </span>
              <span className="text-[#C99420] text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 group-hover:text-[#F5EDD8]">
                {thesis.label}
              </span>
              <span className="h-px w-10 bg-[#C99420]/25 transition-all duration-500 group-hover:w-16 group-hover:bg-[#C99420]/60" />
            </a>
            <p className="mt-4 text-[11px] text-[#F5EDD8]/30 tracking-[0.12em] uppercase pl-[68px]">
              PDF &middot; Bachelor of Design &middot; 2026
            </p>
          </div>
        </div>
      </motion.div>

      <div className="site-container">
        <div className="h-px bg-[#C99420]/10" />
      </div>

      {/* ═══ BLOCK 02 — The Maker ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="site-container section"
      >
        <p className="eyebrow mb-10 md:mb-14">02 &mdash; The Maker</p>

        <h3
          className="font-serif font-normal text-[#F5EDD8] leading-[0.95] mb-6 break-words"
          style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
        >
          {creator.name}
        </h3>
        <div className="w-12 h-px bg-[#C99420] mb-8" />
        <p className="text-[11px] text-[#C99420]/70 tracking-[0.18em] uppercase mb-16 md:mb-20">
          {creator.degree} &middot; {creator.institution}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6">
            <p
              className="font-serif italic text-[#C8BEAA]/90 leading-[1.75]"
              style={{ fontSize: "var(--fs-lead)" }}
            >
              &ldquo;{creator.bio}&rdquo;
            </p>
          </div>

          <div className="lg:col-span-6">
            <p className="text-[9px] tracking-[0.34em] uppercase text-[#F5EDD8]/30 mb-6">
              Experience
            </p>
            <ul className="divide-y divide-[#C99420]/10 mb-12 list-none">
              {creator.experience.map((org, i) => (
                <li key={org} className="flex items-center gap-6 py-5">
                  <span className="font-serif text-[11px] text-[#C99420]/40 tracking-widest w-7 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] text-[#C8BEAA]/85">{org}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${creator.email}`}
                className="flex-1 inline-flex items-center justify-center px-5 py-4 border border-[#C99420]/30 text-[#C99420] text-[10px] tracking-[0.16em] uppercase transition-all duration-200 hover:bg-[#C99420]/10 hover:border-[#C99420] break-all"
              >
                {creator.email}
              </a>
              <a
                href={creator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#C99420]/30 text-[#C99420] text-[10px] tracking-[0.16em] uppercase transition-all duration-200 hover:bg-[#C99420]/10 hover:border-[#C99420]"
              >
                <LinkedInIcon size={13} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
