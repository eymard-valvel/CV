import { useState } from "react"

export const SectionTitle = ({ title }: { title: string }) => {

  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <h2
      onClick={toggleActive}
      className={`text-2xl font-bold mb-6 pb-2 border-b-2 transition ${
        isActive ? "border-blue-500 text-blue-600" : "border-gray-300"
      }`}
    >
      {title}
    </h2>
  )
}