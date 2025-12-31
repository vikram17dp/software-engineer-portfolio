"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface LoadingScreenProps {
  onComplete: () => void
}

const SIZE = 220
const RADIUS = 90
const STROKE = 6
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += 1
      setProgress(current)

      if (current >= 100) {
        clearInterval(interval)
        setTimeout(onComplete, 500)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [onComplete])

  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-[#0B0B0B] flex items-center justify-center z-50"
    >
      <div className="flex flex-col items-center">
        {/* CIRCLE */}
        <div className="relative w-[220px] h-[220px] flex items-center justify-center">
          <svg width={SIZE} height={SIZE}>
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#7dd3fc" />
              </linearGradient>
            </defs>

            {/* Track */}
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              stroke="#262626"
              strokeWidth={STROKE}
              fill="none"
            />

            {/* Progress (ROTATED ONLY HERE) */}
            <motion.circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              stroke="url(#progressGradient)"
              strokeWidth={STROKE}
              fill="none"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
              animate={{ strokeDashoffset: offset }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            />
          </svg>

          {/* CENTER TEXT — TRUE CENTER */}
          <div className="absolute z-10 text-center">
            <p className="text-6xl font-bold text-white leading-none">
              {progress}
              <span className="text-4xl text-white/40">%</span>
            </p>
          </div>
        </div>

        {/* LABEL */}
        <p className="mt-10 text-xs tracking-widest uppercase text-white/50">
          Loading Experience
        </p>
      </div>
    </motion.div>
  )
}
