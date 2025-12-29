"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#333333] px-6 md:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12"
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">Vikram D P</h3>
            <p className="text-[#d0d0d0] text-sm">Software Engineer & Full Stack Developer</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-[#888888] mb-4">Navigation</p>
            <ul className="space-y-2 text-[#d0d0d0] text-sm">
              <li>
                <a href="#" className="hover:text-[#F5F5F5] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F5F5F5] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F5F5F5] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F5F5F5] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs tracking-widest uppercase text-[#888888] mb-4">Social</p>
            <div className="flex gap-4 text-[#d0d0d0] text-sm">
              <a href="#" className="hover:text-[#F5F5F5] transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-[#F5F5F5] transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-[#F5F5F5] transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[#333333] pt-8 text-center text-[#888888] text-sm"
        >
          <p>© {currentYear} Vikram D P. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
