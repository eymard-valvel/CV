export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Eymard Velazquez</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#projects" className="hover:text-blue-600">
            Proyectos
          </a>
          <a href="#education" className="hover:text-blue-600">
            Educación
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}