import { useState } from "react"

interface Study {
  level: string
  institution: string
  period: string
  location: string
}

export const Education = () => {

  const [studies] = useState<Study[]>([
    {
      level: "Primaria",
      institution: "Escuela Primaria Niños Héroes",
      period: "2010-2016",
      location: "Pátzcuaro, Michoacán"
    },
    {
      level: "Secundaria",
      institution: "Escuela Secundaria Federal Lázaro Cárdenas",
      period: "2016-2019",
      location: "Pátzcuaro, Michoacán"
    },
    {
      level: "Preparatoria",
      institution: "CBTIS #94",
      period: "2019-2022",
      location: "Pátzcuaro, Michoacán"
    },
    {
      level: "Universidad",
      institution: "Instituto Tecnológico de Morelia",
      period: "2022-Presente",
      location: "Morelia, Michoacán"
    }
  ])

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Educación</h2>

      <div className="flex flex-col gap-4 items-center">
        {studies.map((study, index) => (
          <div key={index} className="bg-indigo-800 p-4 rounded-lg shadow-md w-96">
            <h3 className="font-semibold text-red-500">{study.level}</h3>
            <p className="text-mist-400">{study.institution}</p>
            <p className="text-sm text-slate-200">
              {study.period} | {study.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}