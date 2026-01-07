'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProjectSplitCard from './ProjectSplitCard'
import ExperienceDetail from './ExperienceDetail'
import { experiences } from '@/data/experience-data'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ExperienceSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selectedExperience =
    selectedIndex !== null ? experiences[selectedIndex] : null

  // SAFELY extract images
  const leftImage = experiences[0]?.images?.[0]
  const rightImage = experiences[1]?.images?.[0]

  return (
    <>
      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="bg-black px-6 md:px-12 py-24 md:py-32 text-white">
        <div className="max-w-7xl mx-auto space-y-28">

          {/* HEADER */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
              Experience
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4">
              Industry Experience
              <span className="text-white/40 ml-2">↘</span>
            </h1>

            <p className="max-w-2xl text-white/70 text-lg">
              Hands-on experience gained through internships and real-world
              production systems.
            </p>
          </motion.div>

          {/* SPLIT CARDS (ONLY IF IMAGES EXIST) */}
          {leftImage && rightImage && (
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
              <ProjectSplitCard
                image1={leftImage}
                image2={rightImage}
                label="View Experience"
                onLeftClick={() => setSelectedIndex(0)}
                onRightClick={() => setSelectedIndex(1)}
              />
            </motion.div>
          )}

          {/* EXPLORE EXPERIENCE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center pt-6"
          >


<Link href="/experience">
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

      {/* ================= EXPERIENCE MODAL ================= */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
          >
            <ExperienceDetail
              experience={selectedExperience}
              allExperiences={experiences}
              onExperienceClick={(id) => setSelectedIndex(id)}
              onClose={() => setSelectedIndex(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
