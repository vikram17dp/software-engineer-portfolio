"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Hero from "../components/sections/hero"
import TechStack from "../components/sections/tech-stack"
import Education from "../components/sections/education"
import Contact from "../components/sections/contact"
import Footer from "../components/sections/footer"

import ExperienceSection from "../components/ExperienceSection"
import Projects from "../components/Projects"
import About from "../components/About"
import Navigation from "../components/navigation"
import LoadingScreen from "../components/loading-screen"


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
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

          {/* HERO */}
          <section id="home">
            <Hero />
          </section>
<Divider />
          {/* EXPERIENCE */}
          <section id="experience">
            <ExperienceSection />
          </section>
<Divider />

          {/* PROJECTS */}
          <section id="projects">
            <Projects />
          </section>
<Divider />

          {/* TECH STACK */}
          <section id="tech-stack">
            <TechStack />
          </section>
<Divider />

          {/* EDUCATION */}
          <section id="education">
            <Education />
          </section>
<Divider />

          {/* ABOUT */}
          <section id="aboutmore">
            <About />
          </section>
<Divider />

          {/* CONTACT */}
          <section id="contact">
            <Contact />
          </section>
<Divider />

          {/* FOOTER */}
          <section id="footer">
            <Footer />
          </section>
        </motion.main>
      )}
    </AnimatePresence>
  )
}

function Divider() {
  return <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
}
