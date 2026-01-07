"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import { usePathname } from "next/navigation"
import { useScrollToSection } from "@/hooks/use-scroll-to-sectio"

const Navigation = () => {
  const [isMenuHovered, setIsMenuHovered] = useState(false)
  const [forceClosed, setForceClosed] = useState(false)
  const [fastOpen, setFastOpen] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const listRef = useRef<HTMLDivElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isOpen = isMenuHovered && !forceClosed

  const { scrollToSection } = useScrollToSection()
  const pathname = usePathname()

  useEffect(() => {
    const hasTouchOnly = "ontouchstart" in window && window.matchMedia("(pointer: coarse)").matches
    setIsTouchDevice(hasTouchOnly)
  }, [])

  useEffect(() => {
    if (!isTouchDevice || !isOpen) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuHovered(false)
        setForceClosed(false)
        setFastOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [isTouchDevice, isOpen])

  const closeMenu = () => {
    setIsMenuHovered(false)
    setForceClosed(true)
    setFastOpen(false)
  }

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
    closeMenu()
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="hidden lg:flex fixed top-6 md:top-8 left-6 md:left-8 z-50"
      >
        <Link
          href="/"
          className="
            flex items-center justify-center
            px-4 py-3
            rounded-xl
            bg-black/40
            border border-white/10
            backdrop-blur-md
            hover:bg-white/10
            hover:border-white/20
            transition-all duration-300
          "
        >
          <Image src="/vdp-logo.png" alt="VDP Logo" width={120} height={120} priority className="object-contain" />
        </Link>
      </motion.div>

      <nav className="fixed top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div ref={menuRef} className="relative pb-2 sm:pb-3">
          <div
            className="bg-black/30 backdrop-blur-md rounded-lg sm:rounded-[0.5vw] border border-white/10 px-3 sm:px-6 md:px-8 py-2 sm:py-2.5 flex items-center justify-between w-[85vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] max-w-xl"
            onMouseEnter={() => {
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current)
                closeTimeoutRef.current = null
              }
              if (!forceClosed) {
                setIsMenuHovered(true)
                if (listRef.current && listRef.current.scrollTop > 0) setFastOpen(true)
              }
            }}
            onMouseLeave={() => {
              closeTimeoutRef.current = setTimeout(() => {
                setIsMenuHovered(false)
                setForceClosed(false)
                setFastOpen(false)
              }, 150)
            }}
          >
            <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-wider">
              MENU
            </span>

            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <div
                className={`relative h-3.5 sm:h-4 w-5 sm:w-6 pointer-events-auto flex flex-col justify-center gap-1.5 transition-all duration-300 z-50 ${isOpen ? "rotate-90" : "rotate-0"}`}
              >
                <span
                  className={`pointer-events-none w-5 sm:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out absolute top-0 left-0 ${
                    isOpen ? "translate-y-[6px] sm:translate-y-[7px] rotate-45" : "translate-y-0 rotate-0"
                  }`}
                ></span>
                <span
                  className={`pointer-events-none w-5 sm:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
                    isOpen ? "opacity-0 scale-x-50" : "opacity-100 scale-x-100"
                  }`}
                ></span>
                <span
                  className={`pointer-events-none w-5 sm:w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out absolute bottom-0 left-0 ${
                    isOpen ? "-translate-y-[6px] sm:-translate-y-[7px] -rotate-45" : "translate-y-0 rotate-0"
                  }`}
                ></span>
                <button
                  aria-label="toggle menu"
                  className="absolute -inset-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (isOpen) {
                      setForceClosed(true)
                      setIsMenuHovered(false)
                      setFastOpen(false)
                    } else {
                      setForceClosed(false)
                      setIsMenuHovered(true)
                      if (listRef.current && listRef.current.scrollTop > 0) setFastOpen(true)
                    }
                  }}
                  style={{ background: "transparent" }}
                />
              </div>
            </div>
          </div>

          {!isTouchDevice && (
            <div
              className="absolute left-0 right-0 h-3"
              style={{ top: "100%" }}
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current)
                  closeTimeoutRef.current = null
                }
                setIsMenuHovered(true)
              }}
            />
          )}

          <div
            className={`absolute left-1/2 transform -translate-x-1/2 ${fastOpen ? "transition-none" : "transition-all duration-500 ease-out"} origin-top z-40 ${
              isOpen
                ? "visible scale-100 translate-y-0 pointer-events-auto opacity-100"
                : "invisible scale-95 -translate-y-6 pointer-events-none opacity-0"
            }`}
            style={{ top: "calc(100% + 8px)" }}
          >
            <div
              ref={listRef}
              className={`nav-menu-scroll rounded-xl sm:rounded-2xl md:rounded-[0.5vw] border border-white/20 shadow-2xl w-[85vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] max-w-xl max-h-[70vh] sm:max-h-[60vh] overflow-y-scroll bg-black/50 backdrop-blur-2xl`}
              style={{ overscrollBehavior: "contain" }}
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current)
                  closeTimeoutRef.current = null
                }
                setIsMenuHovered(true)
              }}
              onMouseLeave={() => {
                setIsMenuHovered(false)
                setForceClosed(false)
                setFastOpen(false)
              }}
              onWheel={(e) => e.stopPropagation()}
              onScroll={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <a
                  href="/Vikram-DP-Resume.pdf"
                  download="Vikram_DP_Resume.pdf"
                  className={`lg:hidden w-full bg-white/15 backdrop-blur-sm text-white py-2 rounded-full border border-white/30 text-xs font-medium transition-all duration-200 mb-6 flex items-center justify-center gap-1.5 ${
                    isMenuHovered ? "opacity-100 translate-y-0 delay-[100ms]" : "opacity-0 translate-y-6"
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="tracking-wider text-[10px]">DOWNLOAD</span>
                </a>

                <div className="mb-4">
                  <h3
  className={`text-white/70 text-sm font-medium tracking-wider mb-6 ${
    fastOpen ? "transition-none" : "transition-all duration-400"
  } ${
    isMenuHovered
      ? fastOpen
        ? "opacity-100 translate-y-0"
        : "opacity-100 translate-y-0 delay-[100ms]"
      : "opacity-0 translate-y-6"
  }`}
>
  SECTIONS
</h3>

                  <div className="space-y-3">
                    {[
                      { label: "Home", id: "home" },
                      { label: "Projects", id: "projects" },
                      
                      { label: "Experience", id: "experience" },
                      { label: "About", id: "about" },
                      { label: "Education", id: "education" },
                      
                      { label: "Tech Stack", id: "tech-stack" },
                      { label: "Contact", id: "contact" },
                    ].map((item, index) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleSectionClick(e, item.id)}
                        className={`block text-white text-base sm:text-lg font-normal py-1.5 pointer-events-auto cursor-pointer ${fastOpen ? "transition-none" : "transition-colors duration-100"} hover:text-white/80 ${
                          isMenuHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                        style={{
                          transitionDelay: fastOpen ? "0ms" : isMenuHovered ? `${150 + index * 50}ms` : "0ms",
                          transitionProperty: isMenuHovered ? "opacity, transform" : "opacity, transform, color",
                        }}
                        onMouseEnter={(e) => {
                          const target = e.currentTarget
                          target.style.transform = "translateX(8px)"
                          target.style.transition = "transform 0.1s ease-out, color 0.1s ease-out"
                        }}
                        onMouseLeave={(e) => {
                          const target = e.currentTarget
                          target.style.transform = "translateX(0px)"
                          target.style.transition = "transform 0.1s ease-out, color 0.1s ease-out"
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div
                  className={`border-t border-white/20 mb-6 ${fastOpen ? "transition-none" : "transition-all duration-400"} ${
                    isMenuHovered ? (fastOpen ? "opacity-100" : "opacity-100 delay-[500ms]") : "opacity-0"
                  }`}
                ></div>

                <div className="mb-10">
                  <h3
                    className={`text-white/70 text-sm font-medium tracking-wider mb-6 ${fastOpen ? "transition-none" : "transition-all duration-400"} ${
                      isMenuHovered
                        ? fastOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-100 translate-y-0 delay-[550ms]"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    NAVIGATION
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "Home", href: "/" },
                      { label: "Experience", href: "/experience" },
                      { label: "Projects", href: "/projects" },

                      { label: "About", href: "/aboutmore" },
                      { label: "Contact", href: "/contact" },

                      { label: "New Ideas", href: "/new-ideas" },
                    ].map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className={`block text-white text-base sm:text-lg font-normal py-1.5 pointer-events-auto cursor-pointer ${fastOpen ? "transition-none" : "transition-colors duration-100"} hover:text-white/80 ${
                          isMenuHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                        style={{
                          transitionDelay: fastOpen ? "0ms" : isMenuHovered ? `${700 + index * 50}ms` : "0ms",
                          transitionProperty: isMenuHovered ? "opacity, transform" : "opacity, transform, color",
                        }}
                        onMouseEnter={(e) => {
                          const target = e.currentTarget
                          target.style.transform = "translateX(8px)"
                          target.style.transition = "transform 0.1s ease-out, color 0.1s ease-out"
                        }}
                        onMouseLeave={(e) => {
                          const target = e.currentTarget
                          target.style.transform = "translateX(0px)"
                          target.style.transition = "transform 0.1s ease-out, color 0.1s ease-out"
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="hidden lg:block fixed top-6 md:top-8 right-6 md:right-8 z-50">
        <a
          href="/Vikram-DP-Resume.pdf"
          download="Vikram_DP_Resume.pdf"
          className="bg-black/30 backdrop-blur-md text-white px-4 py-3 rounded-lg md:rounded-[0.5vw] border border-white/10 transition-all duration-300 hover:bg-black/40 flex items-center gap-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="text-xs sm:text-sm font-light tracking-wider whitespace-nowrap">Download Resume</span>
        </a>
      </div>
    </>
  )
}

export default Navigation
