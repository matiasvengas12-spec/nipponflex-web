const biohackingPillars = [
  {
    number: '01',
    title: 'Descanso',
    description:
      'Rutinas y productos orientados a mejorar la experiencia de recuperacion diaria.',
  },
  {
    number: '02',
    title: 'Hidratacion',
    description:
      'Agua como punto de entrada simple para empezar a cuidar el bienestar cotidiano.',
  },
  {
    number: '03',
    title: 'Movimiento',
    description:
      'Postura, pisada y actividad diaria acompanadas con tecnologia de uso practico.',
  },
]

function BiohackingSection() {
  return (
    <section className="bg-[#f7fbf4] px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#148a45]">
              Bienestar real
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-[#12351f] sm:text-5xl">
              Biohacking aplicado a habitos simples
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f7165] sm:text-lg sm:leading-8">
              Un enfoque claro para conversar con personas que quieren empezar
              por descanso, agua y movimiento antes de elegir un producto.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {biohackingPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-lg border border-[#dbe6d8] bg-white p-4 shadow-sm"
                >
                  <span className="text-xs font-black text-[#f3b23c]">
                    {pillar.number}
                  </span>
                  <h3 className="mt-3 text-xl font-black text-[#12351f]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f7165]">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>

            <a
              href="/biohacking"
              className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-[#12351f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#148a45] focus:outline-none focus:ring-4 focus:ring-[#badfc6] sm:w-auto"
            >
              Ver mas sobre biohacking
            </a>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-[#dbe6d8] bg-white shadow-xl shadow-green-950/10">
            <img
              src="https://equipobioenergy.com/images/inicio/ventaja-mejora.jpg"
              alt="Rutina de bienestar y biohacking natural"
              className="h-[340px] w-full object-cover sm:h-[460px]"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-md bg-white/95 p-4 shadow-lg backdrop-blur">
              <p className="text-sm font-black uppercase tracking-normal text-[#148a45]">
                Punto de acceso
              </p>
              <p className="mt-1 text-lg font-black leading-6 text-[#12351f]">
                Contenido educativo para transformar interes en asesoramiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BiohackingSection
