"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "@/components/project-card"
import ProjectModal from "@/components/project-modal"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const filters = ["All", "Full Stack", "Frontend", "Backend", "AI/ML"]

const projects = [
  {
    id: 1,
    title: "AI EmpowerHub",
    category: "Full Stack",
    description: "Intelligent Student Platform",
    image: "/student-learning-platform-interface.jpg",
    techs: ["React", "Next.js", "AI", "Tailwind CSS"],
    details: {
      year: "2024",
      role: "Full Stack Developer",
      duration: "2 months",
      purpose:
        "Address the fragmented landscape of student support by unifying career exploration, resource discovery, and mental wellness into a single, intuitive platform.",
      features: [
        "AI Career Suggester - analyzes interests and knowledge to generate tailored career paths",
        "Educational Roadmap Maker - visualizes academic journeys with interactive tree diagrams",
        "Career Guidance - provides exam, scholarship, and program details",
        "Resource Finder - connects students with communities and study materials",
        "Mental Health Chatbot - offers anonymous, confidential support",
      ],
      tech: "React with Vite for fast dev cycles, Tailwind CSS for responsive design, react-spring for fluid animations, D3.js for data visualization, Headless UI for accessible components.",
    },
  },
  {
    id: 2,
    title: "Custom Phone Case SaaS",
    category: "Full Stack",
    description: "E-commerce Platform with Live Editor",
    image: "/phone-case-customization-ecommerce.jpg",
    techs: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    details: {
      year: "2024",
      role: "Full Stack Developer",
      duration: "3 months",
      purpose: "Production-grade custom phone case storefront with live visual editor and secure Stripe checkout.",
      features: [
        "Live Visual Editor - drag-and-drop design interface",
        "Dynamic Pricing - calculates based on customizations",
        "Secure Stripe Checkout - PCI-compliant payments",
        "Order Management - track and manage orders",
        "User Authentication - secure account system",
      ],
      tech: "Next.js with TypeScript, Prisma for database ORM, Tailwind CSS, Stripe API, PostgreSQL.",
    },
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    category: "Frontend",
    description: "WebSocket-based Messaging Platform",
    image: "/real-time-chat-messaging-app.jpg",
    techs: ["React", "Socket.io", "Node.js", "MongoDB"],
    details: {
      year: "2024",
      role: "Full Stack Developer",
      duration: "1.5 months",
      purpose: "Real-time messaging platform with WebSocket support for instant message delivery.",
      features: [
        "Real-time messaging with WebSocket",
        "User authentication and authorization",
        "Chat room management",
        "Message history",
        "User online status",
      ],
      tech: "React for frontend, Node.js with Express for backend, Socket.io for real-time communication, MongoDB for storage.",
    },
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-12">
              Selected Projects
            </motion.h2>

            {/* Filter Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 md:gap-4 mb-16">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 md:px-6 py-2 md:py-3 border text-sm md:text-base transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-[#F5F5F5] text-[#0B0B0B] border-[#F5F5F5]"
                      : "border-[#F5F5F5] text-[#F5F5F5] hover:bg-[#F5F5F5]/5"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}
