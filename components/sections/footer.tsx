"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden min-h-[520px] md:min-h-[unset]">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/footer1-bg.jpeg"
      alt="Footer background"
      fill
      sizes="(max-width: 768px) 100vw, 1200px"
      className="object-cover object-top md:object-center opacity-40"
    />
    <div className="absolute inset-0 bg-black/65" />
  </div>

      {/* Footer Content */}
        <div className="relative z-10 px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">

          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-14"
          >
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Vikram D P
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Software Engineer & Full Stack Developer <br />
                Building scalable, real-world web systems
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs tracking-widest uppercase text-white/45 mb-4">
                Navigation
              </p>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs tracking-widest uppercase text-white/50 mb-4">
                Social
              </p>
              <div className="flex flex-col gap-2 text-white/75 text-sm">
                <a
                  href="https://www.linkedin.com/in/vikram-d-p/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/vikram17dp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  GitHub
                </a>
                  <a
                  href="https://leetcode.com/u/VIKRAM_D_P/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  LeetCode
                </a>
                <a
                  href="mailto:vikramdp.dev@gmail.com"
                  className="hover:text-white"
                >
                  Email
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white/50 text-sm"
          >
            © {currentYear} Vikram D P · Built with Next.js, Tailwind CSS & Framer Motion
          </motion.div>

        </div>
      </div>
    </footer>
  )
}
