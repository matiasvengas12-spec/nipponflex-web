const habitCards = [
  {
    title: 'Dormir mejor',
    image: '/images/biohacking-ref-sleep.png',
    alt: 'Persona descansando en la cama',
    points: [
      'Descanso profundo',
      'Rutina anti estres',
      'Energia al despertar',
    ],
  },
  {
    title: 'Tomar mejor',
    image: '/images/biohacking-ref-water.png',
    alt: 'Agua limpia en movimiento',
    points: [
      'Biohackea tu filtro',
      'Eliminacion de toxinas',
      'Tomar el control',
    ],
  },
  {
    title: 'Moverse con...',
    image: '/images/biohacking-ref-move.png',
    alt: 'Persona corriendo',
    points: [
      'Beneficio en movimiento',
      'Movimiento sin molestias',
      'Postura mejorada',
    ],
  },
]

const advisorySteps = [
  'Escuchamos tu rutina',
  'Entendemos el objetivo',
  'Sugerimos un camino',
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

      <section className="bg-[#073b22] px-4 py-14 text-white sm:px-8 sm:py-18 lg:px-10">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h2 className="max-w-lg text-3xl font-black leading-tight sm:text-5xl">
              De una consulta suelta a una recomendación clara
            </h2>
            <p className="mt-5 text-sm font-black uppercase tracking-normal text-[#d7bd72]">
              Método de asesoramiento
            </p>
            <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-[#d7e6d8] sm:text-base sm:leading-7">
              Leemos cómo está tu dormir, despertar, digestión, sed, sedentarismo
              y descanso. Traducir el dolor diario en una elección de producto
              correcta evita compras sin sentido.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr] sm:items-stretch">
            <article className="rounded-lg bg-[#89a48f] p-3 shadow-2xl shadow-black/20">
              <img
                src="/images/biohacking-ref-advisor.png"
                alt="Asesor revisando una rutina en tablet"
                className="aspect-[4/5] w-full rounded-md object-cover"
              />
              <div className="px-2 pb-2 pt-4 text-center">
                <h3 className="text-xl font-black leading-tight">
                  Asesoramiento Simple
                </h3>
                <p className="mt-1 text-xs font-bold text-white/78">
                  Asesoramiento ligero
                </p>
              </div>
            </article>

            <div className="grid gap-3">
              {advisorySteps.map((step, index) => (
                <article
                  key={step}
                  className="grid min-h-24 grid-cols-[1fr_auto] items-center gap-3 rounded-lg bg-white/20 p-4 shadow-xl shadow-black/10 backdrop-blur"
                >
                  <p className="text-sm font-black leading-tight text-white">
                    {step}
                  </p>
                  <span className="text-3xl font-black leading-none text-[#d7bd72]">
                    {index + 1}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BiohackingPage
