"use client"

import type React from "react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    alert("Message sent! I will get back to you soon.")
  }

  return (
    <section
      id="contact"
      className="py-24 text-white border-t border-white/10 relative"
      style={{
        backgroundImage: "url(/hero-background.png)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight glow-text">LET'S TALK</h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-3 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b border-white/30 text-white focus:border-cyan-400 focus:outline-none transition text-sm"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-3 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b border-white/30 text-white focus:border-cyan-400 focus:outline-none transition text-sm"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-3 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-b border-white/30 text-white focus:border-cyan-400 focus:outline-none transition text-sm resize-none"
                placeholder="Tell us about your project or inquiry..."
              />
            </div>

            <button type="submit" className="mt-8 bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition">
              Send
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-12 pt-4">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Email</h3>
              <a
                href="mailto:niteshkumar.dev@gmail.com"
                className="text-2xl font-bold hover:text-cyan-400 transition break-all"
              >
                niteshkumar.dev@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Social & Links</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://linkedin.com/in/niteshkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition font-medium text-sm"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://github.com/niteshkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition font-medium text-sm"
                >
                  GitHub →
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Location</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Chennai, India
                <br />
                VIT Chennai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
