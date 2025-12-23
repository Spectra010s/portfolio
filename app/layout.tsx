import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Spectra010s | Adeloye Adetayo - Full Stack Developer",
  description:
    "Creative technologist exploring Web3 and hardware. Mechatronist building innovative solutions with curiosity.",
  keywords: ["Full Stack Developer", "Web3", "Mechatronics", "React", "TypeScript", "Node.js"],
  authors: [{ name: "Adeloye Adetayo", url: "https://github.com/Spectra010s" }],
  creator: "Spectra010s",
  metadataBase: new URL("https://spectra010s.vercel.app"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spectra010s.vercel.app",
    title: "Spectra010s | Adeloye Adetayo - Full Stack Developer",
    description:
      "Creative technologist exploring Web3 and hardware. Mechatronist building innovative solutions with curiosity.",
    siteName: "Spectra010s Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spectra010s - Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Spectra010s | Adeloye Adetayo - Full Stack Developer",
    description: "Creative technologist exploring Web3 and hardware. Mechatronist building innovative solutions.",
    creator: "@spectra010s",
    images: ["/og-image.png"],
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
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
