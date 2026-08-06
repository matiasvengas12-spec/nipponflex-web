import { buildWhatsAppUrl } from '../config/contact'

const technologies = [
  {
    number: '01',
    name: 'Campos magneticos',
    summary:
      'Una linea de productos pensada para hablar de descanso, relajacion y contacto con una experiencia inspirada en la naturaleza.',
    uses: ['Descanso', 'Relax', 'Uso diario'],
  },
  {
    number: '02',
    name: 'FIR Power',
    summary:
      'Bioceramica asociada al calor corporal y al confort profundo, presentada de forma simple para el usuario final.',
    uses: ['Confort', 'Rutina', 'Bienestar'],
  },
  {
    number: '03',
    name: 'Ion Balls',
    summary:
      'Tecnologia mineral para conversar sobre equilibrio, entorno urbano y sensacion de bienestar cotidiano.',
    uses: ['Entorno', 'Equilibrio', 'Habitos'],
  },
  {
    number: '04',
    name: 'Magnetic FIR Power',
    summary:
      'Integracion del enfoque FIR y magnetico en productos que buscan una experiencia mas completa.',
    uses: ['Sinergia', 'Tecnologia', 'Asesoria'],
  },
]

function TechnologiesPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#101c16] px-4 py-12 text-white sm:px-8 sm:py-18 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
              Tecnologias Nipponflex
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              Tecnologia ordenada para elegir mejor
            </h1>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:max-w-lg">
              {['FIR Power', 'Ion Balls', 'Magneto', 'MFP'].map((item) => (
                <div
                  key={item}
                  className="border border-white/15 bg-white/8 px-4 py-3 text-sm font-black"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/15 bg-white/10">
            <img
              src="https://equipobioenergy.com/images/inicio/hero-8.jpg"
              alt="Productos y tecnologias Nipponflex"
              className="h-[340px] w-full object-cover sm:h-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-2">
            {technologies.map((tech) => (
              <article
                key={tech.name}
                className="grid gap-5 border border-[#dbe6d8] bg-[#f7fbf4] p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-sm font-black text-[#148a45]">
                      {tech.number}
                    </span>
                    <h2 className="mt-3 text-2xl font-black text-[#12351f] sm:text-3xl">
                      {tech.name}
                    </h2>
                  </div>
                  <span className="h-2 w-16 bg-[#f3b23c]" />
                </div>
                <p className="text-sm leading-6 text-[#5f7165] sm:text-base sm:leading-7">
                  {tech.summary}
                </p>
                <div className="flex flex-wrap gap-2">
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
        </div>
      </section>

      <section className="bg-[#f7fbf4] px-4 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#148a45]">
              Asesoria
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#12351f] sm:text-3xl">
              Elegir tecnologia segun la necesidad
            </h2>
          </div>
          <a
            href={buildWhatsAppUrl(
              'Hola, quiero entender que tecnologia Nipponflex me conviene.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md bg-[#148a45] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0f7338] focus:outline-none focus:ring-4 focus:ring-[#98d5ad] sm:w-auto"
          >
            Solicitar asesoria
          </a>
        </div>
      </section>
    </main>
  )
}

export default TechnologiesPage
