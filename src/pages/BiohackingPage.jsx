function BiohackingPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#f7fbf4] px-4 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-black uppercase tracking-normal text-[#c0a35a] sm:text-3xl">
            Biohacking natural
          </p>
          <div className="mt-5 rounded-full border border-[#0b3427] bg-[#064533] p-1.5 shadow-xl shadow-green-950/15">
            <div className="grid grid-cols-4 gap-1">
              {['Descanso', 'Agua', 'Movimiento', 'Entorno'].map((item, index) => (
                <span
                  key={item}
                  className={`min-w-0 rounded-full px-2 py-2 text-xs font-bold transition sm:px-4 sm:text-sm ${
                    index === 0
                      ? 'bg-[#d7bd72] text-[#12351f] shadow-md shadow-black/15'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="fx-card overflow-hidden rounded-lg border border-[#dbe6d8] bg-white shadow-2xl shadow-green-950/10">
            <img
              src="/images/biohacking-access-cards.png"
              alt="Biohacking aplicado a descanso, hidratacion y movimiento"
              className="w-full object-cover"
            />
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
