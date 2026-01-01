// src/components/ProjectDetail.tsx
'use client'

import { useEffect } from 'react'

interface ProjectDetailProps {
  title: string
  category: string
  year: string
  role: string
  duration: string
  purpose: string
  modules: string[]
  description: string[]
  informationParagraphs?: string[]
  images: string[]
  tech: string[]
  github?: string
  live?: string
  related?: number[]
  allProjects?: any[]
  onClose?: () => void
  onProjectClick?: (id: number) => void
}

export default function ProjectDetail({
  title,
  category,
  year,
  role,
  duration,
  purpose,
  modules,
  description,
  informationParagraphs,
  images,
  tech,
  github,
  live,
  related = [],
  allProjects = [],
  onClose,
  onProjectClick,
}: ProjectDetailProps) {
  const relatedProjects = allProjects.filter(p => related.includes(p.id))

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Header Buttons - Responsive */}
      <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-[9999] flex gap-2 sm:gap-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 border border-white/30 bg-black/90 backdrop-blur hover:bg-white/10 flex items-center justify-center transition-all"
            aria-label="GitHub Repository"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 border border-white/30 bg-black/90 backdrop-blur hover:bg-white/10 flex items-center justify-center transition-all"
            aria-label="Live Demo"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        <button
          onClick={() => onClose?.()}
          className="w-10 h-10 sm:w-12 sm:h-12 border border-white/30 bg-black/90 backdrop-blur hover:bg-white/10 flex items-center justify-center transition-all"
          type="button"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Content - Single Scroll */}
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section - Responsive grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-20 mb-12 sm:mb-16">
            {/* Left - First Image */}
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-900/20 via-black to-black p-4 sm:p-6 lg:p-8 rounded-lg border border-white/10">
              {images[0] && (
                <img
                  src={images[0]}
                  alt={`${title} main`}
                  className="w-full h-auto object-cover rounded"
                />
              )}
            </div>

            {/* Right - Project Info */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="space-y-2 sm:space-y-4">
                <p className="text-xs uppercase tracking-widest text-white/50">
                  {category}
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  {title}
                </h1>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-white/60 text-xs sm:text-sm lg:text-base">
                  <span>{year}</span>
                  <span>•</span>
                  <span>{role}</span>
                  <span>•</span>
                  <span>{duration}</span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-4">
                <h2 className="text-xs sm:text-sm uppercase tracking-widest text-white/70">
                  Vision
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
                  {purpose}
                </p>
              </div>

              {description && description.length > 0 && (
                <div className="space-y-3 sm:space-y-4">
                  {description.map((para, i) => (
                    <p key={i} className="text-white/80 leading-relaxed text-sm sm:text-base">
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Full Width Content Section */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Key Capabilities */}
            {modules && modules.length > 0 && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xs sm:text-sm uppercase tracking-widest text-white/70">
                  Key Capabilities
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {modules.map((module, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-2 text-white/80 leading-relaxed text-sm sm:text-base"
                    >
                      <span className="mt-1">→</span>
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture/Information */}
            {informationParagraphs && informationParagraphs.length > 0 && (
              <div className="space-y-4 sm:space-y-6 border-t border-white/10 pt-8 sm:pt-12">
                <h2 className="text-xs sm:text-sm uppercase tracking-widest text-white/70">
                  Architecture
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {informationParagraphs.map((para, i) => (
                    <p key={i} className="text-white/80 leading-relaxed text-sm sm:text-base max-w-4xl">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* User Flow Section - Additional Screenshots */}
            {images.length > 1 && (
              <div className="space-y-4 sm:space-y-6 border-t border-white/10 pt-8 sm:pt-12">
                <h2 className="text-xs sm:text-sm uppercase tracking-widest text-white/70">
                  User Flow
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                  {images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-purple-900/10 to-black p-2 sm:p-3 lg:p-4"
                    >
                      <img
                        src={img}
                        alt={`${title} screenshot ${i + 2}`}
                        className="w-full h-auto object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-4 sm:space-y-6 border-t border-white/10 pt-8 sm:pt-12">
              <h2 className="text-xs sm:text-sm uppercase tracking-widest text-white/70">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {tech.map((technology, idx) => (
                  <span
                    key={`${technology}-${idx}`}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/20 text-xs sm:text-sm hover:bg-white/10 transition-colors"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            

            {/* Related Projects */}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className="space-y-4 sm:space-y-6 border-t border-white/10 pt-8 sm:pt-12 pb-12 sm:pb-16">
                <h2 className="text-xs sm:text-sm uppercase tracking-widest text-white/70">
                  Related Projects
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {relatedProjects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => onProjectClick?.(project.id)}
                      className="group border border-white/10 p-4 sm:p-6 hover:border-white/30 transition-all bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs uppercase tracking-widest text-white/50 mb-1 sm:mb-2 truncate">
                            {project.category}
                          </p>
                          <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-white/90 truncate">
                            {project.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-white/60 mb-2 sm:mb-3">
                            {project.year} • {project.duration}
                          </p>
                          {project.description && project.description[0] && (
                            <p className="text-xs sm:text-sm text-white/70 line-clamp-2">
                              {project.description[0]}
                            </p>
                          )}
                        </div>
                        {project.images && project.images[0] && (
                          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded overflow-hidden border border-white/10 flex-shrink-0">
                            <img
                              src={project.images[0]}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}