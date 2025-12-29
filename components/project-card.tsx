"use client"

import { motion } from "framer-motion"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    category: string
    description: string
    image: string
    techs: string[]
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -8 }} className="group cursor-pointer">
      <div className="relative overflow-hidden h-56 md:h-64 mb-4 border border-[#333333] bg-[#1a1a1a]">
        {/* Image Container */}
        <div className="relative w-full h-full">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 right-4 flex items-center gap-2 text-[#F5F5F5] text-sm opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <span>View Project</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
            <path d="M6 10l4-4M10 6h-4v4" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div>
        <p className="text-xs md:text-sm text-[#888888] uppercase tracking-widest mb-2">{project.category}</p>
        <h3 className="text-lg md:text-xl font-bold text-[#F5F5F5] mb-2 group-hover:text-[#d0d0d0] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-[#d0d0d0] mb-4">{project.description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 border border-[#333333] text-[#d0d0d0] rounded hover:border-[#F5F5F5] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
