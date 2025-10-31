"use client"

export function Gallery() {
  const projects = [
    {
      title: "Portfolio Website",
      year: "2024",
      role: "Personal Project",
      description: "Modern portfolio built with HTML, CSS, and JS",
    },
    {
      title: "To-Do App",
      year: "2024",
      role: "React Project",
      description: "Productivity tool using React and Firebase",
    },
    { title: "Weather App", year: "2024", role: "API Integration", description: "Live weather data using Weather API" },
    {
      title: "E-Commerce Prototype",
      year: "2025",
      role: "UI/UX Design",
      description: "Full-stack e-commerce application",
    },
  ]

  return (
    <section id="portfolio" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black mb-16 tracking-tight">FEATURED PROJECTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-800 aspect-video rounded-lg overflow-hidden mb-4 hover:ring-2 ring-cyan-500/30 transition">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                    </svg>
                    <p className="text-xs text-gray-600">{project.year}</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold group-hover:text-cyan-400 transition">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{project.role}</p>
              <p className="text-sm text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials - Updated for student context */}
        <div className="border-t border-white/10 pt-24 space-y-12">
          <h3 className="text-4xl font-black tracking-tight">SKILLS & EXPERTISE</h3>

          <div className="bg-white/5 rounded-lg p-12 space-y-8">
            <div className="text-5xl text-white/30">"</div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
              As a first-year student, I'm building a strong foundation in web development and software engineering. My
              focus is on mastering modern technologies, contributing to open-source projects, and creating solutions
              that make an impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <div className="text-sm font-bold">Python</div>
              <div className="text-sm font-bold">C++</div>
              <div className="text-sm font-bold">JavaScript</div>
              <div className="text-sm font-bold">React</div>
              <div className="text-sm font-bold">Node.js</div>
              <div className="text-sm font-bold">Git</div>
              <div className="text-sm font-bold">HTML/CSS</div>
              <div className="text-sm font-bold">Firebase</div>
              <div className="text-sm font-bold">Figma</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
