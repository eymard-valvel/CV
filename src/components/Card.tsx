import { useState } from "react"

interface CardProps {
  title: string
  description: string
  tech: string
}

export const Card = ({ title, description, tech }: CardProps) => {

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`rounded-2xl p-8 transition duration-300 border ${
        isHovered
          ? "bg-white shadow-2xl border-blue-400"
          : "bg-white shadow-lg border-gray-100"
      }`}
    >
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="text-sm font-medium text-blue-600">
        {tech}
      </div>
    </div>
  )
}