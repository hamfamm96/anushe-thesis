import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#0E0904] border-t border-[#C99420]/15 px-6 md:px-16 py-8">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="font-serif text-[15px] tracking-[0.2em] text-[#8C7456]">
          {siteConfig.title}
        </span>
        <p className="text-[11px] text-[#8C7456] tracking-[0.05em]">
          &copy; 2026 {siteConfig.about.creator.name}
        </p>
        <p className="text-[11px] text-[#8C7456] tracking-[0.05em] text-center sm:text-right">
          Design &amp; Visual Communication &middot; University for Creative Arts, Islamabad
        </p>
      </div>
    </footer>
  );
}
