"use client"

import { motion } from "framer-motion"
import ContactForm from "@/components/contact-form"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Contact() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left Side */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
                <span className="block">Let's Create</span>
                <span className="block text-[#d0d0d0]">Something Great</span>
              </h2>
              <p className="text-lg text-[#d0d0d0] max-w-xl leading-relaxed">
                Ready to bring your ideas to life? Let's discuss your next project.
              </p>

              <motion.div variants={itemVariants} className="mt-12 space-y-6 text-[#d0d0d0]">
                <p className="text-sm">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:hello@example.com" className="hover:text-[#F5F5F5] transition-colors">
                    contact@vikram.dev
                  </a>
                </p>
                <p className="text-sm">
                  <strong>Location:</strong> Bangalore, India
                </p>
                <div className="flex gap-6 pt-4">
                  <a href="#" className="hover:text-[#F5F5F5] transition-colors text-sm">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-[#F5F5F5] transition-colors text-sm">
                    GitHub
                  </a>
                  <a href="#" className="hover:text-[#F5F5F5] transition-colors text-sm">
                    Twitter
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
