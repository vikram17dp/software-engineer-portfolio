'use client'

import { useState, useEffect } from 'react'
import { experiences } from '@/data/experience-data'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/navigation'
import Link from 'next/link'
import ExperienceDetail from '@/components/ExperienceDetail'
import Footer from '@/components/sections/footer'

export default function ExperiencePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selectedExperience =
    selectedIndex !== null ? experiences[selectedIndex] : null

  /* 🔒 BODY LOCK + ESC (same as projects) */
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

          {/* ================= HEADER ================= */}
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
                Experience
              </h1>

              <p className="text-white/60 text-lg">
                Industry experience through internships & production systems
              </p>
            </div>

          </div>

          {/* ================= EXPERIENCE LIST ================= */}
          <div className="space-y-28">
            {experiences.map((exp, index) => (
              <motion.section
                key={exp.id}
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
                    src={exp.images?.[0] ?? '/placeholder.png'}
                    alt={exp.company}
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
                    {String(index + 1).padStart(2, '0')} • {exp.type}
                  </p>

                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                    {exp.role}
                  </h2>

                  <p className="text-white/60 text-sm">
                    {exp.company} • {exp.duration}
                  </p>

                  <p className="text-white/75 max-w-xl">
                    {exp.description[0]}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.techStack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs border border-white/20 text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>

        <Footer />
      </main>

      {/* ================= EXPERIENCE MODAL ================= */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black"
          >
            <ExperienceDetail
              experience={selectedExperience}
              allExperiences={experiences}
              onClose={() => setSelectedIndex(null)}
              onExperienceClick={(id) => {
                const nextIndex = experiences.findIndex(e => e.id === id)
                setSelectedIndex(nextIndex)
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
