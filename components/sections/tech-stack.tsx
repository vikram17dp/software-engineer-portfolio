"use client"

import { motion } from "framer-motion"

/* ================= ANIMATIONS ================= */

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
}

/* ================= TECH STACK ================= */

const techStack = {
  Frontend: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    // { name: "Framer Motion", logo: "https://cdn.simpleicons.org/framer/ffffff" },
    // { name: "TanStack Query", logo: "https://cdn.simpleicons.org/reactquery/FF4154" },
  ],

  Backend: [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.simpleicons.org/express/ffffff" },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { 
      name: 'FastAPI', 
      logo: 'https://cdn.simpleicons.org/fastapi/009688' 
    },
    { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },

{ 
  name: 'Flask', 
  logo: 'https://cdn.simpleicons.org/flask/ffffff' 
}
,
  ],

  "Databases & Cloud": [
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
{ name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  ],

  "Devpos & Tools": [
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },  
    { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  ],
}

/* ================= COMPONENT ================= */

export default function Technologies() {
  return (
    <section className="bg-black px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">
            Technologies
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6">
            Tech Stack<span className="text-white/40 ml-2">↘</span>
          </h1>

          <p className="max-w-2xl text-white/70 text-lg leading-relaxed">
            A carefully selected stack of technologies I use to build scalable,
            reliable, and high-performance software systems.
          </p>
        </motion.div>

        {/* STACK SECTIONS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-28"
        >
          {Object.entries(techStack).map(([category, items]) => (
            <motion.div key={category} variants={item}>
              <div className="h-px w-full bg-white/10 mb-10" />

              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12">
                {category}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-7">
                {items.map((tech) => (
                <motion.div
  key={tech.name}
  whileHover={{ y: -10 }}
  transition={{ type: "spring", stiffness: 200, damping: 18 }}
  className="
    relative
    rounded-3xl
    p-7 md:p-8
    flex flex-col items-center justify-center
    bg-white/[0.035]
    border border-white/10
    backdrop-blur-xl
    shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
    hover:border-white/30
    hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
    group
    overflow-hidden
  "
>
  {/* GRADIENT GLOW */}
  <div
    className="
      absolute inset-0
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500
      bg-gradient-to-br
      from-white/20 via-transparent to-transparent
    "
  />

  {/* ICON */}
  <motion.img
    src={tech.logo}
    alt={tech.name}
    whileHover={{ scale: 1.15, rotate: 2 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className="
      h-11 w-11 md:h-12 md:w-12
      object-contain
      opacity-90
      group-hover:opacity-100
      transition
    "
  />

  {/* NAME */}
  <span className="mt-5 text-sm tracking-wide text-white/70 group-hover:text-white">
    {tech.name}
  </span>
</motion.div>

                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
