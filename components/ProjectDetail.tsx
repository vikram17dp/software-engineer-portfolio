'use client'

import { useEffect, useRef } from 'react'
import { Github, ExternalLink, X } from 'lucide-react'
import { Credit, Project } from '@/types/projects'

interface ProjectDetailProps {
  project: Project | null
  allProjects: Project[]
  onClose: () => void
  onProjectClick: (id: number) => void
}

export default function ProjectDetail({
  project,
  allProjects,
  onClose,
  onProjectClick,
}: ProjectDetailProps) {
  if (!project) return null

  const scrollRef = useRef<HTMLDivElement>(null)

  const {
    id,
    title,
    category,
    year,
    role,
    duration,
    purpose,

    description = [],
    fullDescription = [],
    informationParagraphs = [],
    modules = [],

    images = [],
    tech = [],

    contribution,
    credits = [],

    github,
    live,
  } = project

  const suggestedProjects = allProjects.filter((p) => p.id !== id)

  /* ESC close */
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [onClose])

  /* ✅ SCROLL TO TOP — FIXED */
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [id])


  return (
    <div className="fixed inset-0 z-[9999] bg-black text-white overflow-y-auto"  ref={scrollRef}>

      {/* CLOSE */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 z-50 w-10 h-10 border border-white/20 bg-black/70 backdrop-blur hover:bg-white/10 transition flex items-center justify-center"
      >
        <X size={18} />
      </button>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 space-y-14">

        {/* ================= HERO ================= */}
        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">

          {/* IMAGE */}
          <div className="relative aspect-[18/10] overflow-hidden border border-white/10">
            {images[0] && (
              <img
                src={images[0]}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            )}
          </div>

          {/* TEXT */}
          <div className="space-y-5">

            <p className="uppercase tracking-widest text-white/50 text-xs">
              {category}
            </p>

            {/* TITLE + ACTION ICONS */}
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {title}
              </h1>

              <div className="flex gap-3">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-white/10 transition"
                  >
                    <Github size={18} />
                  </a>
                )}
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-white/10 transition"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-white/60 text-sm">
              {year} • {role} • {duration}
            </p>

            <p className="text-lg text-white/85">
              {purpose}
            </p>

            {description.map((d, i) => (
              <p key={i} className="text-white/70">
                {d}
              </p>
            ))}
          </div>
        </section>

        <div className="border-t border-white/10" />

        {/* ================= FULL DESCRIPTION ================= */}
        {fullDescription.length > 0 && (
          <>
            <section className="space-y-4 max-w-4xl">
              <h2 className="uppercase tracking-widest text-xs text-white/60">
                Project Breakdown
              </h2>

              {fullDescription.map((step, i) => (
                <p key={i} className="text-white/75 leading-relaxed">
                  {step}
                </p>
              ))}
            </section>
            <div className="border-t border-white/10" />
          </>
        )}

        {/* ================= MODULES ================= */}
        {modules.length > 0 && (
          <>
            <section>
              <h2 className="uppercase tracking-widest text-xs text-white/60 mb-4">
                Key Capabilities
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {modules.map((m, i) => (
                  <div
                    key={i}
                    className="border border-white/10 bg-white/5 p-4 text-sm"
                  >
                    {m}
                  </div>
                ))}
              </div>
            </section>
            <div className="border-t border-white/10" />
          </>
        )}

        {/* ================= ARCHITECTURE ================= */}
        {informationParagraphs.length > 0 && (
          <>
            <section className="space-y-4 max-w-4xl">
              <h2 className="uppercase tracking-widest text-xs text-white/60">
                Architecture
              </h2>
              {informationParagraphs.map((p, i) => (
                <p key={i} className="text-white/75">
                  {p}
                </p>
              ))}
            </section>
            <div className="border-t border-white/10" />
          </>
        )}

        {/* ================= TECHNOLOGIES ================= */}
        {tech.length > 0 && (
          <>
            <section>
              <h2 className="uppercase tracking-widest text-xs text-white/60 mb-4">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs border border-white/20 bg-white/5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
            <div className="border-t border-white/10" />
          </>
        )}

        {/* ================= CREDITS ================= */}
        {credits.length > 0 && (
          <>
            <section className="space-y-2">
              <h2 className="uppercase tracking-widest text-xs text-white/60">
                Credits
              </h2>
              {credits.map((credit: Credit, i) => (
                <p key={i} className="text-white/75">
                  <span className="text-white/50">{credit.role} → </span>
                  {credit.name}
                </p>
              ))}
            </section>
            <div className="border-t border-white/10" />
          </>
        )}

       {/* ================= SCREENS & USER FLOW ================= */}
{images.length > 1 && (
  <>
    <section>
      <h2 className="uppercase tracking-widest text-xs text-white/60 mb-4">
        Screens & User Flow
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.slice(1).map((img, i) => (
          <div
            key={i}
            className="aspect-[18/10] overflow-hidden border border-white/10"
          >
            <img
              src={img}
              alt={`${title}-${i}`}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>

    <div className="border-t border-white/10" />
  </>
)}

{/* ================= MORE PROJECTS ================= */}
<section>
  <h2 className="uppercase tracking-widest text-xs text-white/60 mb-6">
    More Projects
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {suggestedProjects.slice(0, 2).map((p) => (
      <div
        key={p.id}
        onClick={() => onProjectClick(p.id)}
        className="cursor-pointer group"
      >
        <div className="aspect-[18/10] overflow-hidden border border-white/10 mb-3">
          <img
            src={p.images[0]}
            alt={p.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <p className="text-white/50 text-xs">{p.category}</p>
        <h3 className="text-base font-semibold">{p.title}</h3>
      </div>
    ))}
  </div>
</section>

      </div>
    </div>
  )
}
