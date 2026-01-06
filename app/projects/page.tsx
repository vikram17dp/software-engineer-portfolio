'use client'

import { useState, useMemo, useEffect } from 'react'
import { projects } from '@/data/projects'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Link from 'next/link'
import ProjectDetail from '@/components/ProjectDetail'
import Footer from '@/components/sections/footer'

const DOMAINS = [
  'All',
  'Full Stack',
  'Frontend',
  'Backend',
  'AI/ML',
]

export default function ProjectsPage() {
  const [activeDomain, setActiveDomain] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const filteredProjects = useMemo(() => {
    if (activeDomain === 'All') return projects
    return projects.filter(
      (p) => p.category.toLowerCase() === activeDomain.toLowerCase()
    )
  }, [activeDomain])

  const selectedProject =
    selectedIndex !== null ? filteredProjects[selectedIndex] : null

  /* 🔒 BODY LOCK + ESC */
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
      <main className="bg-black text-white min-h-screen">
        <Navigation />

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">

          {/* ================= HEADER + FILTER ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 mb-20 items-start">

            {/* LEFT */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition mb-3"
              >
                ← <span>Home</span>
              </Link>

              <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
                Projects
              </h1>

              <p className="text-white/60 text-lg">
                Selected works from 2023–2024
              </p>
            </div>

            {/* RIGHT */}
            <div className="lg:pt-12">
              <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
                Filter by domain
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {DOMAINS.map((domain) => (
                  <button
                    key={domain}
                    onClick={() => setActiveDomain(domain)}
                    className={`
                      px-4 py-2 text-sm border
                      ${
                        activeDomain === domain
                          ? 'border-white bg-white text-black'
                          : 'border-white/20 text-white/70 hover:border-white'
                      }
                      transition
                    `}
                  >
                    {domain}
                  </button>
                ))}

                {activeDomain !== 'All' && (
                  <button
                    onClick={() => setActiveDomain('All')}
                    className="px-4 py-2 text-sm border border-white/30 text-white/60 hover:border-white transition"
                  >
                    Clear ×
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ================= PROJECT LIST ================= */}
          <div className="space-y-28">
            {filteredProjects.map((project, index) => (
              <motion.section
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedIndex(index)}
                className="
                  grid lg:grid-cols-[1.2fr_0.8fr]
                  gap-14 items-center
                  cursor-pointer
                  group
                "
              >
                {/* IMAGE */}
                <div className="relative aspect-[16/9] overflow-hidden border border-white/10">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* CONTENT */}
                <div className="space-y-5">
                  <p className="text-xs tracking-widest uppercase text-white/50">
                    {String(index + 1).padStart(2, '0')} • {project.category}
                  </p>

                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-white/60 text-sm">
                    {project.year} • {project.role}
                  </p>

                  <p className="text-white/75 max-w-xl">
                    {project.purpose}
                  </p>

                  {project.tech && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs border border-white/20 text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
        <Footer/>
      </main>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black"
          >
            <ProjectDetail
              project={selectedProject}
              allProjects={projects}
              onClose={() => setSelectedIndex(null)}
              onProjectClick={(id) => {
                const nextIndex = filteredProjects.findIndex(p => p.id === id)
                setSelectedIndex(nextIndex)
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
