import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#0A0703] border-t border-[#C99420]/12 py-10">
      <div className="px-8 md:px-16 lg:px-24 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-serif text-[15px] tracking-[0.22em] text-[#F5EDD8]/40">
          {siteConfig.title}
        </span>
        <p className="text-[11px] text-[#F5EDD8]/35 tracking-[0.05em]">
          &copy; 2026 {siteConfig.about.creator.name}
        </p>
        <p className="text-[11px] text-[#F5EDD8]/35 tracking-[0.05em] text-center sm:text-right">
          Design &amp; Visual Communication &middot; University for Creative Arts, Islamabad
        </p>
      </div>
    </footer>
  );
}
