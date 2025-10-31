"use client"

export function Hero() {
  return (
    <section className="min-h-screen bg-black text-white pt-28 pb-16 overflow-hidden relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ opacity: 0.05 }}
        />
        <div
          className="absolute top-1/2 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ opacity: 0.05 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left - Bold Typography */}
          <div className="space-y-12">
            <h1 className="text-7xl md:text-8xl font-black leading-none tracking-tighter text-balance">
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
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate software developer and B.Tech Computer Science student at VIT Chennai. I enjoy learning
                new technologies, building innovative projects, and solving real-world problems through code.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
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
      </div>
    </section>
  )
}
