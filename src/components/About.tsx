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
      className="bg-[#17100A] py-36 border-t border-[#C99420]/12"
    >
      <div className="px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Two-column grid — mx-auto centres it on wide screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-[1200px] mx-auto">

          {/* Project block */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[#C99420] text-[10px] tracking-[0.4em] uppercase mb-4">
              The Project
            </p>
            <h3 className="font-serif text-[clamp(24px,2.8vw,36px)] font-normal text-[#F5EDD8] leading-[1.15] mb-8">
              {project.heading}
            </h3>

            {project.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-[16px] text-[#F5EDD8]/72 leading-[1.9] mb-5"
              >
                {para}
              </p>
            ))}

            <a
              href={thesis.downloadPath}
              download
              className="inline-flex items-center gap-3 mt-4 px-7 py-[14px] border border-[#C99420]/45 text-[#C99420] text-[11px] tracking-[0.15em] uppercase transition-all hover:bg-[#C99420]/10 hover:border-[#C99420]"
            >
              <DownloadIcon size={13} />
              {thesis.label}
            </a>
          </motion.div>

          {/* Creator block */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          >
            <p className="text-[#C99420] text-[10px] tracking-[0.4em] uppercase mb-4">
              The Creator
            </p>
            <h3 className="font-serif text-[clamp(24px,2.8vw,36px)] font-normal text-[#F5EDD8] leading-[1.15] mb-8">
              {creator.name}
            </h3>

            {creator.bio.map((para, i) => (
              <p
                key={i}
                className="text-[16px] text-[#F5EDD8]/72 leading-[1.9] mb-5"
              >
                {para}
              </p>
            ))}

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href={`mailto:${creator.email}`}
                className="inline-flex items-center gap-3 px-7 py-[14px] border border-[#C99420]/45 text-[#C99420] text-[11px] tracking-[0.15em] uppercase transition-all hover:bg-[#C99420]/10 hover:border-[#C99420]"
              >
                {creator.email}
              </a>
              <a
                href={creator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-[14px] border border-[#C99420]/45 text-[#C99420] text-[11px] tracking-[0.15em] uppercase transition-all hover:bg-[#C99420]/10 hover:border-[#C99420]"
              >
                <LinkedInIcon size={13} />
                LinkedIn
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
