import { SectionTitle } from "../SectionTitle"
import { useState } from "react"

export const About = () => {

  const [showMore, setShowMore] = useState(false)

  const toggleDescription = () => {
    setShowMore(!showMore)
  }

  return (
    <section id="about" className="py-20 text-center">
      <SectionTitle title="Sobre Mí" />

      <p className="text-gray-700 max-w-3xl mx-auto mt-6">
        Soy estudiante de Ingeniería en Sistemas Computacionales con enfoque en
        desarrollo backend y arquitectura de software.
      </p>

      {showMore && (
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          Me interesa crear soluciones tecnológicas escalables que generen impacto real.
        </p>
      )}

      <button
        onClick={toggleDescription}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        {showMore ? "Mostrar menos" : "Mostrar más"}
      </button>
    </section>
  )
}