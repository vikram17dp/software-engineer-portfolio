"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}

const allSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Vue.js",
  "JavaScript",
  "Node.js",
  "Express",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Docker",
  "AWS",
  "Vercel",
  "Firebase",
  "GraphQL",
  "REST APIs",
  "Framer Motion",
  "Web Performance",
]

export default function Hero() {
  const duplicatedSkills = [...allSkills, ...allSkills]

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-8 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/dark-tech-abstract-background.jpg')] bg-cover bg-center opacity-10 blur-sm" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE - Main Content */}
          <div>
            {/* Main Heading */}
            <div className="mt-20">
              <motion.div variants={itemVariants}>
                <p className="text-sm uppercase tracking-widest text-[#999999] mb-4">Creative Developer</p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-[#F5F5F5]">
                  <span className="block">VIKRAM</span>
                  <span className="block text-[#666666]">D P</span>
                </h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="mt-8 text-lg md:text-xl text-[#d0d0d0] max-w-2xl leading-relaxed"
              >
                Transforming ideas into powerful digital solutions through innovative design and clean code
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mt-16">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 md:px-12 py-4 md:py-5 border border-[#F5F5F5] text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0B0B0B] transition-all duration-300 font-semibold uppercase tracking-wider text-sm md:text-base"
              >
                Explore Work
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Stats & Specialization */}
          <motion.div variants={itemVariants} className="mt-20 lg:mt-0">
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 md:gap-12 mb-12">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">50+</p>
                <p className="text-sm md:text-base text-[#d0d0d0] mt-2 uppercase tracking-widest">Projects</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">3+</p>
                <p className="text-sm md:text-base text-[#d0d0d0] mt-2 uppercase tracking-widest">Years Exp</p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-[#333333] mb-8"></div>

            {/* Specialization */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#999999] mb-6">Specialization</p>
              <div className="grid grid-cols-2 gap-6">
                <p className="text-base text-[#F5F5F5] font-medium">Full Stack Development</p>
                <p className="text-base text-[#F5F5F5] font-medium">UI/UX Design</p>
                <p className="text-base text-[#F5F5F5] font-medium">AI/ML Engineering</p>
                <p className="text-base text-[#F5F5F5] font-medium">Mobile Development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 mt-24 md:mt-32 max-w-7xl mx-auto"
      >
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 md:gap-8 whitespace-nowrap"
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {duplicatedSkills.map((skill, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-4 md:px-6 py-3 border border-[#333333] rounded-full bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/80 transition-colors duration-300"
              >
                <span className="text-sm md:text-base text-[#F5F5F5] tracking-wide">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
