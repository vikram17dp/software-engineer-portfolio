'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProjectSplitCard from './ProjectSplitCard'
import { projects } from '@/data/projects'
import ProjectDetail from './ProjectDetail'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selectedProject =
    selectedIndex !== null ? projects[selectedIndex] : null

  // ESC + body lock
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
    }

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', esc)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      window.removeEventListener('keydown', esc)
      document.body.style.overflow = ''
    }
  }, [selectedIndex])

  return (
    <>
      {/* ================= PROJECTS SECTION ================= */}
      <section className="bg-black px-6 md:px-12 py-24 md:py-32 text-white">
        <div className="max-w-7xl mx-auto space-y-28">

          {/* ===== HEADER (LIKE EDUCATION) ===== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Projects
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4">
  Engineering Projects
  <span className="text-white/40 ml-2">↘</span>
</h1>


              <p className="max-w-2xl text-white/70 text-lg">
  A curated collection of academic, internship, and personal projects focused on solving real-world problems through software engineering.
</p>
          </motion.div>

          {/* ===== PROJECT SPLIT CARDS (4 PROJECTS) ===== */}
          <div className="space-y-28">
            {[0, 2].map((i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ProjectSplitCard
                  image1={projects[i].images[0]}
                  image2={projects[i + 1]?.images[0]}
                  onLeftClick={() => setSelectedIndex(i)}
                  onRightClick={
                    projects[i + 1]
                      ? () => setSelectedIndex(i + 1)
                      : undefined
                  }
                />
              </motion.div>
            ))}
          </div>

          {/* ===== MORE PROJECTS BUTTON ===== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center pt-6"
          >


<Link href="/projects">
  <button
    className="
      relative
      px-10 py-4
      bg-black
      text-white
      border border-white
      tracking-widest
      uppercase
      text-sm
      overflow-hidden
      group
      transition-all
      duration-300
      hover:bg-white
      hover:text-black
      white-space-nowrap
      cursor-pointer
    "
  >
    {/* Hover shine */}
    <span
      className="
        absolute inset-0
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        bg-[linear-gradient(120deg,transparent,rgba(0,0,0,0.15),transparent)]
      "
    />

    {/* Text */}
    <span className="relative z-10 flex items-center gap-2 whitespace-nowrap cursor-pointer">
      Explore More Projects
      <span className="opacity-70">↘</span>
    </span>
  </button>
</Link>



          </motion.div>

        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
          >
            <ProjectDetail
              project={selectedProject}
              allProjects={projects}
              onClose={() => setSelectedIndex(null)}
              onProjectClick={(id) => setSelectedIndex(id)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
