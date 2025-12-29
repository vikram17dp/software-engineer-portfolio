"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Home } from "lucide-react"

interface MenuModalProps {
  onClose: () => void
}

const menuVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export default function MenuModal({ onClose }: MenuModalProps) {
  const menuSections = [
    {
      title: "SECTIONS",
      items: ["Projects", "Featured", "Approach", "Tech Stack", "Testimonials", "Contact"],
    },
  ]

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "Home", icon: Home, url: "/" },
  ]

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onMouseLeave={onClose}
      />

      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onMouseLeave={onClose}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a]/95 backdrop-blur-md border border-[#333333] rounded-lg p-8 z-50 w-full max-w-sm mx-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#d0d0d0] hover:text-[#F5F5F5] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {menuSections.map((section, idx) => (
            <div key={idx}>
              <motion.p variants={itemVariants} className="text-xs tracking-widest uppercase text-[#888888] mb-4">
                {section.title}
              </motion.p>
              <motion.ul variants={containerVariants} className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <motion.li key={itemIdx} variants={itemVariants}>
                    <a
                      href="#"
                      onClick={onClose}
                      className="text-[#F5F5F5] hover:text-[#d0d0d0] transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}

          {/* Social Links with Icons */}
          <div>
            <motion.p variants={itemVariants} className="text-xs tracking-widest uppercase text-[#888888] mb-4">
              NAVIGATION
            </motion.p>
            <motion.div variants={containerVariants} className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={idx}
                    variants={itemVariants}
                    href={social.url}
                    className="text-[#F5F5F5] hover:text-[#d0d0d0] transition-colors hover:scale-110 transform duration-200"
                    title={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
