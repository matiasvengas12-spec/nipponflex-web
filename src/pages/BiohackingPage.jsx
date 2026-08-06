const accessPoints = [
  {
    label: '01',
    title: 'Dormir mejor',
    text: 'Descanso, recuperacion y confort como primer indicador de bienestar cotidiano.',
  },
  {
    label: '02',
    title: 'Tomar mejor agua',
    text: 'Hidratacion como habito simple para iniciar una conversacion de valor.',
  },
  {
    label: '03',
    title: 'Moverse con conciencia',
    text: 'Postura, pisada y rutina diaria vistas desde una mirada mas practica.',
  },
]

const routineSteps = ['Escuchamos tu rutina', 'Entendemos el objetivo', 'Sugerimos un camino']

function BiohackingPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#f7fbf4] px-4 py-12 sm:px-8 sm:py-18 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-normal text-[#148a45]">
            Biohacking natural
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {['Descanso', 'Agua', 'Movimiento', 'Entorno'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#c8dec4] bg-white px-4 py-2 text-sm font-bold text-[#38613c]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-3">
            {accessPoints.map((point) => (
              <article
                key={point.title}
                className="border-t-4 border-[#f3b23c] bg-[#f7fbf4] p-5 sm:p-6"
              >
                <span className="text-sm font-black text-[#148a45]">
                  {point.label}
                </span>
                <h2 className="mt-4 text-2xl font-black text-[#12351f]">
                  {point.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#5f7165] sm:text-base sm:leading-7">
                  {point.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#12351f] px-4 py-14 text-white sm:px-8 sm:py-18 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="rounded-lg border border-white/15 bg-white/8 p-5 sm:p-6">
            <p className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
              Asesoramiento simple
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Primero hablamos. Despues recomendamos.
            </h2>
            <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <div className="rounded-lg bg-white p-4 text-[#12351f]">
                <div className="mx-auto h-12 w-12 rounded-full bg-[#d7e6d8]" />
                <p className="mt-3 text-center text-sm font-black">Cliente</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-[#f3b23c]">
                <span className="h-px w-8 bg-current" />
                <span className="text-lg font-black">-&gt;</span>
                <span className="h-px w-8 bg-current" />
              </div>
              <div className="rounded-lg bg-white p-4 text-[#12351f]">
                <div className="mx-auto h-12 w-12 rounded-full bg-[#f3b23c]" />
                <p className="mt-3 text-center text-sm font-black">Asesor</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {routineSteps.map((step, index) => (
              <div
                key={step}
                className="grid grid-cols-[44px_1fr] items-center gap-4 border border-white/15 bg-white/8 p-4"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f3b23c] text-sm font-black text-[#12351f]">
                  {index + 1}
                </span>
                <div>
                  <p className="text-xl font-black">{step}</p>
                  {index < routineSteps.length - 1 && (
                    <p className="mt-1 text-sm font-bold text-[#d7e6d8]">
                      Luego avanzamos al siguiente paso.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default BiohackingPage
