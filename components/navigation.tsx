"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Download, Eye } from "lucide-react"
import Menu from "./menu-modal"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 md:px-8 py-6 flex items-center justify-between">
        {/* Logo - Left */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Link href="/" className="text-2xl font-bold text-[#F5F5F5] hover:text-[#d0d0d0] transition-colors">
            V
          </Link>
        </motion.div>

        {/* MENU Button - Centered */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onMouseEnter={() => setIsMenuOpen(true)}
          onClick={() => setIsMenuOpen(true)}
          className="fixed left-1/2 top-6 -translate-x-1/2 flex items-center gap-3 px-6 py-3 bg-[#1a1a1a]/60 backdrop-blur-md border border-[#333333]/50 rounded-full hover:bg-[#1a1a1a]/80 transition-all duration-300 z-40"
        >
          <span className="text-sm tracking-widest uppercase text-[#F5F5F5]">Menu</span>
          <div className="flex items-center gap-2">
            <Eye size={16} className="text-[#F5F5F5]" />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-[#F5F5F5]"
            >
              <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" />
              <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
              <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
            </svg>
          </div>
        </motion.button>

        {/* Download Resume - Right */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          href="#"
          className="flex items-center gap-2 px-4 md:px-6 py-3 border border-[#F5F5F5] text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0B0B0B] transition-all duration-300 text-xs md:text-sm"
        >
          <Download size={16} />
          <span className="hidden md:inline">Download Resume</span>
          <span className="md:hidden">Resume</span>
        </motion.a>
      </nav>

      <AnimatePresence>{isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}</AnimatePresence>
    </>
  )
}
