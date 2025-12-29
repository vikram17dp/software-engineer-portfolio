"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

interface ProjectModalProps {
  project: {
    id: number
    title: string
    category: string
    image: string
    details: {
      year: string
      role: string
      duration: string
      purpose: string
      features: string[]
      tech: string
    }
  }
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
          <motion.div
            className="relative w-full max-w-4xl bg-[#1a1a1a] border border-[#333333] rounded-lg overflow-hidden"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 text-[#d0d0d0] hover:text-[#F5F5F5] transition-colors bg-[#0B0B0B]/50 p-2 rounded"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="p-6 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <p className="text-xs md:text-sm text-[#888888] uppercase tracking-widest mb-4">{project.category}</p>
                <h1 className="text-3xl md:text-5xl font-bold text-[#F5F5F5] mb-4">{project.title}</h1>

                {/* Meta Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-[#d0d0d0] mt-8 pt-8 border-t border-[#333333]">
                  <div>
                    <p className="text-xs text-[#888888] uppercase tracking-widest mb-2">Year</p>
                    <p>{project.details.year}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#888888] uppercase tracking-widest mb-2">Role</p>
                    <p>{project.details.role}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#888888] uppercase tracking-widest mb-2">Duration</p>
                    <p>{project.details.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#888888] uppercase tracking-widest mb-2">Status</p>
                    <p>Completed</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="mb-12">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-96 object-cover border border-[#333333] rounded"
                />
              </div>

              {/* Purpose */}
              <div className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#F5F5F5] mb-4">Purpose</h2>
                <p className="text-[#d0d0d0] leading-relaxed">{project.details.purpose}</p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-[#F5F5F5] mb-6">Core Modules</h2>
                <ul className="space-y-4">
                  {project.details.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 text-[#d0d0d0]"
                    >
                      <span className="text-[#F5F5F5] font-bold flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#F5F5F5] mb-4">Tech Stack</h2>
                <p className="text-[#d0d0d0] leading-relaxed">{project.details.tech}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
