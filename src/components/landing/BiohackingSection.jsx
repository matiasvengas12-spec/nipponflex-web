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
    <section className="bg-[#12351f] px-5 py-20 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
            Biohacking natural
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            Mejora habitos desde tres puntos simples
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {biohackingPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-lg border border-white/15 bg-white/8 p-5"
            >
              <h3 className="text-2xl font-black">{pillar.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#d7e6d8]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BiohackingSection
