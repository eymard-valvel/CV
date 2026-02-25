import { useState } from "react"

export const Experience = () => {

  const [active, setActive] = useState<number | null>(null)

  const experiences = [
    {
      title: "Desarrollador FullStack",
      description:
        "Desde 2019 hasta la actualidad, estudio y desarrollo tecnologías web, backend y móviles."
    },
    {
      title: "Caballo De Hierro Consulting App",
      description:
        "Desarrollo de ecosistema web y móvil para encuestas empresariales."
    },
    {
      title: "EmergenCity",
      description:
        "Sistema que conecta ambulancias, hospitales y doctores en un mismo ecosistema."
    }
  ]

  const handleToggle = (index:number) => {
    setActive(active === index ? null : index)
  }

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10 text-lime-300">Experiencia</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {
          experiences.map((exp, idx) => (
            <div key={idx}>
              <h3
                className="font-semibold cursor-pointer text-cyan-500"
                onClick={() => handleToggle(idx)}
              >
                {exp.title}
              </h3>

              {
                active === idx &&
                <p className="text-slate-300 mt-2">
                  {exp.description}
                </p>
              }
            </div>
          ))
        }
      </div>
    </section>
  )
}