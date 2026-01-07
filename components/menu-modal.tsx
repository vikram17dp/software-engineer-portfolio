"use client"

import { motion, type Variants } from "framer-motion"
import { X, Github, Linkedin, Home } from "lucide-react"

interface MenuModalProps {
  onClose: () => void
}

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 12,
  },
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
    transition: {
      duration: 0.2,
    },
  },
}

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
        className="
          fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          z-50
          w-[92%] sm:w-[520px]
          bg-[#141414]/95
          border border-white/10
          backdrop-blur-xl
          rounded-2xl
          p-8
          shadow-2xl
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs tracking-widest uppercase text-white/60">
            Menu
          </span>
          <button onClick={onClose} className="text-white/70 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* SECTIONS */}
        <div className="mb-10">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
            Sections
          </p>

          {[
            { label: "Experience", id: "experience" },
            { label: "Projects", id: "projects" },
            { label: "Tech Stack", id: "tech-stack" },
            { label: "Education", id: "education" },
            { label: "About", id: "about" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" })
                onClose()
              }}
              className="block w-full text-left text-white text-lg py-2 hover:text-white/70 transition"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* NAVIGATION */}
        <div>
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
            Navigation
          </p>

          <div className="flex items-center gap-6">
            <a href="/" title="Home">
              <Home className="w-5 h-5 text-white/80 hover:text-white transition" />
            </a>
            <a
              href="https://github.com/vikram17dp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 text-white/80 hover:text-white transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/vikram-d-p/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 text-white/80 hover:text-white transition" />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  )
}
