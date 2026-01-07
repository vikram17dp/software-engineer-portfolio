"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function About() {
  const [hover, setHover] = useState(false)

  return (
    <section id="about" className="bg-black px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
            About
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6">
            Who I Am <span className="text-white/40 ml-2">↘</span>
          </h1>

          <p className="max-w-2xl text-white/70 text-lg">
            A closer look at my background, mindset, and journey as a full stack
            developer building real-world systems.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-[360px] md:h-[520px] relative"
          >
            <Image
              src="/gaming-setup.webp"   // 🔁 replace with your image path
              alt="Workspace setup"
              fill
              className="object-cover rounded-none"
              priority
            />
          </motion.div>

          {/* RIGHT CONTENT BOX */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative border border-white/20 p-8 md:p-10 bg-black"
          >
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/40" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40" />

            <motion.p variants={item} className="text-white/90 text-lg leading-relaxed">
              I’m Vikram D P, a Full Stack Developer from Bengaluru with strong
              expertise in MERN and Next.js, and a deep focus on Data Structures
              and Algorithms.
            </motion.p>

            <motion.p variants={item} className="text-white/80 text-lg leading-relaxed mt-4">
              I’ve built scalable, production-ready applications including
              hospital management systems, AI-powered platforms, and real-time
              products with secure authentication and payments.
            </motion.p>

            <motion.p variants={item} className="text-white/80 text-lg leading-relaxed mt-4">
              I’ve worked as a Full Stack Developer Intern, solving real-world
              problems, optimizing performance, and collaborating across
              frontend, backend, databases, and cloud services.
            </motion.p>

            <motion.p variants={item} className="text-white/80 text-lg leading-relaxed mt-4">
              I enjoy writing clean, maintainable code, solving challenging DSA
              problems, and building systems that are fast, scalable, and
              user-focused.
            </motion.p>

            {/* BUTTON */}
            <motion.div variants={item} className="pt-8">
              <Link
                href="/aboutmore"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition border-b border-white/30 pb-1"
              >
                About Me
                <span
                  className="inline-block transition-transform duration-300"
                  style={{ transform: hover ? "translateX(6px)" : "translateX(0)" }}
                >
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
