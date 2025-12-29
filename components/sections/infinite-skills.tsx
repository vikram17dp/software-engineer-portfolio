"use client"

import { motion } from "framer-motion"

const allSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Vue.js",
  "JavaScript",
  "Node.js",
  "Express",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Docker",
  "AWS",
  "Vercel",
  "Firebase",
  "GraphQL",
  "REST APIs",
  "Framer Motion",
  "Web Performance",
]

export default function InfiniteSkills() {
  const duplicatedSkills = [...allSkills, ...allSkills]

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-[#0B0B0B] overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 md:gap-8 whitespace-nowrap"
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {duplicatedSkills.map((skill, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-4 md:px-6 py-3 border border-[#333333] rounded-full bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/80 transition-colors duration-300"
              >
                <span className="text-sm md:text-base text-[#F5F5F5] tracking-wide">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
