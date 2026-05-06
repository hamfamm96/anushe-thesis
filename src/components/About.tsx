"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { DownloadIcon, LinkedInIcon } from "./Icons";

export default function About() {
  const { project, creator } = siteConfig.about;
  const { thesis } = siteConfig;

  return (
    <section
      id="about"
      className="bg-[#0E0904] border-t border-[#C99420]/15 py-28 px-6 md:px-16"
    >
      <div className="max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Project block */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[#C99420] text-[10px] tracking-[0.38em] uppercase mb-3">
            The Project
          </p>
          <h3 className="font-serif text-[clamp(24px,3vw,36px)] font-normal text-[#F5EDD8] leading-[1.15] mb-7">
            {project.heading}
          </h3>

          {project.paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-[14px] text-[#F5EDD8]/55 leading-[1.9] mb-4"
            >
              {para}
            </p>
          ))}

          {/* Download thesis button */}
          <a
            href={thesis.downloadPath}
            download
            className="inline-flex items-center gap-3 mt-6 px-6 py-3 border border-[#C99420]/45 text-[#C99420] text-[11px] tracking-[0.15em] uppercase hover:bg-[#C99420]/08 hover:border-[#C99420] transition-all"
          >
            <DownloadIcon size={13} />
            {thesis.label}
          </a>
        </motion.div>

        {/* Creator block */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <p className="text-[#C99420] text-[10px] tracking-[0.38em] uppercase mb-3">
            The Creator
          </p>
          <h3 className="font-serif text-[clamp(24px,3vw,36px)] font-normal text-[#F5EDD8] leading-[1.15] mb-7">
            {creator.name}
          </h3>

          {creator.bio.map((para, i) => (
            <p
              key={i}
              className="text-[14px] text-[#F5EDD8]/55 leading-[1.9] mb-4"
            >
              {para}
            </p>
          ))}

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href={`mailto:${creator.email}`}
              className="inline-flex items-center gap-3 px-6 py-3 border border-[#C99420]/45 text-[#C99420] text-[11px] tracking-[0.15em] uppercase hover:bg-[#C99420]/08 hover:border-[#C99420] transition-all"
            >
              {creator.email}
            </a>
            <a
              href={creator.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-[#C99420]/45 text-[#C99420] text-[11px] tracking-[0.15em] uppercase hover:bg-[#C99420]/08 hover:border-[#C99420] transition-all"
            >
              <LinkedInIcon size={13} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
