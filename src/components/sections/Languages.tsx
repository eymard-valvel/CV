export const Languages = () => {

  const languages:string[] = [
    "Español (Nativo)",
    "Inglés (Intermedio)"
  ]

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10 text-emerald-500">Idiomas</h2>

      {
        languages.map((lang, idx) =>
          <p className="text-slate-200" key={idx}>{lang}</p>
        )
      }
    </section>
  )
}