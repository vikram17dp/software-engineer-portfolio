"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Download, Eye } from "lucide-react"
import Menu from "./menu-modal"
import Image from "next/image"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">

       {/* ================= LOGO (DESKTOP ONLY) ================= */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2 }}
  className="hidden md:flex"
>
  <Link
    href="/"
    className="
      flex items-center justify-center
      px-4 py-3
      rounded-xl
      bg-black/40
      border border-white/10
      backdrop-blur-md
      hover:bg-white/10
      transition
    "
  >
    <Image
      src="/vdp-logo.png"
      alt="VDP Logo"
      width={120}
      height={120}
      priority
      className="object-contain"
    />
  </Link>
</motion.div>


        {/* ================= DESKTOP MENU BUTTON ================= */}
        <motion.button
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onMouseEnter={() => setIsMenuOpen(true)}
          onClick={() => setIsMenuOpen(true)}
          className="
            hidden md:flex
            fixed left-1/2 top-6 -translate-x-1/2
            items-center justify-between
            w-[280px] lg:w-[420px]
            px-6 py-4
            rounded-
            bg-black/50
            backdrop-blur-xl
            border border-white/10
            shadow-md
            hover:bg-black/70
            transition-all duration-300
            z-40
          "
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white">
            Menu
          </span>

          <div className="flex items-center gap-3 text-white">
            <Eye size={16} />
            <div className="space-y-[3px]">
              <span className="block w-4 h-px bg-white" />
              <span className="block w-4 h-px bg-white" />
              <span className="block w-4 h-px bg-white" />
            </div>
          </div>
        </motion.button>

        {/* ================= DOWNLOAD (DESKTOP ONLY) ================= */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          href="/resume.pdf"
          className="
            hidden md:flex
            items-center gap-2
            px-6 py-3
            border border-white
            text-white
            hover:bg-white hover:text-black
            transition
            text-sm
          "
        >
          <Download size={16} />
          Download Resume
        </motion.a>

        {/* ================= MOBILE MENU BUTTON (ONLY MENU) ================= */}
        <motion.button
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={() => setIsMenuOpen(true)}
          className="
            md:hidden
            w-full
            flex items-center justify-between
            px-5 py-4
            rounded-full
            bg-black/60
            backdrop-blur-xl
            border border-white/10
            text-white
          "
        >
          <span className="text-[11px] tracking-[0.3em] uppercase">
            Menu
          </span>

          <div className="flex items-center gap-3">
            <Eye size={16} />
            <div className="space-y-[3px]">
              <span className="block w-4 h-px bg-white" />
              <span className="block w-4 h-px bg-white" />
              <span className="block w-4 h-px bg-white" />
            </div>
          </div>
        </motion.button>
      </nav>

      {/* ================= MENU MODAL ================= */}
      <AnimatePresence>
        {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
