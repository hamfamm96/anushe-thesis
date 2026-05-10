import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Image from "next/image";
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
  keywords: [
    "Woven",
    "Pakistan",
    "3D animation",
    "cultural identity",
    "Kashmiri",
    "Pashtoon",
    "Sindhi",
    "Punjabi",
    "BDes thesis",
    siteConfig.about.creator.name,
  ],
  authors: [{ name: siteConfig.about.creator.name }],
  openGraph: {
    title: `${siteConfig.title} — ${siteConfig.about.creator.name}`,
    description: siteConfig.subtitle,
    type: "website",
    images: [
      {
        url: "/images/ensemble.jpeg",
        width: 1200,
        height: 630,
        alt: "Woven — four characters representing Pakistan's regions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.title} — ${siteConfig.about.creator.name}`,
    description: siteConfig.subtitle,
    images: ["/images/ensemble.jpeg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="text-[#F5EDD8] font-sans antialiased grain">
        {/* Fixed gallery background — visible through the hero, dims behind sections */}
        <div className="fixed inset-0 -z-10" aria-hidden="true">
          <Image
            src="/images/background.jpeg"
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          {/* Dark overlay so background never competes with text */}
          <div className="absolute inset-0 bg-[#0C0804]/78" />
        </div>

        {children}
      </body>
    </html>
  );
}
