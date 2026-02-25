import { useState } from "react"
import { SectionTitle } from "../SectionTitle"

export const Contact = () => {

  const [email, setEmail] = useState("")

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Mensaje enviado por: ${email}`)
    setEmail("")
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <SectionTitle title="Contacto" />

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center gap-4">
        <input
          type="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Introduce tu email"
          className="p-3 border rounded-lg w-72"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}