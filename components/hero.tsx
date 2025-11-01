"use client"

export function Hero() {
  const scrollDown = () => {
    const nextSection = document.querySelector(".services-section")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="min-h-screen text-white pt-28 pb-16 overflow-hidden relative bg-cover bg-center"
      style={{
        backgroundImage: "url(/hero-background.png)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left - Bold Typography */}
          <div className="space-y-12">
            <h1 className="glow-text text-5xl md:text-6xl font-black leading-none tracking-tighter text-balance">
              ASPIRING
              <br />
              DEVELOPER
            </h1>

            {/* Location badges */}
            <div className="flex flex-wrap gap-8 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <div>
                <div>VIT CHENNAI</div>
                <div>EST. 2024</div>
              </div>
              <div>
                <div>B.TECH CS</div>
                <div>YEAR 1</div>
              </div>
              <div>
                <div>TECH STACK</div>
                <div>EXPANDING</div>
              </div>
            </div>
          </div>

          {/* Right - Description & CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-base text-gray-300 leading-relaxed">
                I'm a passionate software developer and B.Tech Computer Science student at VIT Chennai. I enjoy learning
                new technologies, building innovative projects, and solving real-world problems through code.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                At the intersection of creativity and technology, I design more than just code—I create solutions. Every
                project is a reflection of clean logic and bold ideas.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition font-bold text-sm tracking-wider"
            >
              GET IN TOUCH
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative date */}
        <div className="absolute bottom-8 right-6 text-gray-600 text-xs font-bold tracking-wider">15|01|2025</div>

        <button
          onClick={scrollDown}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white hover:text-gray-300 transition z-20 flex flex-col items-center gap-2"
          aria-label="Scroll to next section"
        >
          <svg className="w-6 h-6 bounce-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="text-xs font-bold tracking-wider uppercase">Down</span>
        </button>
      </div>
    </section>
  )
}
