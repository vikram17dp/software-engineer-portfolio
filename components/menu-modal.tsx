"use client"

import { motion } from "framer-motion"
import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Twitter as TwitterIcon,
  Home as HomeIcon,
  X,
} from "lucide-react"

interface MenuModalProps {
  onClose: () => void
}

/* ================== ANIMATIONS ================== */

const menuVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 26,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 12,
    transition: { duration: 0.2 },
  },
}

const sectionItemVariants = {
  initial: { x: 0, opacity: 1 },
  hover: {
    x: 6,
    opacity: 0.9,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 26,
      mass: 1,
    },
  },
}

/* ================== COMPONENT ================== */

export default function MenuModal({ onClose }: MenuModalProps) {
  return (
    <>
      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      />

      {/* MENU */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onMouseLeave={onClose}
        className="
          fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          z-50
          w-[92%] sm:w-[520px] md:w-[560px]
          bg-[#141414]/95 backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-6 sm:p-8 md:p-10
          shadow-2xl
        "
      >
        {/* HEADER BAR */}
        <div
          className="
            w-full
            flex items-center justify-between
            px-10 sm:px-12
            py-4
            mb-8
            rounded-full
            bg-black/40
            border border-white/10
            backdrop-blur-md
          "
        >
          <span className="text-xs tracking-widest uppercase text-white/60">
            MENU
          </span>

          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="space-y-10">
          {/* SECTIONS */}
          <div>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Sections
            </p>

            <ul className="space-y-4">
              {[
                "Projects",
                "Featured",
                "Approach",
                "Tech Stack",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <motion.li
                  key={item}
                  layout="position"
                  initial="initial"
                  whileHover="hover"
                  variants={sectionItemVariants}
                >
                  <a
                    href="#"
                    onClick={onClose}
                    className="
                      relative
                      inline-block
                      overflow-hidden
                      text-white text-lg sm:text-xl
                      tracking-wide
                      transition-colors
                      hover:text-white/70
                      after:absolute
                      after:left-0
                      after:-bottom-1
                      after:h-px
                      after:w-0
                      after:bg-white/40
                      after:transition-all
                      after:duration-500
                      hover:after:w-full
                    "
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Navigation
            </p>

            <div className="flex items-center gap-6">
              <a href="/" title="Home">
                <HomeIcon className="w-5 h-5 text-white/80 hover:text-white transition" />
              </a>
              <a href="https://github.com" target="_blank">
                <GithubIcon className="w-5 h-5 text-white/80 hover:text-white transition" />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <LinkedinIcon className="w-5 h-5 text-white/80 hover:text-white transition" />
              </a>
              <a href="https://twitter.com" target="_blank">
                <TwitterIcon className="w-5 h-5 text-white/80 hover:text-white transition" />
              </a>

              <div className="flex-1 h-px bg-white/10 ml-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
