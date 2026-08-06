const biohackingBenefits = [
  {
    title: 'Descanso Inteligente',
    image: 'https://equipobioenergy.com/images/productos/almh1-1.png',
    points: [
      'Sueño reparador profundo',
      'Recuperación muscular acelerada',
      'Mayor energía al despertar',
    ],
  },
  {
    title: 'Hidratación Celular',
    image: 'https://equipobioenergy.com/images/productos/jam3l-1.jpg',
    points: [
      'Agua alcalina ionizada',
      'Mejor absorción celular',
      'Desintoxicación efectiva',
    ],
  },
  {
    title: 'Movimiento',
    image: '/images/biohacking-benefit-movimiento.png',
    points: [
      'Postura y equilibrio mejorados',
      'Circulación sanguínea optimizada',
      'Reducción de la fatiga',
    ],
  },
]

function BiohackingSection() {
  return (
    <section
      id="biohacking"
      className="bg-[#f7fbf4] px-4 py-14 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg bg-[radial-gradient(circle_at_25%_10%,#ffffff_0,#eef7f1_35%,#cfdad6_100%)] px-4 py-10 shadow-2xl shadow-green-950/10 sm:px-8 lg:px-10">
          <h2 className="fx-reveal mx-auto max-w-none text-center text-3xl font-black leading-tight text-[#12351f] sm:text-4xl lg:whitespace-nowrap xl:text-5xl">
            Biohacking aplicado a habitos simples
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.82fr_2.18fr] lg:items-stretch">
            <div className="fx-reveal fx-reveal-delay-1 fx-card relative overflow-hidden rounded-lg border border-white/70 bg-white/45 shadow-xl shadow-green-950/10 backdrop-blur">
              <div className="relative h-[360px] sm:h-[520px] lg:h-full lg:min-h-[520px]">
                <img
                  src="/images/biohacking-home-slide-lifestyle.png"
                  alt="Rutina cotidiana de hidratacion y descanso como entrada al biohacking"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {biohackingBenefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="fx-card flex min-h-[460px] flex-col rounded-lg border border-white/80 bg-white/45 p-4 shadow-xl shadow-green-950/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-2xl hover:shadow-green-950/15"
                >
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="aspect-square w-full rounded-md object-cover shadow-lg shadow-green-950/10"
                  />

                  <div className="flex flex-1 flex-col pt-6">
                    <h3 className="whitespace-nowrap text-xl font-black leading-tight text-[#12351f] xl:text-2xl">
                      {benefit.title}
                    </h3>

                    <ul className="mt-5 grid gap-3">
                      {benefit.points.map((point) => (
                        <li
                          key={point}
                          className="grid grid-cols-[24px_1fr] gap-3 text-sm font-medium leading-5 text-[#12351f]"
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
                      className="mt-auto inline-flex justify-center pt-7 text-sm font-medium text-[#607064] underline underline-offset-4 transition hover:text-[#148a45]"
                    >
                      Saber mas
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BiohackingSection
