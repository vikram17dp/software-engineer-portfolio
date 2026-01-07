'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Send } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/sections/footer';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message: `Company: ${company}\nBudget: ${budget}\n\nMessage:\n${message}`,
        }),
      });

      if (response.ok) {
        setStatusMessage('✓ Message sent! I’ll get back to you within 24 hours.');
        setName('');
        setEmail('');
        setCompany('');
        setBudget('');
        setMessage('');
      } else {
        setStatusMessage('✗ Failed to send. Please try email directly.');
      }
    } catch {
      setStatusMessage('✗ An error occurred. Please try again.');
    } finally {
      setLoading(false);
      setTimeout(() => setStatusMessage(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white ">
      <Navigation />

      <section className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-8 pt-36 md:pt-44 pb-20">

        {/* GRID BACKGROUND */}
        <div
          className="fixed inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* LEFT */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-[1px] bg-white/30" />
                  <span className="text-xs tracking-[0.3em] uppercase text-white/50">
                    Get In Touch
                  </span>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] mb-6">
                  Let's Build
                  <br />
                  <span className="text-white/40">Together</span>
                </h1>

                <p className="text-xl text-white/70 max-w-xl">
                  Have a project in mind? I'm available for freelance work and full-time opportunities.
                  Let's create something exceptional.
                </p>
              </motion.div>

              {/* INFO */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Email</p>
                  <a
                    href="mailto:vikram.dp@example.com"
                    className="text-lg hover:text-white/70 flex items-center gap-2"
                  >
                    vikramdp505@gmail.com
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Location</p>
                  <p className="text-lg">Bengaluru, India</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Availability</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-lg">Available for projects</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Response Time</p>
                  <p className="text-lg">Within 24 hours</p>
                </div>
              </div>

              {/* SOCIALS */}
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-4">Connect</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/vikram17dp"
                    target="_blank"
                    className="w-12 h-12 border border-white/10 rounded-lg flex items-center justify-center hover:border-white/30 transition"
                  >
                    <Github />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vikram-d-p/"
                    target="_blank"
                    className="w-12 h-12 border border-white/10 rounded-lg flex items-center justify-center hover:border-white/30 transition"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white/[0.02] border border-white/10 p-10 relative">
                <form onSubmit={handleSubmit} className="space-y-8">

                  <div className="grid sm:grid-cols-2 gap-6">
                    <input
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-transparent border-b border-white/20 py-3 outline-none"
                    />
                    <input
                      placeholder="Email Address *"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-transparent border-b border-white/20 py-3 outline-none"
                    />
                  </div>

                  {/* <div className="grid sm:grid-cols-2 gap-6">
                    <input
                      placeholder="Company / Organization"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="bg-transparent border-b border-white/20 py-3 outline-none"
                    />
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="bg-transparent border-b border-white/20 py-3 outline-none"
                    >
                      <option value="">Select budget</option>
                      <option>&lt; ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>₹1,00,000+</option>
                    </select>
                  </div> */}

                  <textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 outline-none resize-none"
                  />

                  {statusMessage && (
                    <p className="text-sm text-white/70">{statusMessage}</p>
                  )}

                  <button
                    disabled={loading}
                    className="bg-white text-black px-10 py-4 uppercase tracking-widest flex items-center gap-3 hover:bg-white/90 transition"
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-white/10" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-white/10" />
              </div>
            </div>
          </div>
        </div>
        
      </section>
           {/* Separator */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mt-2"></div>

      <Footer />
    </div>
  );
}
