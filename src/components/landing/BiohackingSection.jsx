const biohackingPillars = [
  {
    title: 'Descanso',
    description:
      'Optimizar el sueno y la recuperacion diaria con habitos simples y productos orientados al confort.',
  },
  {
    title: 'Hidratacion',
    description:
      'Mejorar la calidad del agua que consumis todos los dias como primer paso de una rutina mas consciente.',
  },
  {
    title: 'Movimiento',
    description:
      'Acompanar postura, pisada y actividad cotidiana con accesorios pensados para el uso diario.',
  },
]

function BiohackingSection() {
  return (
    <section className="bg-[#12351f] px-4 py-14 text-white sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
            Biohacking natural
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            Mejora habitos desde tres puntos simples
          </h2>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 md:grid-cols-3 md:gap-4">
          {biohackingPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-lg border border-white/15 bg-white/8 p-4 sm:p-5"
            >
              <h3 className="text-xl font-black sm:text-2xl">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#d7e6d8] sm:mt-3 sm:text-base sm:leading-7">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        <a
          href="/biohacking"
          className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-[#f3b23c] px-5 py-3 text-sm font-bold text-[#12351f] transition hover:bg-[#ffca67] focus:outline-none focus:ring-4 focus:ring-[#f8d58b] sm:mt-8 sm:w-auto"
        >
          Ver mas sobre biohacking
        </a>
      </div>
    </section>
  )
}

export default BiohackingSection
