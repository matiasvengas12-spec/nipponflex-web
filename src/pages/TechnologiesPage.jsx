const coreTechnologies = [
  {
    number: '01',
    name: 'Campos magnéticos',
    image: '/images/technology-magnetic-fields.png',
    summary:
      'Una lectura de bienestar inspirada en la conexión con la tierra: equilibrio, circulación y descarga de tensión cotidiana.',
    tags: ['Equilibrio natural', 'Circulación', 'Descanso'],
  },
  {
    number: '02',
    name: 'FIR Power',
    image: '/images/technology-fir-power.png',
    summary:
      'Biocerámica pensada para trabajar con el calor corporal y acompañar una sensación de confort más profunda.',
    tags: ['Calor corporal', 'Confort', 'Recuperación'],
  },
]

const ionTags = ['Entorno más limpio', 'Smog iónico', 'Aire y rutina']

function TechnologiesPage() {
  return (
    <main className="bg-[#101c16] text-white">
      <section className="px-4 py-14 sm:px-8 sm:py-18 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-normal text-[#d7bd72]">
              Tecnologías Nipponflex
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Tecnología aplicada al descanso, el agua y el bienestar diario
            </h1>
            <p className="mt-5 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Nipponflex combina recursos inspirados en la naturaleza con
              materiales de uso cotidiano. La clave no es prometer magia, sino
              explicar cada tecnología con claridad para elegir mejor.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {coreTechnologies.map((tech) => (
              <article
                key={tech.name}
                className="fx-card overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20"
              >
                <div className="h-1 bg-gradient-to-r from-[#d7bd72] via-[#f3b23c] to-transparent" />
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="h-56 w-full object-cover sm:h-64"
                />
                <div className="p-5 sm:p-6">
                  <span className="text-4xl font-black leading-none text-[#d7bd72]">
                    {tech.number}
                  </span>
                  <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                    {tech.name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
                    {tech.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tech.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs font-bold text-white/82"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-stretch">
            <article className="fx-card overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
              <img
                src="/images/technology-ion-nature.png"
                alt="Naturaleza como referencia para los iones negativos"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </article>

            <article className="fx-card overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
              <div className="h-1 bg-gradient-to-r from-[#d7bd72] via-[#f3b23c] to-transparent" />
              <img
                src="/images/technology-ion-balls.png"
                alt="Ion Balls y purificación del entorno"
                className="h-48 w-full object-cover"
              />
              <div className="p-5 sm:p-6">
                <span className="text-4xl font-black leading-none text-[#d7bd72]">
                  03
                </span>
                <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                  Ion Balls
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
                  Un recurso mineral para hablar del entorno: aire, hábitos y
                  reducción de interferencias de la vida urbana.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {ionTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs font-bold text-white/82"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <article className="fx-card mt-6 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
            <img
              src="/images/technology-mfp.png"
              alt="Magnetic FIR Power como sinergia de tecnologías Nipponflex"
              className="min-h-[360px] w-full object-cover"
            />
          </article>
        </div>
      </section>
    </main>
  )
}

export default TechnologiesPage
