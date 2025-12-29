"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-sm text-[#d0d0d0] mb-3">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="w-full bg-[#1a1a1a] border-b border-[#333333] px-0 py-3 text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#F5F5F5] transition-colors"
          placeholder="Vikram"
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm text-[#d0d0d0] mb-3">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          className="w-full bg-[#1a1a1a] border-b border-[#333333] px-0 py-3 text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#F5F5F5] transition-colors"
          placeholder="hello@example.com"
        />
      </div>

      {/* Message Input */}
      <div>
        <label htmlFor="message" className="block text-sm text-[#d0d0d0] mb-3">
          Your Message
        </label>
        <textarea
          id="message"
          required
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          rows={6}
          className="w-full bg-[#1a1a1a] border border-[#333333] p-4 text-[#F5F5F5] placeholder-[#666666] focus:outline-none focus:border-[#F5F5F5] transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full px-6 py-4 bg-[#F5F5F5] text-[#0B0B0B] font-semibold uppercase tracking-wider text-sm hover:bg-[#d0d0d0] transition-all duration-300 disabled:opacity-50"
        disabled={submitted}
      >
        {submitted ? "Message Sent!" : "Send Message"}
      </motion.button>

      {/* Privacy Notice */}
      <p className="text-xs text-[#888888] text-center">
        Your information is secure and will never be shared with third parties.
      </p>
    </motion.form>
  )
}
