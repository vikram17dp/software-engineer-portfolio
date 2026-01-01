'use client'

export default function ProjectSplitCard({
  image1,
  image2,
  onLeftClick,
  onRightClick,
}: {
  image1: string
  image2?: string
  onLeftClick: () => void
  onRightClick?: () => void
}) {
  return (
    <div className="w-full h-[70vh] lg:h-[600px] flex flex-col lg:flex-row gap-4">
      {/* LEFT */}
      <div
        onClick={onLeftClick}
        className="relative flex-1 cursor-pointer overflow-hidden group"
      >
        <img
          src={image1}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="border border-white px-8 py-4 uppercase tracking-widest">
            View Project
          </span>
        </div>
      </div>

      {/* RIGHT */}
      {image2 && (
        <div
          onClick={onRightClick}
          className="relative flex-1 cursor-pointer overflow-hidden group"
        >
          <img
            src={image2}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <span className="border border-white px-8 py-4 uppercase tracking-widest">
              View Project
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
