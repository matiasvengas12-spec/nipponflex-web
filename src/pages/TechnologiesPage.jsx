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
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
            Tecnologias Nipponflex
          </p>
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
    </main>
  )
}

export default TechnologiesPage
