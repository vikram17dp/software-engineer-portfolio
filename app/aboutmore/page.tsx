"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import Footer from "@/components/sections/footer"
import { ExternalLink, Code2, Zap, Rocket, Users, Trophy, BookOpen, Lightbulb, Briefcase } from "lucide-react"

/* ---------------------------------- */
/* Card Style Constants */
/* ---------------------------------- */

const cardBase = "relative overflow-hidden border border-white/15 bg-black/40 transition-all duration-500"
const cardHover = "hover:-translate-y-1 hover:shadow-[0_25px_80px_-30px_rgba(139,92,246,0.45)]"
const gradientOverlay =
  "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/15 via-blue-500/10 to-transparent"

/* ---------------------------------- */
/* Motion Variants */
/* ---------------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

/* ---------------------------------- */
/* UI Helpers */
/* ---------------------------------- */

const SectionDivider = () => <div className="w-full border-t border-white/10 my-20" />

const TextBlock = ({ paragraphs }: { paragraphs: string[] }) => (
  <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-5">
    {paragraphs.map((p, i) => (
      <motion.p key={i} variants={fadeUp} className="text-lg leading-relaxed text-white/80">
        {p}
      </motion.p>
    ))}
  </motion.div>
)

/* ---------------------------------- */
/* Data */
/* ---------------------------------- */

const growthPhases = [
  {
    no: "01",
    title: "Learn",
    desc: "Strong fundamentals in programming and computer science.",
    points: ["C & C++ Basics", "Java + DSA", "Problem Solving"],
    icon: BookOpen,
    content: "Building the foundation with core programming concepts and algorithmic thinking",
    quote: "First, solve the problem. Then, write the code.",
  },
  {
    no: "02",
    title: "Build",
    desc: "Hands-on full-stack development with real projects.",
    points: ["React & Next.js", "Node.js & MongoDB", "REST APIs"],
    icon: Code2,
    content: "Creating robust applications with modern web technologies",
    quote: "Code that is read is more important than code that is written.",
  },
  {
    no: "03",
    title: "Scale",
    desc: "Production-ready systems and performance optimization.",
    points: ["Auth & Payments", "Cloud Deployments", "Database Optimization"],
    icon: Rocket,
    content: "Optimizing systems for scale and real-world performance",
    quote: "Make it work, make it right, make it fast.",
  },
  {
    no: "04",
    title: "Grow",
    desc: "Internships, teamwork, and real-world impact.",
    points: ["Full Stack Internships", "Agile Teams", "User-Focused Systems"],
    icon: Zap,
    content: "Growing through collaboration and real-world experience",
    quote: "Great code is not written, it is evolved.",
  },
]

const journeyPhases = [
  {
    no: "01",
    title: "Foundations (2023)",
    desc: "Started with core programming and problem-solving fundamentals.",
    points: ["C & C++ Programming", "HTML, CSS, JavaScript", "Java + DSA (Apna College)", "First Static Websites"],
    icon: BookOpen,
    content: "Learning the basics and understanding core CS principles",
    quote: "Every expert was once a beginner.",
  },
  {
    no: "02",
    title: "Frontend & Logic (Late 2023)",
    desc: "Moved from basics to real development and consistent DSA practice.",
    points: ["Problem Solving Began", "React.js Learning", "React Projects Completed", "DSA Practice"],
    icon: Lightbulb,
    content: "Mastering frontend frameworks and algorithm design",
    quote: "Algorithms are the poetry of computation.",
  },
  {
    no: "03",
    title: "Full Stack Growth (2024)",
    desc: "Built end-to-end applications with modern tech stacks.",
    points: ["Node.js & MongoDB", "Full Stack Applications", "Next.js & Advanced Stack", "System Thinking"],
    icon: Code2,
    content: "Building complete applications from frontend to backend",
    quote: "The best code is written with the user in mind.",
  },
  {
    no: "04",
    title: "Production & Impact (2025)",
    desc: "Worked on real-world systems and internships.",
    points: ["Production-Ready Projects", "Modern Next.js Stack", "Full Stack Internship", "Scalable Architecture"],
    icon: Rocket,
    content: "Creating production systems with real-world impact",
    quote: "Ship fast, iterate based on feedback.",
  },
]

const achievements = [
  {
    title: "2nd Place in CrackIT 2025",
    desc: "Rounds on Aptitude, DSA, CS Fundamentals, Pitch, and Mock Interview",
    icon: Trophy,
    content: "Problem solving at its finest",
  },
  {
    title: "Winner (1st Place) in NIC Club Activity",
    desc: "100+ participants, developing a game using full-stack technologies",
    icon: Trophy,
    content: "Building games, building skills",
  },
  {
    title: "Top 10% Finalist in Smart India Hackathon 2024",
    desc: "AI Trip Planner built for intelligent travel planning",
    link: {
      label: "View on GitHub",
      url: "https://github.com/vikram17dp/AiTripPlanner",
    },
    icon: Rocket,
    content: "AI meets real-world travel",
  },
  {
    title: "Bikers Portal – Ideathon 2024",
    desc: "Community trips platform for biker groups and travel coordination",
    link: {
      label: "View on GitHub",
      url: "https://github.com/vikram17dp/Bikers_portal",
    },
    icon: Briefcase,
    content: "Community-driven innovation",
  },
]

const extracurricular = [
  {
    title: "Inscribe Club Member",
    desc: "Organized 3+ technical workshops, boosted student participation in tech events by 30%, and promoted innovation through collaborative projects.",
    icon: Users,
    content: "Sharing knowledge multiplies it",
  },
  {
    title: "Tech Member – Integrated Product Development Club",
    desc: "Collaborated to brainstorm and develop innovative products including SmartChairPlus, an ergonomic smart chair solution.",
    link: {
      label: "Live Demo",
      url: "https://smartchairplus.vercel.app/",
    },
    extraLink: {
      label: "GitHub Repo",
      url: "https://github.com/vikram17dp/smartchairplus",
    },
    icon: Lightbulb,
    content: "Innovation through collaboration",
  },
]

const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "HTML", "CSS"],
    content: "Strong foundations in logic, problem solving, and programming fundamentals",
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Redux.js",
      "Flask",
      "FastAPI",
      "Tailwind CSS",
      "ShadCN UI",
      "Prisma",
      "Framer Motion",
      "JWT",
      "OAuth",
    ],
    content: "Building scalable, secure, and modern full-stack applications",
  },
  {
    category: "Databases & Storage",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Redis",
      "Supabase",
    ],
    content: "Designing efficient data models and managing structured & unstructured data",
  },
  {
    category: "Cloud & Backend Services",
    items: [
      "AWS (S3,SQS)",
        "Vercel",
        "Render",
        "Docker",

      "REST APIs",
    ],
    content: "Handling file storage, background tasks, and service communication",
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "IntelliJ",
      "Postman",
      "Vercel",
      "Render",
      "Zoho",
      "Jira",
    ],
    content: "Improving development workflow, testing, deployment, and collaboration",
  },
  {
    category: "Computer Science Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOPS)",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
    content: "Strong CS fundamentals for writing efficient and reliable software",
  },
  {
    category: "System Design & Engineering",
    items: [
      "Basic System Design",
      "Project Architecture",
      "Scalable API Design",
      "SDLC",
    ],
    content: "Understanding how real-world systems are designed, built, and evolved",
  },
]


/* ---------------------------------- */
/* Components */
/* ---------------------------------- */

const ProcessSection = () => (
  <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-12">
    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-16">
      How I Grow
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {growthPhases.map((p) => {
        return (
          <motion.div key={p.no} variants={fadeUp} className="group relative">
            <motion.div className={`${cardBase} ${cardHover} p-8 relative`} whileHover={{ y: -2 }}>
              <div className={gradientOverlay} />
              
              <div className="relative -top-10 -left-10 w-16 h-16 flex items-center justify-center border border-white/30 bg-black text-2xl font-bold text-white">
                {p.no}
              </div>

              <div className="relative z-10 mt-4">
                <h3 className="text-2xl font-bold mb-3 text-white">{p.title}</h3>
                <p className="text-white/60 mb-4 text-sm leading-relaxed">{p.desc}</p>
                <p className="text-white/50 italic text-xs mb-4 pb-3 border-b border-white/10">"{p.quote}"</p>

                <ul className="space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-white/70 flex gap-3 items-start text-sm">
                      <span className="text-white/40 mt-1">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  </motion.div>
)

const CodingJourneySection = () => (
  <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-12">
    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-16">
      Coding Journey
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {journeyPhases.map((p) => {
        return (
          <motion.div key={p.no} variants={fadeUp} className="group relative">
            <motion.div className={`${cardBase} ${cardHover} p-8 relative`} whileHover={{ y: -2 }}>
              <div className={gradientOverlay} />
              
              <div className="relative -top-10 -left-10 w-16 h-16 flex items-center justify-center border border-white/30 bg-black text-2xl font-bold text-white">
                {p.no}
              </div>

              <div className="relative z-10 mt-4">
                <h3 className="text-2xl font-bold mb-3 text-white">{p.title}</h3>
                <p className="text-white/60 mb-4 text-sm leading-relaxed">{p.desc}</p>
                <p className="text-white/50 italic text-xs mb-4 pb-3 border-b border-white/10">"{p.quote}"</p>

                <ul className="space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-white/70 flex gap-3 items-start text-sm">
                      <span className="text-white/40 mt-1">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  </motion.div>
)

const AlternatingSection = ({
  title,
  items,
  isPhase = false,
}: {
  title: string
  items: any[]
  isPhase?: boolean
}) => (
  <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-12">
    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-16">
      {title}
    </motion.h2>

    <div className="space-y-12">
      {items.map((item, idx) => {
        const Icon = item.icon || Trophy
        
        // Check if this is the Technologies & Skills section
        const isTechSection = !item.icon && item.category && item.items
        
        if (isTechSection) {
          return (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12"
            >
              <div className="lg:col-span-2">
                <h3 className="text-lg font-normal text-white">{item.category}</h3>
              </div>
              <div className="lg:col-span-10">
                <p className="text-lg text-white font-normal">
                  {item.items.join(', ')}
                </p>
              </div>
            </motion.div>
          )
        }
        
        return (
          <motion.div
            key={idx}
            variants={idx % 2 === 0 ? slideInLeft : slideInRight}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {idx % 2 === 0 ? (
              <>
                <motion.div
                  variants={fadeUp}
                  className="hidden md:flex flex-col items-center justify-center h-56 border border-white/20 hover:border-white/40 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/5 hover:from-blue-500/15 hover:via-purple-500/10 hover:to-blue-500/10 transition-all duration-300 p-8 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Icon size={48} className="text-blue-400/60 group-hover:text-blue-400 transition-colors mb-4" />
                  </motion.div>
                  <p className="text-center text-white/60 text-sm leading-relaxed">
                    {item.content || "Innovating solutions"}
                  </p>
                </motion.div>
                <motion.div variants={fadeUp} className="order-1 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{item.title || item.category}</h3>
                  {item.desc && <p className="text-white/70 text-base leading-relaxed mb-6">{item.desc}</p>}
                  <div className="flex gap-3">
                    {item.link && (
                      <motion.a
                        href={item.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white/80 hover:text-white transition-all duration-300"
                        whileHover={{ x: 4 }}
                      >
                        {item.link.label}
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                    {item.extraLink && (
                      <motion.a
                        href={item.extraLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white/80 hover:text-white transition-all duration-300"
                        whileHover={{ x: 4 }}
                      >
                        {item.extraLink.label}
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                  {item.items && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.items.map((i: string) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/20 text-sm text-white/70 hover:text-white/80 transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {i}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </>
            ) : (
              <>
                <motion.div variants={fadeUp} className="order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{item.title || item.category}</h3>
                  {item.desc && <p className="text-white/70 text-base leading-relaxed mb-6">{item.desc}</p>}
                  <div className="flex gap-3">
                    {item.link && (
                      <motion.a
                        href={item.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white/80 hover:text-white transition-all duration-300"
                        whileHover={{ x: 4 }}
                      >
                        {item.link.label}
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                    {item.extraLink && (
                      <motion.a
                        href={item.extraLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white/80 hover:text-white transition-all duration-300"
                        whileHover={{ x: 4 }}
                      >
                        {item.extraLink.label}
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                  {item.items && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.items.map((i: string) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/20 text-sm text-white/70 hover:text-white/80 transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {i}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  className="hidden md:flex flex-col items-center justify-center h-56 border border-white/20 hover:border-white/40 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-purple-500/5 hover:from-purple-500/15 hover:via-blue-500/10 hover:to-purple-500/15 transition-all duration-300 p-8 group order-1 md:order-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Icon size={48} className="text-purple-400/60 group-hover:text-purple-400 transition-colors mb-4" />
                  </motion.div>
                  <p className="text-center text-white/60 text-sm leading-relaxed">
                    {item.content || "Growing together"}
                  </p>
                </motion.div>
              </>
            )}
          </motion.div>
        )
      })}
    </div>
  </motion.div>
)

/* ---------------------------------- */
/* Main Page */
/* ---------------------------------- */

export default function AboutMore() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <div className="pt-32 px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-bold">
            Vikram D P
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/60 mt-4">
            Full Stack Developer · Bengaluru
          </motion.p>
        </motion.div>
      </div>

   {/* INTRO */}
<div className="px-6 md:px-8 max-w-7xl mx-auto mt-20">
  <TextBlock
    paragraphs={[
      "I’m a Computer Science student and a Full Stack Developer (MERN + Next.js) with strong expertise in Data Structures and Algorithms, solid Computer Science fundamentals, and hands-on experience building scalable, production-ready web applications.",

      "I enjoy solving complex problems, breaking systems down logically, and writing clean, maintainable code. With 340+ DSA problems solved across LeetCode and GFG, I’ve developed strong algorithmic thinking, performance awareness, and disciplined coding practices.",

      "Through my internships at InfotechBrains-SBS and Elfinity Technologies Pvt. Ltd., I worked on real-world products, owned end-to-end features, and collaborated in professional environments. My work includes improving booking workflows by nearly 40% and building secure, role-based systems used in production.",

      "One of my major projects is the AI Powered Digital Memory Bank — an intelligent journaling and memory management platform built with Next.js, MongoDB, Prisma, Pinecone, and a FastAPI-based ML microservice. The system analyzes user memories for sentiment, tags, and embeddings, enables semantic search and AI chat grounded in memory context, and features a futuristic, mood-aware dashboard that helps users reflect on emotional trends over time.",

      "I focus on building systems that combine strong engineering fundamentals with thoughtful user experience. Driven by curiosity and consistency, I aim to create impactful products while continuously learning and growing as a software engineer.",
    ]}
  />
</div>



      <SectionDivider />

      {/* HOW I GROW */}
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <ProcessSection />
      </div>

      <SectionDivider />

      {/* CODING JOURNEY */}
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <CodingJourneySection />
      </div>

      <SectionDivider />

      {/* LEARNING PHILOSOPHY */}
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <AlternatingSection
          title="Learning Philosophy"
          items={[
            {
              title: "Every Line Matters",
              desc: "From writing my first C program to building full-stack applications, each phase of my journey introduced new challenges that strengthened my problem-solving skills and technical depth. I believe in writing code that is not just functional but elegant, maintainable, and scalable.",
              icon: Lightbulb,
              content: "Code is poetry. Every line tells a story.",
            },
          ]}
        />
      </div>

      <SectionDivider />

      {/* HACKATHONS & COMPETITIONS */}
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <AlternatingSection title="Hackathons & Competitions" items={achievements} />
      </div>

      <SectionDivider />

      {/* EXTRACURRICULAR */}
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <AlternatingSection title="Extracurricular Activities" items={extracurricular} />
      </div>

      <SectionDivider />

      {/* TECHNOLOGIES & SKILLS */}
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
        <AlternatingSection title="Technologies & Skills" items={skills} />
      </div>
      <SectionDivider />


      {/* BACK */}
      <div className="px-6 md:px-8 max-w-7xl mx-auto pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <Link
            href="/"
            className="inline-flex gap-2 items-center text-white/60 hover:text-white border-b border-white/30 hover:border-white/60 transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}