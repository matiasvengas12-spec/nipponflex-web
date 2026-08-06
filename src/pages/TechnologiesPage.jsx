import { buildWhatsAppUrl } from '../config/contact'

const technologies = [
  {
    name: 'Campos magneticos',
    summary:
      'Se presentan como una forma de acercar al cuerpo una experiencia inspirada en el magnetismo natural de la Tierra.',
    uses: ['Descanso', 'Relajacion', 'Uso cotidiano'],
  },
  {
    name: 'FIR Power',
    summary:
      'Tecnologia de bioceramica vinculada al calor corporal y a una sensacion de confort profundo.',
    uses: ['Confort', 'Recuperacion', 'Bienestar'],
  },
  {
    name: 'Ion Balls',
    summary:
      'Esferas minerales pensadas para hablar de equilibrio energetico y bienestar en ambientes de vida urbana.',
    uses: ['Entorno', 'Relax', 'Rutina'],
  },
  {
    name: 'Magnetic FIR Power',
    summary:
      'Integra el enfoque FIR y magnetico en una misma linea de productos Nipponflex.',
    uses: ['Sinergia', 'Descanso', 'Tecnologia'],
  },
]

function TechnologiesPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#12351f] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
            Tecnologias Nipponflex
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight sm:text-6xl">
            Explicar la tecnologia sin saturar ni prometer de mas
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d7e6d8]">
            Esta pagina ordena los conceptos principales para que el visitante
            entienda por que hay distintas familias de productos. El foco esta
            en bienestar, confort, habitos y acompanamiento personalizado.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {technologies.map((tech) => (
            <article
              key={tech.name}
              className="rounded-lg border border-[#dbe6d8] bg-[#f7fbf4] p-6"
            >
              <h2 className="text-3xl font-black text-[#12351f]">
                {tech.name}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#5f7165]">
                {tech.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tech.uses.map((use) => (
                  <span
                    key={use}
                    className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#38613c]"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7fbf4] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#148a45]">
              Asesoria
            </p>
            <h2 className="mt-2 text-3xl font-black text-[#12351f]">
              Elegir tecnologia segun la necesidad
            </h2>
          </div>
          <a
            href={buildWhatsAppUrl(
              'Hola, quiero entender que tecnologia Nipponflex me conviene.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#148a45] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0f7338] focus:outline-none focus:ring-4 focus:ring-[#98d5ad]"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}

export default TechnologiesPage
