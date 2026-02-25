import { useState } from "react"

export const TechnicalSkills = () => {

  const [hovered, setHovered] = useState<number | null>(null)

  const technicalSkills:string[] = [
    "Java",
    "C",
    "C++",
    "C#",
    "JavaScript",
    "HTML",
    "CSS",
    "PHP",
    "Python",
    "Swift",
    "React",
    "Node.js",
    "PostgreSQL",
    "SQLite",
    "Git",
    "Docker"
  ]

  return (
    <section className="py-20 text-center bg-gray-500">
      <h2 className="text-3xl font-bold mb-10 text-white">
        Habilidades Técnicas
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {
          technicalSkills.map((tech, idx) =>
            <div
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className={
                hovered === idx
                  ? "p-6 bg-blue-600 text-white rounded-lg"
                  : "p-6 bg-blue-950 text-white rounded-lg"
              }
            >
              {tech}
            </div>
          )
        }
      </div>
    </section>
  )
}