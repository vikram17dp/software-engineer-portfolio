"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

/* ================= IMAGE SLIDER ================= */

function ImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)

  return (
    <div className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] rounded-2xl overflow-hidden border border-white/10 bg-black">
      <img
        src={images[index]}
        alt="education"
        className="w-full h-full object-fixed object-center"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={() => setIndex((index - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white border border-white/20 hover:bg-black"
          >
            ‹
          </button>

          <button
            onClick={() => setIndex((index + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white border border-white/20 hover:bg-black"
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}

/* ================= EDUCATION DATA ================= */

const education = [
  {
    title: "MVJ College of Engineering",
    subtitle: "Bachelor of Engineering in Computer Science and Engineering",
    duration: "Dec 2022 – Present",
    location: "Bangalore, Karnataka",
    highlight: "CGPA: 8.52 (Up to 6th Semester)",
    images: [
      "/education/mvj-college.webp",
      "/education/cgpa-banner3-puc.jpg",
    ],
  },
  {
    title: "The Team Academy",
    subtitle: "Pre-University Course (PCMB)",
    duration: "Jun 2021 – Mar 2022",
    location: "Davangere, Karnataka",
    highlight: "Percentage: 93.66%",
    images: [
      "/education/pucollege.webp",
      "/education/cgpa-banner-puc.jpg",
    ],
  },
  {
    title: "Sri Padavi Purva High School",
    subtitle: "SSLC (10th Grade)",
    duration: "Jan 2019 – Jul 2020",
    location: "Malladihalli, Karnataka",
    highlight: "Percentage: 85.6%",
    images: [
      "/education/sslc-school.webp",
      "/education/cgpa-banner-sslc.jpg",
    ],
  },
]

/* ================= PAGE ================= */

export default function EducationPage() {
  return (
    <section className="bg-black px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto space-y-28">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
            Education
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6">
            Academic Journey<span className="text-white/40 ml-2">↘</span>
          </h1>
          <p className="max-w-2xl text-white/70 text-lg">
            A snapshot of my academic background, achievements, and institutions
            that shaped my engineering foundation.
          </p>
        </motion.div>

        {/* EDUCATION ITEMS */}
        {education.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
          >
            {/* IMAGE (LEFT on desktop, TOP on mobile) */}
            <ImageSlider images={item.images} />

            {/* CONTENT */}
            <div
  className="
    relative
    p-8 md:p-10
    bg-black
    border border-white/20
    clip-path-tech
    overflow-hidden
    group
  "
>
  {/* Glitch gradient */}
  <div
    className="
      absolute inset-0
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500
      bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]
    "
  />

  {/* Corner accents */}
  <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/40" />
  <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
  <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />
  <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40" />

  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-wide">
    {item.title}
  </h2>

  <p className="text-white/80 mb-2 font-medium">
    {item.subtitle}
  </p>

  <p className="text-white/50 text-sm mb-6 tracking-wide">
    {item.duration} · {item.location}
  </p>

  {/* Highlight chip */}
  <div className="inline-flex items-center gap-2 px-5 py-2 border border-white/30 text-white text-sm tracking-wide bg-black">
    <span className="w-2 h-2 bg-white animate-pulse" />
    {item.highlight}
  </div>
</div>

          </motion.div>
        ))}
      </div>
    </section>
  )
}
