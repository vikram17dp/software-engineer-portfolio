"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExternalLink } from "lucide-react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const messageRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatusMessage("")

    try {
      const htmlContent = messageRef.current?.innerHTML || message

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: htmlContent }),
      })

      if (res.ok) {
        setStatusMessage("✓ Message sent! I’ll get back to you soon.")
        setName("")
        setEmail("")
        setMessage("")
        if (messageRef.current) messageRef.current.innerHTML = ""
      } else {
        setStatusMessage("✗ Failed to send message.")
      }
    } catch {
      setStatusMessage("✗ Something went wrong.")
    } finally {
      setLoading(false)
      setTimeout(() => setStatusMessage(""), 5000)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      {/* NAME + EMAIL */}
      <div className="grid sm:grid-cols-2 gap-6">
        {/* NAME */}
        <div className="relative group">
          <Input
            placeholder="Your Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="
              bg-transparent
              border-0
              rounded-none
              px-0 py-3
              text-white
              placeholder:text-white/40
              focus:outline-none
              focus-visible:ring-0
            "
          />
          {/* underline */}
          <span className="absolute left-0 bottom-0 w-full h-px bg-white/20" />
          <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-300" />
        </div>

        {/* EMAIL */}
        <div className="relative group">
          <Input
            type="email"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              bg-transparent
              border-0
              rounded-none
              px-0 py-3
              text-white
              placeholder:text-white/40
              focus:outline-none
              focus-visible:ring-0
            "
          />
          <span className="absolute left-0 bottom-0 w-full h-px bg-white/20" />
          <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-300" />
        </div>
      </div>

      {/* MESSAGE */}
      <div className="relative group">
        <div
          ref={messageRef}
          contentEditable
          onInput={() =>
            setMessage(messageRef.current?.textContent || "")
          }
          suppressContentEditableWarning
          className="
            min-h-[120px]
            px-0 py-3
            text-white
            bg-transparent
            outline-none
            placeholder:text-white/40
          "
          style={{
            fontFamily: "KH Teka, sans-serif",
            backgroundImage: message
              ? "none"
              : `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><text x="0" y="18" fill="rgba(255,255,255,0.35)">Tell me about your project...</text></svg>')`,
            backgroundRepeat: "no-repeat",
          }}
        />

        <span className="absolute left-0 bottom-0 w-full h-px bg-white/20" />
        <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-300" />
      </div>

      {/* STATUS */}
      {statusMessage && (
        <p
          className={`text-sm ${
            statusMessage.startsWith("✓")
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {statusMessage}
        </p>
      )}

      {/* BUTTON */}
      <Button
        disabled={loading}
        className="
          bg-white text-black
          px-8 py-3
          text-xs
          uppercase
          tracking-widest
          flex items-center gap-3
          hover:bg-white/90
          transition
        "
      >
        {loading ? "Sending…" : "Send Message"}
        <ExternalLink className="w-4 h-4" />
      </Button>

      <p className="text-xs text-white/40">
        Your information is secure and will never be shared.
      </p>
    </motion.form>
  )
}

export default ContactForm
