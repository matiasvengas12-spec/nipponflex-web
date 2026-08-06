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
