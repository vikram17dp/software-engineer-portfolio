"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Zap,
  Brain,
  Shield,
  Smartphone,
  Database,
  Code,
  Activity,
  BarChart,
  Users,
} from "lucide-react"
import Footer from "@/components/sections/footer"

/* ---------------------------------- */
/* Card Styles */
/* ---------------------------------- */

const cardBase = "relative overflow-hidden rounded-xl border border-white/15 bg-black/40 transition-all duration-500"
const cardHover = "group hover:-translate-y-1 hover:shadow-[0_25px_80px_-30px_rgba(139,92,246,0.45)]"
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
    transition: { staggerChildren: 0.12 },
  },
}

/* ---------------------------------- */
/* Project Data */
/* ---------------------------------- */

const projectImages = [
  // {
  //   src: "/smart-chair/smartchair.png",
  //   alt: "PostureWise Smart Chair Device",
  //   title: "Smart Hardware",
  // },
  {
    src: "/smart-chair/dashboard-ui.png",
    alt: "PostureWise Analytics Dashboard",
    title: "Analytics Dashboard",
  },
  {
    src: "/smart-chair/posture-tracker.jpeg",
    alt: "Real-time Posture Tracking",
    title: "Real-time Tracking",
  },
  {
    src: "/smart-chair/chair-explanation1.png",
    alt: "Posture Detection Explanation",
    title: "Posture Detection",
  },
  {
    src: "/smart-chair/architecture.jpeg",
    alt: "System Architecture Diagram",
    title: "System Architecture",
  },
  {
    src: "/smart-chair/device-monitor.png",
    alt: "Device Monitoring View",
    title: "Device Monitoring",
  },
  {
    src: "/smart-chair/hydration.png",
    alt: "Hydration Tracking Feature",
    title: "Hydration Tracking",
  },
  {
    src: "/smart-chair/profile-settings.png",
    alt: "User Profile & Settings",
    title: "Profile Settings",
  },
  {
    src: "/smart-chair/ai-sights.png",
    alt: "AI Insights & Analytics",
    title: "AI Insights",
  },
  {
    src: "/smart-chair/achivements.png",
    alt: "User Achievements & Milestones",
    title: "Achievements",
  },
  {
    src: "/smart-chair/normal-chair.png",
    alt: "Traditional Chair Comparison",
    title: "Normal Chair vs Smart Chair",
  },
]


const features = [
  {
    icon: Activity,
    title: "Real-time Posture Monitoring",
    description: "Continuous tracking of sitting posture with instant feedback through sensors and AI analysis.",
    motivation: "Your posture is your statement, make it count.",
  },
  {
    icon: Brain,
    title: "Smart Health Insights",
    description: "Personalized recommendations based on behavior patterns, hydration, and movement data.",
    motivation: "Intelligence without action is just knowledge. We enable both.",
  },
  {
    icon: Zap,
    title: "Intelligent Alerts",
    description: "Sound-based personalized alerts for poor posture, hydration reminders, and stretch suggestions.",
    motivation: "Problems noticed early are problems half-solved.",
  },
  {
    icon: Users,
    title: "Multi-user Support",
    description: "Enterprise solutions for offices and teams to monitor ergonomic health across departments.",
    motivation: "Great teams build great habits together.",
  },
  {
    icon: Shield,
    title: "Privacy-Focused Design",
    description: "Robust data protection with end-to-end encryption and full user transparency on data usage.",
    motivation: "Your data is your trust. We guard it with our code.",
  },
  {
    icon: BarChart,
    title: "Weekly Analytics",
    description: "Comprehensive reports with trends, insights, and actionable health recommendations.",
    motivation: "What gets measured gets managed. What gets managed gets improved.",
  },
]

const techStack = [
  {
    category: "Hardware",
    icon: Smartphone,
    items: ["ESP32 Microcontroller", "MPU6050 Accelerometer", "Pressure Sensors", "BLE & WiFi", "Li-ion Battery"],
  },
  {
    category: "Web Frontend",
    icon: Code,
    items: ["Next.js 16", "React 19", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    category: "Backend & Data",
    icon: Database,
    items: ["Node.js", "PostgreSQL", "Redis Cache", "Prisma ORM", "JWT Auth"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo", "Bluetooth", "Push Notifications", "Offline Sync"],
  },
]

const problemSolution = [
  {
    problem: "The Problem",
    points: [
      "Over 60% of office workers suffer from back pain due to poor posture",
      "Sedentary lifestyles contribute to chronic health issues and reduced productivity",
      "Existing solutions only track posture - they lack holistic health insights",
      "No integrated system combines posture, hydration, movement, and wellness data",
    ],
  },
  {
    problem: "Our Solution",
    points: [
      "All-in-one IoT device monitoring posture, hydration, movement, and sitting duration",
      "AI-powered smart alerts tailored to individual behavior patterns",
      "Real-time dashboard providing actionable health insights",
      "Scalable platform for personal use and enterprise wellness programs",
    ],
  },
]

/* ---------------------------------- */
/* Components */
/* ---------------------------------- */

const FeatureCard = ({ icon: Icon, title, description, motivation }: any) => (
  <motion.div variants={fadeUp} className={`${cardBase} ${cardHover} p-6 flex flex-col h-full`}>
    <div className={gradientOverlay} />
    <Icon className="w-6 h-6 mb-4 text-purple-400" />
    <h3 className="text-lg font-bold mb-2 relative z-10">{title}</h3>
    <p className="text-white/60 text-sm mb-4 flex-grow relative z-10">{description}</p>
    <p className="text-white/50 text-xs italic border-t border-white/10 pt-4 relative z-10">"{motivation}"</p>
  </motion.div>
)

const TechCard = ({ category, icon: Icon, items }: any) => (
  <motion.div variants={fadeUp} className={`${cardBase} ${cardHover} p-6`}>
    <div className={gradientOverlay} />
    <div className="flex items-center gap-3 mb-4 relative z-10">
      <Icon className="w-5 h-5 text-purple-400" />
      <h3 className="font-bold">{category}</h3>
    </div>
    <ul className="space-y-2 relative z-10">
      {items.map((item: string) => (
        <li key={item} className="text-white/60 text-sm flex gap-2">
          <span className="text-purple-400">•</span>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
)

const ImageCard = ({ src, alt, title }: any) => (
  <motion.div variants={fadeUp} className="group">
    {/* Image */}
    <div className="relative w-full aspect-[18/10] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority={false}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Title */}
    <div className="pt-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
  </motion.div>
)



const ProblemSolutionSection = ({ title, points }: any) => (
  <motion.div variants={fadeUp} className={`${cardBase} ${cardHover} p-8`}>
    <div className={gradientOverlay} />
    <h3 className="text-2xl font-bold mb-6 relative z-10">{title}</h3>
    <ul className="space-y-4 relative z-10">
      {points.map((point: string, i: number) => (
        <li key={i} className="flex gap-4">
          <span className="text-purple-400 font-bold flex-shrink-0">0{i + 1}</span>
          <span className="text-white/70">{point}</span>
        </li>
      ))}
    </ul>
  </motion.div>
)

/* ---------------------------------- */
/* Main Page */
/* ---------------------------------- */

export default function PostureWisePage() {
  return (
   <div className="min-h-screen bg-black text-white ">
  {/* BACK BUTTON */}
  <div className="pt-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
    <motion.div variants={fadeUp} initial="hidden" animate="show">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-10 border-b border-white/30"
      >
        <ArrowLeft size={16} /> Back to Portfolio
      </Link>
    </motion.div>
  </div>

  {/* HERO SECTION */}
  <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto pb-16 md:pb-20">
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="space-y-4 sm:space-y-6"
    >
      <motion.div variants={fadeUp}>
        <p className="text-[11px] sm:text-xs uppercase tracking-widest text-white/40">
          IoT · Health Technology · Smart Hardware
        </p>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-kh-teka"
      >
        PostureWise
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed"
      >
        An intelligent IoT system that transforms workplace health by monitoring posture,
        hydration, movement patterns, and sitting duration—delivering real-time insights
        and personalized wellness recommendations.
      </motion.p>
    </motion.div>
  </div>



      {/* DIVIDER */}
      <div className="w-full border-t border-white/10 my-20" />

      {/* PROBLEM & SOLUTION */}
      <div className="px-8 max-w-7xl mx-auto mb-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl font-bold mb-12 font-kh-teka"
        >
          The Challenge
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {problemSolution.map((section, i) => (
            <ProblemSolutionSection key={i} title={section.problem} points={section.points} />
          ))}
        </motion.div>
      </div>

      {/* DIVIDER */}
      <div className="w-full border-t border-white/10 my-20" />

      {/* PROJECT GALLERY */}
      <div className="px-8 max-w-7xl mx-auto mb-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl font-bold mb-12 font-kh-teka"
        >
          Visual Overview
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectImages.map((img, i) => (
            <ImageCard key={i} {...img} />
          ))}
        </motion.div>
      </div>

      {/* DIVIDER */}
      <div className="w-full border-t border-white/10 my-20" />

      {/* FEATURES SECTION */}
      <div className="px-8 max-w-7xl mx-auto mb-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl font-bold mb-12 font-kh-teka"
        >
          Core Features
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </motion.div>
      </div>

      {/* DIVIDER */}
      <div className="w-full border-t border-white/10 my-20" />

      {/* TECH STACK */}
      <div className="px-8 max-w-7xl mx-auto mb-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl font-bold mb-12 font-kh-teka"
        >
          Technology Stack
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {techStack.map((tech, i) => (
            <TechCard key={i} {...tech} />
          ))}
        </motion.div>
      </div>

      {/* DIVIDER */}
      <div className="w-full border-t border-white/10 my-20" />

      {/* CTA */}
      <div className="px-8 max-w-7xl mx-auto pb-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Collaboration?</h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            PostureWise is actively looking for partners interested in bringing smart ergonomic solutions to enterprises
            and individuals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border border-white/30 hover:border-white transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
