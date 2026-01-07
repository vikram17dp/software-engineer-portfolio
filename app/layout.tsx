import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"


import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Vikram D P | Software Engineer & Full Stack Developer",
  description:
    "Software Engineer and Full Stack Developer from Bengaluru, India. Specializing in React, Next.js, TypeScript, and scalable web applications.",
  keywords: [
    "Vikram D P",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Bengaluru",
  ],
  authors: [{ name: "Vikram D P" }],
  creator: "Vikram D P",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://your-domain.com", // 🔁 replace after domain purchase
    siteName: "Vikram D P Portfolio",
    title: "Vikram D P | Software Engineer & Full Stack Developer",
    description:
      "Portfolio of Vikram D P showcasing full stack projects, clean UI, and scalable architectures.",
    images: [
      {
        url: "/v-letter-logo.webp",
        width: 1200,
        height: 630,
        alt: "Vikram D P Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vikram D P | Software Engineer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/v-logo.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://your-domain.com", // 🔁 replace later
  },

  icons: {
    icon: [
      { url: "/v-logo.webp", type: "image/webp" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      {
        url: "/v-logo.webp",
        sizes: "180x180",
        type: "image/webp",
      },
    ],
  },

  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0B0B0B",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B0B0B] text-[#F5F5F5]`}
      >

        {children}

        <Analytics />
      </body>
    </html>
  )
}
