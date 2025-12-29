import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vikram D P - Software Engineer & Full Stack Developer",
  description:
    "Transforming ideas into powerful digital solutions through clean code and thoughtful design. Portfolio of Vikram D P, a Full Stack Developer based in Bangalore, India.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development"],
  openGraph: {
    title: "Vikram D P - Software Engineer",
    description: "Premium portfolio showcasing full-stack development expertise",
    type: "website",
  },
    generator: 'v0.app'
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
      <body className={`font-sans antialiased bg-[#0B0B0B] text-[#F5F5F5]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
