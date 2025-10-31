"use client"

export function Blog() {
  const articles = [
    {
      number: "01",
      title: "GETTING STARTED WITH REACT",
      description: "A beginner-friendly guide to understanding React hooks and components for building dynamic UIs.",
      year: "2024",
    },
    {
      number: "02",
      title: "WEB DEVELOPMENT BEST PRACTICES",
      description: "Exploring clean code principles, performance optimization, and responsive design techniques.",
      year: "2024",
    },
    {
      number: "03",
      title: "MY JOURNEY INTO TECH",
      description: "Sharing my experiences as a first-year CS student and lessons learned while building projects.",
      year: "2025",
    },
  ]

  return (
    <section className="py-24 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-16 tracking-tight">LEARNING & ARTICLES</h2>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:items-center gap-8 pb-8 border-b border-white/10 hover:border-cyan-500/30 transition">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-white/20">({article.number})</span>
                    <span className="text-sm text-gray-500">{article.year}</span>
                  </div>
                  <h3 className="text-2xl font-black group-hover:text-cyan-400 transition">{article.title}</h3>
                  <p className="text-gray-400 max-w-md">{article.description}</p>
                </div>
                <div className="w-full md:w-48 h-32 bg-gray-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
