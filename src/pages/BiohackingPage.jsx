const habitCards = [
  {
    title: 'Dormir mejor',
    image: '/images/biohacking-descanso.png',
    alt: 'Descanso inteligente con tecnologia de bienestar',
    points: [
      'Descanso profundo',
      'Rutina anti estres',
      'Energia al despertar',
    ],
  },
  {
    title: 'Tomar mejor',
    image: '/images/biohacking-hidratacion.png',
    alt: 'Hidratacion celular y agua alcalina',
    points: [
      'Biohackea tu filtro',
      'Eliminacion de toxinas',
      'Tomar el control',
    ],
  },
  {
    title: 'Moverse con...',
    image: '/images/biohacking-movimiento.png',
    alt: 'Movimiento y bienestar corporal cotidiano',
    points: [
      'Beneficio en movimiento',
      'Movimiento sin molestias',
      'Postura mejorada',
    ],
  },
]

const advisorySteps = [
  {
    title: 'Observamos tu rutina',
    text: 'Descanso, hidratacion, movimiento y entorno cotidiano.',
  },
  {
    title: 'Detectamos el punto de entrada',
    text: 'Elegimos por donde conviene empezar sin abrumar.',
  },
  {
    title: 'Recomendamos simple',
    text: 'Una sugerencia clara, aplicable y facil de conversar.',
  },
]

function BiohackingPage() {
  return (
    <main className="bg-[#06391f]">
      <section className="bg-[#fbf9ef] px-4 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-black text-[#79906c]">
              Vida Plena Nipponflex
            </p>
            <h1 className="mt-1 text-3xl font-black leading-tight text-[#173d2b] sm:text-5xl">
              Biohacking aplicado a hábitos simples
            </h1>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {habitCards.map((card) => (
              <article
                key={card.title}
                className="fx-card flex min-h-[315px] flex-col rounded-lg border border-[#ded8bd] bg-[#fffdf4] p-3 shadow-xl shadow-green-950/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-950/15"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="aspect-[16/9] w-full rounded-md object-cover"
                />

                <div className="flex flex-1 flex-col px-1 pt-4">
                  <h2 className="text-lg font-black leading-tight text-[#173d2b]">
                    {card.title}
                  </h2>

                  <ul className="mt-3 grid gap-1.5">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="grid grid-cols-[16px_1fr] gap-2 text-xs font-bold leading-5 text-[#526956]"
                      >
                        <span className="text-[#c9ad62]">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#catalogo"
                    className="mt-auto pt-4 text-xs font-black text-[#173d2b] transition hover:text-[#148a45]"
                  >
                    Saber más &gt;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#12351f] px-4 py-14 text-white sm:px-8 sm:py-18 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
                Metodo de asesoramiento
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-5xl">
                De una consulta suelta a una recomendacion clara
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#d7e6d8] sm:text-lg sm:leading-8">
                La conversacion empieza por lo que la persona vive todos los
                dias: como duerme, como se hidrata y que quiere mejorar. El
                producto aparece despues, con contexto.
              </p>
            </div>

            <div className="fx-card overflow-hidden rounded-lg border border-white/15 bg-white shadow-2xl shadow-black/25">
              <img
                src="/images/biohacking-advisory-tech.png"
                alt="Asesoramiento simple: escuchamos tu rutina, entendemos el objetivo y sugerimos un camino"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-3 rounded-lg border border-white/12 bg-white/[0.06] p-4 shadow-2xl shadow-black/10 sm:p-5 lg:grid-cols-3">
            {advisorySteps.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-3 border-white/12 py-3 lg:border-l lg:pl-5 lg:first:border-l-0"
              >
                <span className="text-sm font-black text-[#f3b23c]">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-black text-white">{step.title}</h3>
                <p className="text-sm leading-6 text-[#d7e6d8]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default BiohackingPage
