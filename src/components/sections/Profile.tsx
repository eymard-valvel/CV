import { useState } from "react"

export const Profile = () => {

  const [hover, setHover] = useState(false)

  return (
    <section
      className={hover
        ? "min-h-screen flex flex-col justify-center items-center text-center bg-slate-900"
        : "min-h-screen flex flex-col justify-center items-center text-center"
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1 className="text-5xl font-bold mb-4 text-slate-100">
        Hola, soy{" "}
        <span className="text-blue-600">
          Eymard Alfonso Valencia Velazquez
        </span>
      </h1>

      <p className="text-lg text-slate-100 max-w-xl">
        Estudiante de Ingeniería en Sistemas Computacionales apasionado por el desarrollo web.
      </p>

      <a
        href="#contact"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Contáctame
      </a>
    </section>
  )
}