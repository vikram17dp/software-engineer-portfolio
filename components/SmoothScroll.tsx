"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect accessibility
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Disable on mobile / touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    let current = window.scrollY;
    let target = window.scrollY;
    let velocity = 0;
    let rafId: number | null = null;

    /* 🔧 TUNED FOR HALF-SMOOTH FEEL */
    const lerp = 0.01;       // ⬅ reduced (was 0.12)
    const friction = 0.40;   // ⬅ higher friction = less float

    const update = () => {
      const diff = target - current;
      velocity = velocity * friction + diff * lerp;
      current += velocity;

      window.scrollTo(0, current);

      if (Math.abs(diff) > 0.4 || Math.abs(velocity) > 0.4) {
        rafId = requestAnimationFrame(update);
      } else {
        rafId = null;
        velocity = 0;
        current = target;
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      target += e.deltaY * 0.9; // ⬅ less amplification

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      target = Math.max(0, Math.min(target, maxScroll));

      if (!rafId) rafId = requestAnimationFrame(update);
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
