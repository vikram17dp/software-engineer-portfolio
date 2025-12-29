"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = []

    for (let i = 0; i < 100; i++) {
      const timeout = setTimeout(() => {
        setProgress(i + 1)
      }, i * 20)
      intervals.push(timeout as unknown as NodeJS.Timeout)
    }

    const completeTimeout = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => {
      intervals.forEach((interval) => clearTimeout(interval))
      clearTimeout(completeTimeout)
    }
  }, [onComplete])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-[#0B0B0B] flex flex-col items-center justify-center z-50"
    >
      <div className="w-full max-w-md px-8">
        {/* Percentage Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <p className="text-6xl md:text-7xl font-bold text-[#F5F5F5]">
            {progress}
            <span className="text-4xl md:text-5xl text-[#d0d0d0]">%</span>
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="h-px bg-[#333333] overflow-hidden mb-12">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="h-full bg-[#F5F5F5]"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-xs md:text-sm tracking-widest uppercase text-[#d0d0d0]"
        >
          Loading Experience
        </motion.p>
      </div>
    </motion.div>
  )
}
