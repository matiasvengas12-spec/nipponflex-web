const biohackingCards = [
  {
    number: '01',
    title: 'Dormir mejor',
    points: [
      'Sueño reparador profundo',
      'Recuperación muscular acelerada',
      'Mayor energía al despertar',
    ],
    image: '/images/biohacking-descanso.png',
  },
  {
    number: '02',
    title: 'Tomar mejor agua',
    points: [
      'Agua alcalina ionizada',
      'Mejor absorción celular',
      'Desintoxicación efectiva',
    ],
    image: '/images/biohacking-hidratacion.png',
  },
  {
    number: '03',
    title: 'Moverse con...',
    points: [
      'Postura y equilibrio mejorados',
      'Circulación sanguínea optimizada',
      'Reducción de la fatiga',
    ],
    image: '/images/biohacking-movimiento.png',
  },
]

const processSteps = [
  {
    title: 'Observamos tu rutina',
    text: 'Descanso, hidratación, movimiento y entorno cotidiano.',
  },
  {
    title: 'Detectamos el punto de entrada',
    text: 'Elegimos por dónde conviene empezar sin abrumar.',
  },
  {
    title: 'Recomendamos simple',
    text: 'Una sugerencia clara, aplicable y fácil de conversar.',
  },
]

function BiohackingPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#f7fbf4] px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-normal text-[#c7ab54]">
              Biohacking natural
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight text-[#12351f] sm:text-5xl">
              Hábitos simples para leer mejor el cuerpo
            </h1>
            <p className="mt-4 text-base leading-7 text-[#5f7165] sm:text-lg sm:leading-8">
              La idea no es sumar complejidad. Es ordenar descanso,
              hidratación y movimiento para entender qué producto o tecnología
              tiene más sentido en cada rutina.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {biohackingCards.map((card) => (
              <article
                key={card.title}
                className="fx-card group flex min-h-[455px] flex-col overflow-hidden rounded-lg border border-[#c6b982] bg-[#fbfaf3] p-3 shadow-xl shadow-green-950/10 transition duration-300 hover:-translate-y-1 hover:border-[#d7bd72] hover:shadow-2xl hover:shadow-green-950/15"
              >
                <div className="overflow-hidden rounded-md shadow-lg shadow-green-950/10">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="fx-card-media aspect-[16/9] w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col px-3 pb-4 pt-5 sm:px-4">
                  <span className="text-5xl font-black leading-none text-[#c7ab54] sm:text-6xl">
                    {card.number}
                  </span>
                  <h2 className="mt-4 text-2xl font-black leading-tight text-[#12351f] sm:text-3xl">
                    {card.title}
                  </h2>

                  <ul className="mt-4 grid gap-2">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="grid grid-cols-[22px_1fr] gap-2 text-sm font-medium leading-5 text-[#12351f]"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#12351f] text-xs font-black">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/biohacking"
                    className="mt-auto inline-flex pt-5 text-sm font-medium text-[#777] underline underline-offset-4 transition hover:text-[#148a45]"
                  >
                    Saber más
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-3 rounded-lg border border-[#dbe6d8] bg-white/75 p-4 shadow-xl shadow-green-950/5 sm:p-5 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-3 border-[#dbe6d8] py-3 lg:border-l lg:pl-5 lg:first:border-l-0"
              >
                <span className="text-sm font-black text-[#c7ab54]">
                  0{index + 1}
                </span>
                <h2 className="text-xl font-black text-[#12351f]">
                  {step.title}
                </h2>
                <p className="text-sm leading-6 text-[#5f7165]">{step.text}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-center text-sm font-bold leading-6 text-[#5f7165]">
            Sin fórmulas mágicas ni compra impulsiva: primero entendemos el
            caso, después elegimos un camino.
          </p>
        </div>
      </section>

      <section className="bg-[#12351f] px-4 py-14 text-white sm:px-8 sm:py-18 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
              Metodo de asesoramiento
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-5xl">
              De una consulta suelta a una recomendacion clara
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#d7e6d8] sm:text-lg sm:leading-8">
              La conversacion empieza por lo que la persona vive todos los dias:
              como duerme, como se hidrata y que quiere mejorar. El producto
              aparece despues, con contexto.
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
      </section>
    </main>
  )
}

export default BiohackingPage
