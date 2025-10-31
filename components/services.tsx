"use client"

export function Services() {
  const services = [
    {
      number: "01",
      title: "WEB DESIGN & FRONT-END DEVELOPMENT",
      description:
        "Creating responsive, modern web applications with clean HTML, CSS, and React. I focus on building user-friendly interfaces that are both visually appealing and functionally robust.",
    },
    {
      number: "02",
      title: "UI/UX PROTOTYPING",
      description:
        "Designing interactive prototypes and mockups to visualize ideas before development. I use tools like Figma to create detailed wireframes and high-fidelity designs that guide the development process.",
    },
    {
      number: "03",
      title: "FULL-STACK APPLICATION DEVELOPMENT",
      description:
        "Building complete web applications from frontend to backend. Using React, Node.js, and Firebase, I create scalable solutions that handle data efficiently and provide seamless user experiences.",
    },
    {
      number: "04",
      title: "CODE DEBUGGING & OPTIMIZATION",
      description:
        "Identifying and fixing bugs in existing code, optimizing performance, and implementing best practices. I help improve code quality and ensure applications run smoothly across all platforms.",
    },
  ]

  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black mb-20 tracking-tight">WHAT I DO</h2>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="flex items-start gap-8 pb-12 border-b border-white/10 hover:border-cyan-500/30 transition">
                <div className="text-5xl font-black text-white/20 group-hover:text-cyan-500/40 transition flex-shrink-0 w-16">
                  ({service.number})
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-2xl">{service.description}</p>
                  <button className="inline-block border border-white/30 hover:border-white text-white px-6 py-2 text-sm font-bold transition">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
