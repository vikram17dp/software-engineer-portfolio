"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export function useScrollToSection() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(1)
      if (!hash) return

      // Small delay to allow DOM to settle
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }

    // Handle hash on mount and when hash changes
    handleHash()
    window.addEventListener("hashchange", handleHash)

    return () => {
      window.removeEventListener("hashchange", handleHash)
    }
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      // Already on home, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      // Navigate to home with hash, which will trigger scroll after load
      router.push(`/#${sectionId}`)
    }
  }

  return { scrollToSection }
}
