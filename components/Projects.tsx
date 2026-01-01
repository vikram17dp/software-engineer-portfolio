// src/components/Projects.tsx
'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProjectDetail from './ProjectDetail'
import ProjectSplitCard from './ProjectSplitCard'
import { projects } from '@/data/projects'

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
      {/* GRID */}
      <section className="px-6 pt-28 pb-20 bg-black text-white">
        <h2 className="text-6xl mb-20 flex items-center gap-4">
          Projects <span className="text-white/40">↘</span>
        </h2>

        <div className="space-y-20">
          {[0, 2].map((i) => (
            <ProjectSplitCard
              key={i}
              image1={projects[i].images[0]}
              image2={projects[i + 1]?.images[0]}
              onLeftClick={() => setSelectedIndex(i)}
              onRightClick={
                projects[i + 1]
                  ? () => setSelectedIndex(i + 1)
                  : undefined
              }
            />
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 overflow-y-auto"
          >
            <div className="min-h-screen">
              {/* Close button - Only one */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="fixed top-8 right-8 z-50 w-12 h-12 bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center text-xl transition-colors"
              >
                ✕
              </button>

              {/* Project Detail */}
              <ProjectDetail 
                title={selectedProject.title}
                category={selectedProject.category}
                year={selectedProject.year}
                description={selectedProject.description}
                informationParagraphs={selectedProject.informationParagraphs}
                images={selectedProject.images}
                tech={selectedProject.tech}
                role={selectedProject.role}
                duration={selectedProject.duration}
                github={selectedProject.github}
                live={selectedProject.live}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}