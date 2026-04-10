import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { buildJsonLd } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jsonLd = buildJsonLd();

export const metadata: Metadata = {
  title: "Adeloye Adetayo | Spectra010s",
  description:
    "Creative technologist exploring Web3 and hardware. Mechatronist building innovative solutions with curiosity.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  keywords: [
    "Full Stack Developer",
    "Spectra010s",
    "Web3",
    "Mechatronics",
    "React",
    "TypeScript",
    "Node.js",
  ],
  authors: [
    {
      name: "Adeloye Adetayo",
      url: "https://github.com/Spectra010s",
    },
  ],
  creator: "Spectra010s",
  metadataBase: new URL("https://spectra010s.vercel.app"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spectra010s.vercel.app",
    title: "Adeloye Adetayo | Spectra010s",
    description:
      "Creative technologist exploring Web3 and hardware. Mechatronist building innovative solutions with curiosity.",
    siteName: "Spectra010s Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Spectra010s - Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Adeloye Adetayo | Spectra010s",
    description:
      "Creative technologist exploring Web3 and hardware. Mechatronist building innovative solutions.",
    creator: "@spectra010s",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Spectra010s - Full Stack Developer Portfolio",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Q24M4X9zoQ0B3kNG3W7ekoB2-3_2fJi8_vNH2W7dTNU"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
