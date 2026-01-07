'use client';

import Link from 'next/link';
import TechStack from '../TechStack';
import { motion } from "framer-motion";
import { useEffect, useRef } from "react"

import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Mail as MailIcon,
  Code as LeetCodeIcon,
} from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
 
   useEffect(() => {
     if (videoRef.current) {
       videoRef.current.playbackRate = 0.2; // Set to 0.75x speed
     }
   }, [])
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video
  ref={videoRef}
  autoPlay
  loop
  muted
  playsInline

  className="absolute top-0 left-0 w-full h-full object-cover"
>
  <source src="/fourthone.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

      {/* Bottom Gradient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-20 sm:h-32 md:h-48 lg:h-64 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center md:items-center">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-16 md:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-6 md:space-y-10">
              {/* Label */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-12 h-[1px] bg-white/60"></div>
                <span className="text-[10px] sm:text-sm text-white/70 tracking-[0.25em] uppercase font-light">
                  Software Development Engineer
                </span>
              </div>
              
              {/* Name – SINGLE LINE */}
               <div>
           <motion.h1
  initial="rest"
  whileHover="hover"
  animate="rest"
  variants={{
    rest: {
      scale: 1,
      letterSpacing: "-0.02em",
    },
    hover: {
      scale: 1.02,              // 👈 gentler scale
      letterSpacing: "0.015em", // 👈 subtle spacing
    },
  }}
  transition={{
    type: "spring",
    stiffness: 70,   // 👈 much smoother
    damping: 26,     // 👈 no bounce
    mass: 1.1,       // 👈 heavier, premium feel
  }}
  className="
    relative
    inline-block
    
    text-[2.75rem]
    sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
    font-accent font-black
    leading-[0.85] sm:leading-[0.9]
    tracking-[-0.02em]
    cursor-pointer
  "
>
  {/* NORMAL TEXT */}
  <motion.span
    variants={{
      rest: { opacity: 1 },
      hover: { opacity: 0 },
    }}
    transition={{
      duration: 0.30,
      ease: "easeOut",
    }}
    className="absolute inset-0 z-10 whitespace-nowrap "
  >
    <span className="text-white">VIKRAM</span>{" "}
    <span className="text-white/40">D P</span>
  </motion.span>

  {/* HOVER GRADIENT TEXT */}
  <motion.span
    variants={{
      rest: { opacity: 0 },
      hover: { opacity: 1 },
    }}
    transition={{
      duration: 0.45,
      ease: "easeOut",
    }}
    className="
      relative z-10
      bg-gradient-to-r
      from-[#f5f5f5]
      via-[#d946ef]
      to-[#f59e0b]
      bg-clip-text
      text-transparent
      whitespace-nowrap
    "
  >
    VIKRAM D P
  </motion.span>

  {/* AMBIENT GLOW */}
  <motion.span
    variants={{
      rest: { opacity: 0 },
      hover: { opacity: 1 },
    }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    className="
      absolute inset-0
      blur-3xl
      bg-gradient-to-r
      from-purple-500/30
      via-fuchsia-500/25
      to-amber-400/25
      pointer-events-none
    "
  />
</motion.h1>





              </div>
              
              {/* Tagline */}
              <div className="max-w-2xl">
                <p className="text-sm leading-[1.4] sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-light sm:leading-relaxed">
                  Converting ideas into reliable digital solutions using   
                  <span className="text-white font-normal"> clean</span> and
                  <span className="text-white font-normal"> maintainable code.</span>
                </p>
              </div>
              
              {/* CTA */}
              <div className="mt-1 sm:mt-3 md:mt-4">
                <Link href="/projects">
                  <button className="group relative bg-transparent text-white px-6 sm:px-10 py-3 sm:py-5 border-2 border-white transition-all duration-500 hover:bg-white hover:text-black hover:cursor-pointer overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                      <span className="text-[11px] sm:text-base font-medium tracking-[0.2em] uppercase">
                        Explore More
                      </span>
                      <svg className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="lg:col-span-4 space-y-5 sm:space-y-8 lg:space-y-10">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">38+</div>
                  <div className="text-[10px] sm:text-sm text-white/60 tracking-wider uppercase">Projects</div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">3+</div>
                  <div className="text-[10px] sm:text-sm text-white/60 tracking-wider uppercase">Years Exp</div>
                </div>
              </div>
              
              {/* Social + Specialization */}
              <div className="space-y-4 sm:space-y-6 md:space-y-7 lg:space-y-8">
  {/* SOCIAL LINKS */}
  <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
    {/* GitHub */}
    <a
      href="https://github.com/vikram17dp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="text-white/80 hover:text-white transition"
    >
      <GithubIcon className="w-5 h-5" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/vikram-d-p"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-white/80 hover:text-white transition"
    >
      <LinkedinIcon className="w-5 h-5" />
    </a>

    {/* LeetCode */}
    <a
      href="https://leetcode.com/u/VIKRAM_D_P/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LeetCode"
      className="text-white/80 hover:text-white transition"
    >
     <LeetCodeIcon className="w-5 h-5" />
    </a>

    {/* GeeksforGeeks */}
    <a
      href="https://www.geeksforgeeks.org/profile/vikramycw0"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GeeksforGeeks"
      className="text-white/80 hover:text-white transition font-semibold text-sm"
    >
      GFG
    </a>

    {/* Codolio */}
    <a
      href="https://codolio.com/profile/5GOnQ5r7"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Codolio"
      className="text-white/80 hover:text-white transition font-semibold text-sm"
    >
      CD
    </a>

    <div className="h-px flex-1 bg-white/20"></div>
  </div>

  {/* SPECIALIZATION */}
  <div>
    <p className="text-[10px] sm:text-xs text-white/50 tracking-widest uppercase">
      Specialization
    </p>
    <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-4">
      <p className="text-white/90">Full Stack Dev</p>
    <p className="text-white/90">DSA & Problem Solving</p>
      <p className="text-white/90">AI/ML Engg</p>
      <p className="text-white/90">CS Fundamentals</p>
    </div>
  </div>
</div>

            </div>
            
          </div>
        </div>
      </div>
      
      {/* Tech Stack */}
      <div className="absolute left-0 right-0 z-0" style={{ bottom: '-20px' }}>
  <TechStack />
</div>

    </section>
  );
}
