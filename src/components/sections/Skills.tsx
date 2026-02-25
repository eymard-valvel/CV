import { useState } from "react"

export const Skills = () => {

  const [selected, setSelected] = useState<number | null>(null)

  const skills:string[] = [
    "Trabajo en equipo",
    "Resolución de problemas",
    "Pensamiento lógico",
    "Comunicación",
    "Organización",
    "Adaptabilidad",
    "Empatía",
    "Respeto a los demás"
  ]

  return (
    <section className="py-20 bg-blue-950 text-center">
      <h2 className="text-3xl font-bold text-white">
        Soft Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {
          skills.map((skill, idx) =>
            <span
              key={idx}
              onClick={() => setSelected(idx)}
              className={
                selected === idx
                  ? "px-4 py-2 bg-blue-600 text-white rounded-full cursor-pointer"
                  : "px-4 py-2 bg-blue-100 text-blue-700 rounded-full cursor-pointer"
              }
            >
              {skill}
            </span>
          )
        }
      </div>
    </section>
  )
}