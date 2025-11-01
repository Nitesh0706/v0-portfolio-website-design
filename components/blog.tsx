"use client"

export function Blog() {
  const articles = [
    {
      number: "01",
      title: "GETTING STARTED WITH REACT",
      description: "A beginner-friendly guide to understanding React hooks and components for building dynamic UIs.",
      year: "2024",
      image: "/react-hooks-guide.jpg",
    },
    {
      number: "02",
      title: "WEB DEVELOPMENT BEST PRACTICES",
      description: "Exploring clean code principles, performance optimization, and responsive design techniques.",
      year: "2024",
      image: "/web-dev-best-practices.jpg",
    },
    {
      number: "03",
      title: "MY JOURNEY INTO TECH",
      description: "Sharing my experiences as a first-year CS student and lessons learned while building projects.",
      year: "2025",
      image: "/tech-journey-student.jpg",
    },
  ]

  return (
    <section className="py-24 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-16 tracking-tight glow-text">LEARNING & ARTICLES</h2>

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
                <div className="w-full md:w-48 h-32 bg-gray-800 rounded-lg flex-shrink-0 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
