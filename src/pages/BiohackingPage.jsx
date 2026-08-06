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

const routineSteps = [
  {
    title: 'Escucha inicial',
    text: 'Rutina, descanso, hidratacion y objetivo principal.',
  },
  {
    title: 'Lectura del caso',
    text: 'Se ordena la informacion antes de hablar de productos.',
  },
  {
    title: 'Recomendacion clara',
    text: 'Una sugerencia concreta, simple y facil de aplicar.',
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

          <div className="fx-card overflow-hidden rounded-lg border border-white/15 bg-white text-[#12351f] shadow-2xl shadow-black/25">
            <div className="border-b border-[#e1eadf] bg-[#f7fbf4] px-5 py-4 sm:px-6">
              <p className="text-xs font-black uppercase tracking-normal text-[#148a45]">
                Consulta guiada
              </p>
            </div>

            <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_0.95fr] lg:gap-7">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f1e5] text-sm font-black text-[#38613c]">
                    C
                  </div>
                  <div className="rounded-lg rounded-tl-none bg-[#eef5ea] p-4">
                    <p className="text-sm font-black text-[#12351f]">
                      Quiero mejorar mi descanso, pero no se por donde empezar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start justify-end gap-3">
                  <div className="max-w-[82%] rounded-lg rounded-tr-none bg-[#12351f] p-4 text-white">
                    <p className="text-sm font-bold leading-6">
                      Primero vemos tu rutina. Despues elegimos una opcion que
                      tenga sentido para vos.
                    </p>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3b23c] text-sm font-black text-[#12351f]">
                    A
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-[#dbe6d8] bg-white p-4">
                  <span className="h-2 w-2 rounded-full bg-[#148a45]" />
                  <p className="text-sm font-bold text-[#5f7165]">
                    Resultado: menos vueltas, mas claridad y mejor consulta.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {routineSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="grid grid-cols-[38px_1fr] gap-3 rounded-lg border border-[#dbe6d8] bg-[#fbfdf9] p-4"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#f3b23c] text-sm font-black text-[#12351f]">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-base font-black text-[#12351f]">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#5f7165]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BiohackingPage
