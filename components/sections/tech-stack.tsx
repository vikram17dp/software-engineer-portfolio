"use client"

import { motion } from "framer-motion"
import TechCard from "@/components/tech-card"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}

const technologies = [
  { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", techs: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
  { category: "Tools & Platforms", techs: ["Git", "Docker", "AWS", "Vercel", "Firebase"] },
  { category: "Other", techs: ["GraphQL", "REST APIs", "Framer Motion", "Web Performance", "SEO"] },
]

export default function TechStack() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
              Technologies
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-[#d0d0d0] max-w-2xl mb-16">
              A curated collection of modern technologies I leverage to build scalable, performant, and beautiful
              digital experiences.
            </motion.p>

            {/* Tech Grid */}
            <motion.div variants={containerVariants} className="space-y-16">
              {technologies.map((group, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <h3 className="text-sm md:text-base tracking-widest uppercase text-[#d0d0d0] mb-8">
                    {group.category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {group.techs.map((tech, techIdx) => (
                      <TechCard key={techIdx} name={tech} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
