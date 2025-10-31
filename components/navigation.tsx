"use client"

import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-lg tracking-wider hover:opacity-80 transition">
          Nitesh
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#about" className="text-gray-300 hover:text-white transition text-sm font-medium">
            About
          </Link>
          <Link href="#services" className="text-gray-300 hover:text-white transition text-sm font-medium">
            Services
          </Link>
          <Link href="#portfolio" className="text-gray-300 hover:text-white transition text-sm font-medium">
            Portfolio
          </Link>
          <Link href="#contact" className="bg-white text-black px-5 py-2 font-bold hover:bg-gray-200 transition">
            Let's Talk
          </Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          <Link href="#about" className="text-gray-300 hover:text-white transition text-sm font-medium">
            About
          </Link>
          <Link href="#services" className="text-gray-300 hover:text-white transition text-sm font-medium">
            Services
          </Link>
          <Link href="#portfolio" className="text-gray-300 hover:text-white transition text-sm font-medium">
            Portfolio
          </Link>
          <Link href="#contact" className="bg-white text-black px-5 py-2 font-bold hover:bg-gray-200 transition w-fit">
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  )
}
