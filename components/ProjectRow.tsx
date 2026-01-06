import Link from 'next/link'
import { Project } from '@/types/projects'

interface Props {
  project: Project
  index: number
}

export default function ProjectRow({ project, index }: Props) {
  return (
    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">

      {/* IMAGE */}
      <div className="relative aspect-[18/10] overflow-hidden border border-white/10">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="space-y-6 max-w-xl">

        <p className="text-xs tracking-widest uppercase text-white/40">
          {String(index + 1).padStart(2, '0')} &nbsp;•&nbsp; {project.category}
        </p>

        {/* TITLE (2 lines naturally) */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          {project.title}
        </h2>

        <p className="text-white/60">
          {project.year} • {project.role}
        </p>

        <p className="text-white/75 leading-relaxed">
          {project.purpose}
        </p>

       {/* TECH */}
{project.tech && project.tech.length > 0 && (
  <div className="flex flex-wrap gap-2 pt-2">
    {project.tech.slice(0, 4).map((t) => (
      <span
        key={t}
        className="px-3 py-1 text-xs border border-white/20 rounded-full text-white/70"
      >
        {t}
      </span>
    ))}

    {project.tech.length > 4 && (
      <span className="text-xs text-white/40">
        +{project.tech.length - 4} more
      </span>
    )}
  </div>
)}

        {/* CTA */}
        <Link
          href={`/?project=${project.id}`}
          className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-white/80 hover:text-white transition pt-4"
        >
          View Project →
        </Link>

      </div>
    </div>
  )
}
