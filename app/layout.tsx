import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Pinyon_Script } from "next/font/google";
import { EngravingDefs } from "@/components/engraving/defs";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const pinyon = Pinyon_Script({ subsets: ["latin"], weight: "400", variable: "--font-pinyon" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument" });

// Icons and the share image are files in app/ (favicon.ico, icon.png, apple-icon.png, opengraph-image.png), which
// Next.js links automatically; metadataBase turns them and the canonical link into full URLs.
const title = `${siteConfig.name} ${siteConfig.year} · Ibad al-Rahman | MSA at UC San Diego`;
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: title, template: `%s | ${siteConfig.name} ${siteConfig.year}` },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} ${siteConfig.year}`,
  keywords: [
    "Tarbiyyah Conference", "Tarbiyah Conference", "Tarbiyyah Conference 2026", "MSA UCSD", "MSA at UC San Diego",
    "Muslim Student Association UC San Diego", "Islamic conference San Diego", "Ibad al-Rahman", "UCSD conference",
  ],
  authors: [{ name: "MSA at UC San Diego", url: siteConfig.websiteUrl }],
  creator: "MSA at UC San Diego",
  publisher: "MSA at UC San Diego",
  category: "event",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${siteConfig.name} ${siteConfig.year}`,
    title,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description: siteConfig.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

// Without JS nothing may stay hidden: the hero intro and title. (Scroll reveals only hide
// things while html.motion is set, which needs JS.) The sponsor ticker, which can't move, becomes a still row.
const noscriptCss =
  ".intro{opacity:1!important;transform:none!important}.night-reel-wrap{opacity:1!important}.glyph{stroke-dashoffset:0!important;fill-opacity:1!important}" +
  ".ticker-track{width:auto;flex-wrap:wrap;justify-content:center;row-gap:20px}.ticker-card[data-repeat]{display:none}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${pinyon.variable} ${serif.variable}`}>
      <head>
        <noscript><style>{noscriptCss}</style></noscript>
      </head>
      <body>
        <EngravingDefs />
        {children}
      </body>
    </html>
  );
}
