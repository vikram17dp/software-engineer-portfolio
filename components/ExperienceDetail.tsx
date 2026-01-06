'use client'

import { useEffect, useRef } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { Experience } from '@/types/experience-interface'

interface Props {
  experience: Experience | null
  allExperiences?: Experience[]
  onExperienceClick?: (id: number) => void
  onClose: () => void
}

export default function ExperienceDetail({
  experience,
  allExperiences = [],
  onExperienceClick,
  onClose,
}: Props) {
  if (!experience) return null

  const scrollRef = useRef<HTMLDivElement>(null)

  const {
    id,
    company,
    role,
    duration,
    location,
    mode,
    description,
    detailedWork,
    highlights,
    techStack,
    images,
    companyLink,
  } = experience

  /* ESC close */
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', esc)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', esc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  /* Scroll top on change */
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 })
  }, [id])

  return (
    <div
      ref={scrollRef}
      className="fixed inset-0 z-[9999] bg-black text-white overflow-y-auto"
    >
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 z-50 w-10 h-10 border border-white/20 hover:bg-white/10 transition flex items-center justify-center"
      >
        <X size={18} />
      </button>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-12">
{/* HEADER */}
<section className="space-y-4">
  <p className="uppercase tracking-widest text-xs text-white/50">
    {mode} • {location}
  </p>

  <h1 className="text-4xl sm:text-5xl font-bold">
    {role}
  </h1>

  <div className="flex items-center gap-2 text-white/60">
    <span>
      {company} • {duration}
    </span>

    {companyLink && (
      <a
        href={companyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-8 h-8
          flex items-center justify-center
          border border-white/20
          hover:bg-white/10
          transition
        "
        aria-label="Company website"
      >
        <ExternalLink size={14} className="opacity-70" />
      </a>
    )}
  </div>
</section>


        <div className="border-t border-white/10 my-2" />

        {/* DESCRIPTION */}
        <section className="space-y-4">
          {description.map((d, i) => (
            <p key={i} className="text-white/75">{d}</p>
          ))}
        </section>

           <div className="border-t border-white/10 my-2" />

        {/* RESPONSIBILITIES */}
        {detailedWork && (
          <>
            <section className="space-y-4">
              <h2 className="uppercase tracking-widest text-xs text-white/60">
                Responsibilities
              </h2>
              {detailedWork.map((w, i) => (
                <p key={i} className="text-white/75">• {w}</p>
              ))}
            </section>

               <div className="border-t border-white/10 my-2" />
          </>
        )}

        {/* IMPACT */}
        {highlights && (
          <>
            <section className="space-y-4">
              <h2 className="uppercase tracking-widest text-xs text-white/60">
                Impact
              </h2>
              {highlights.map((h, i) => (
                <p key={i} className="text-white/75">✓ {h}</p>
              ))}
            </section>

            <div className="border-t border-white/10 my-4" />
          </>
        )}

        {/* TECH STACK */}
        <section>
          <h2 className="uppercase tracking-widest text-xs text-white/60 mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs border border-white/20"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <div className="border-t border-white/10 my-4" />

        {/* SCREENS */}
        {images && images.length > 1 && (
          <>
            <section>
              <h2 className="uppercase tracking-widest text-xs text-white/60 mb-4">
                Work & Screens
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="aspect-[18/10] overflow-hidden border border-white/10"
                  >
                    <img
                      src={img}
                      alt={`${company}-${i}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </section>

            <div className="border-t border-white/10 my-4" />
          </>
        )}

        {/* MORE EXPERIENCE */}
        {onExperienceClick && allExperiences.length > 1 && (
          <section>
            <h2 className="uppercase tracking-widest text-xs text-white/60 mb-6">
              More Experience
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {allExperiences
                .filter(e => e.id !== id)
                .slice(0, 2)
                .map(e => (
                  <div
                    key={e.id}
                    onClick={() => onExperienceClick(e.id)}
                    className="cursor-pointer group"
                  >
                    <div className="aspect-[18/10] overflow-hidden border border-white/10 mb-3">
                      <img
                        src={e.images?.[0] ?? ''}
                        alt={e.company}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    <p className="text-white/50 text-xs">{e.company}</p>
                    <h3 className="text-base font-semibold">{e.role}</h3>
                  </div>
                ))}
            </div>
          </section>
        )}

      </div>
    </div>
  )
}
