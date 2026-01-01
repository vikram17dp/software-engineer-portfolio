"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/loading-screen"
import Navigation from "@/components/navigation"
import TechStack from "@/components/sections/tech-stack"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import Hero from "@/components/sections/Hero"
import Education from "@/components/sections/Education"
import Projects from "@/components/Projects"
export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0B0B0B] text-[#F5F5F5] min-h-screen"
        >
          <Navigation />
          <Hero />
          <TechStack />
          <Education />
          <Projects />
          <Contact />
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  )
}
