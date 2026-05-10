import { siteConfig } from "@/config/site";
import Ornament from "./Ornament";

export default function Footer() {
  return (
    <footer className="bg-[#080503] border-t border-[#C99420]/12 pt-20 pb-10">
      <div className="site-container">
        {/* Closing serif statement */}
        <div className="text-center mb-14 md:mb-16">
          <Ornament className="mb-8 md:mb-10" />
          <p
            className="font-serif italic font-normal text-[#F5EDD8]/85 leading-[1.25] max-w-[860px] mx-auto"
            style={{ fontSize: "clamp(22px, 3.2vw, 38px)" }}
          >
            Four threads. One cloth.
            <br />
            <span className="text-[#C99420] not-italic">Pakistan, woven.</span>
          </p>
        </div>

        <div className="h-px bg-[#C99420]/12 mb-8 md:mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <span className="font-serif text-[15px] tracking-[0.26em] text-[#F5EDD8]/45 text-center md:text-left">
            {siteConfig.title}
          </span>

          <p className="text-[10px] text-[#F5EDD8]/35 tracking-[0.18em] uppercase text-center">
            &copy; 2026 &middot; {siteConfig.about.creator.name}
          </p>

          <p className="text-[10px] text-[#F5EDD8]/35 tracking-[0.14em] uppercase text-center md:text-right">
            {siteConfig.about.creator.institution}
          </p>
        </div>
      </div>
    </footer>
  );
}
