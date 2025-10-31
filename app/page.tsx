"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
