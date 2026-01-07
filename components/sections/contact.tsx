"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import ContactForm from "@/components/contact-form"
import Navigation from "../navigation"

export default function Contact() {
  return (
    <section className="relative bg-black overflow-hidden ">
              {/* <Navigation /> */}
      
      {/* Background curves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-20%] top-[-30%] w-[700px] h-[700px] rounded-full border border-white/10 opacity-30" />
        <div className="absolute left-[-30%] bottom-[-40%] w-[800px] h-[800px] rounded-full border border-white/5 opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-28 md:py-36">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">


          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white">
              Let's Create
              <br />
              <span className="text-white/40">Something Great</span>
            </h1>

            <div className="mt-10 flex items-center gap-6">
              <Link href="/contact">
                <button
                  className="
                    bg-white text-black
                    px-6 py-3
                    text-xs
                    uppercase
                    tracking-widest
                    flex items-center gap-3
                    hover:bg-white/90
                    transition
                  "
                >
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>

              <p className="text-sm text-white/60">
                Available for freelance projects
              </p>
            </div>
          </motion.div>

          {/* RIGHT — SINGLE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="
              bg-white/[0.02]
              border border-white/10
              p-10
              relative
            "
          >
            <p className="text-xs tracking-widest uppercase text-white/60 mb-4">
              Start a Project
            </p>

            <p className="text-lg text-white/70 mb-10 max-w-md">
              Ready to bring your ideas to life? Let’s discuss your next project.
            </p>

            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
