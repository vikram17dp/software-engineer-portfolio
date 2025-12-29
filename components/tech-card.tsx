"use client"

import { motion } from "framer-motion"

interface TechCardProps {
  name: string
}

const iconMap: Record<string, string> = {
  React: "⚛️",
  "Next.js": "▲",
  TypeScript: "TS",
  "Tailwind CSS": "🌊",
  "Vue.js": "💚",
  "Node.js": "🟢",
  Express: "🚂",
  Python: "🐍",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  Git: "📦",
  Docker: "🐳",
  AWS: "☁️",
  Vercel: "▲",
  Firebase: "🔥",
  GraphQL: "◇",
  "REST APIs": "🔌",
  "Framer Motion": "✨",
  "Web Performance": "⚡",
  SEO: "📈",
}

export default function TechCard({ name }: TechCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.95 }} className="group relative">
      <div className="relative h-32 md:h-40 flex flex-col items-center justify-center border border-[#333333] bg-[#1a1a1a]/50 hover:bg-[#1a1a1a] transition-colors duration-300 overflow-hidden">
        {/* Hover background */}
        <motion.div
          className="absolute inset-0 bg-[#F5F5F5]/5"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-3">
          <div className="text-2xl md:text-4xl mb-2">{iconMap[name] || "💻"}</div>
          <p className="text-xs md:text-sm font-semibold text-[#F5F5F5] uppercase tracking-tight">{name}</p>
        </div>
      </div>
    </motion.div>
  )
}
