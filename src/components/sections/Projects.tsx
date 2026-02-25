import { useState } from "react"
import { SectionTitle } from "../SectionTitle"
import { Card } from "../Card"

export const Projects = () => {

  const [selected, setSelected] = useState<number | null>(null)

  const projects:{
    title:string
    description:string
    tech:string
  }[] = [
    {
      title: "Caballo de Hierro Consulting",
      description: "Sistema que comprende página web y aplicación móvil para asignación y contestación de encuestas. De uso exclusivamente para Caballo de Hierro Consulting",
      tech: "Python, MySQL, Java"
    },
    {
      title: "EmergenCity",
      description: "Software que conecta Ambulancias, Hospitales y Doctores en un mismo ecosistema ágil. De uso exclusivamente para servicios de emergencia en la Ciudad de Morelia, Michoacán.",
      tech: "React, Express, Prisma, Node.js, PostgreSQL"
    }
  ]

  const handleSelect = (index:number) => {
    setSelected(selected === index ? null : index)
  }

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <SectionTitle title="Proyectos" />

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {
            projects.map((project, idx) => (
              <div key={idx} onClick={() => handleSelect(idx)}>
                <Card
                  title={project.title}
                  description={
                    selected === idx
                      ? project.description
                      : "Click para ver más información"
                  }
                  tech={project.tech}
                />
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}