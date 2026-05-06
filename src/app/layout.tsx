import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.title} — ${siteConfig.about.creator.name}`,
  description: siteConfig.subtitle,
  openGraph: {
    title: `${siteConfig.title} — ${siteConfig.about.creator.name}`,
    description: siteConfig.subtitle,
    images: [{ url: "/images/ensemble.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-[#0E0904] text-[#F5EDD8] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
