import { buildWhatsAppUrl } from '../config/contact'

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

const routineSteps = ['Observar rutina', 'Detectar necesidad', 'Recomendar producto']

function BiohackingPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#f7fbf4] px-4 py-12 sm:px-8 sm:py-18 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#148a45]">
              Biohacking natural
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-[#12351f] sm:text-6xl">
              Habitos simples. Mejor lectura del cuerpo.
            </h1>
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

          <div className="overflow-hidden rounded-lg border border-[#dbe6d8] bg-white shadow-xl shadow-green-950/10">
            <img
              src="https://equipobioenergy.com/images/inicio/ventaja-ayuda.jpg"
              alt="Biohacking natural aplicado al bienestar diario"
              className="h-[340px] w-full object-cover sm:h-[480px]"
            />
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
              Metodo de asesoramiento
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              De interes a recomendacion
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {routineSteps.map((step, index) => (
              <div
                key={step}
                className="border border-white/15 bg-white/8 p-4"
              >
                <span className="text-xs font-black text-[#f3b23c]">
                  Paso {index + 1}
                </span>
                <p className="mt-3 text-xl font-black">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-[#dbe6d8] pt-10 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-black text-[#12351f] sm:text-3xl">
            Empezar por una charla breve
          </h2>
          <a
            href={buildWhatsAppUrl(
              'Hola, vengo de la pagina de biohacking y quiero asesoramiento Nipponflex.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md bg-[#148a45] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0f7338] focus:outline-none focus:ring-4 focus:ring-[#98d5ad] sm:w-auto"
          >
            Solicitar asesoria
          </a>
        </div>
      </section>
    </main>
  )
}

export default BiohackingPage
