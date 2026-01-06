'use client'

import Image from 'next/image'

interface Props {
  image1: string
  image2?: string
  onLeftClick: () => void
  onRightClick?: () => void
  label?: string
}

export default function ProjectSplitCard({
  image1,
  image2,
  onLeftClick,
  onRightClick,
  label = 'View Project', // ✅ DEFAULT
}: Props) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT IMAGE */}
      <div
        onClick={onLeftClick}
        className="relative aspect-[16/10] overflow-hidden cursor-pointer group border border-white/10"
      >
        <Image
          src={image1}
          alt="Preview"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* LABEL */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <span
            className="
              opacity-0 group-hover:opacity-100
              transition-all duration-300
              text-white text-sm tracking-widest uppercase
              bg-white/10 backdrop-blur-sm
              px-6 py-3
            "
          >
            {label}
          </span>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      {image2 && onRightClick && (
        <div
          onClick={onRightClick}
          className="relative aspect-[16/10] overflow-hidden cursor-pointer group border border-white/10"
        >
          <Image
            src={image2}
            alt="Preview"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <span
              className="
                opacity-0 group-hover:opacity-100
                transition-all duration-300
                text-white text-sm tracking-widest uppercase
                bg-white/10 backdrop-blur-sm
                px-6 py-3
              "
            >
              {label}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
