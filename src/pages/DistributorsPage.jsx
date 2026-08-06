import { buildWhatsAppUrl } from '../config/contact'

const opportunityHighlights = [
  {
    label: 'Productos con historia',
    text: 'Descanso, hidratacion y bienestar tecnologico para conversar con clientes reales.',
  },
  {
    label: 'Acompanamiento inicial',
    text: 'Te guiamos con argumentos claros, materiales y una forma simple de empezar.',
  },
  {
    label: 'Venta consultiva',
    text: 'No se trata de empujar productos: se trata de entender necesidades y recomendar bien.',
  },
]

const starterSteps = [
  'Nos escribis y coordinamos una primera charla.',
  'Te contamos como funciona la oportunidad comercial.',
  'Definimos un camino de inicio segun tu perfil y tu red.',
]

function DistributorsPage() {
  return (
    <main className="bg-[#07111e] text-white">
      <section className="relative isolate min-h-[calc(100svh-64px)] overflow-hidden px-4 py-12 sm:px-8 lg:px-10">
        <img
          src="/images/distributors-hero-mountain-lake.png"
          alt="Paisaje de lago y montanas al amanecer para oportunidad de negocio Nipponflex"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#050914]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050914]/70 via-[#050914]/20 to-[#050914]/82" />
        <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-[#050914] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-160px)] max-w-6xl flex-col items-center justify-center text-center">
          <div className="mb-14 flex flex-col items-center gap-3 sm:mb-18">
            <img
              src="/favicon.svg"
              alt=""
              className="h-14 w-14 drop-shadow-[0_0_24px_rgba(215,189,114,0.65)] sm:h-18 sm:w-18"
            />
            <p className="text-2xl font-medium tracking-normal text-white sm:text-4xl">
              Nippon<span className="font-black text-[#d7bd72]">flex</span>
            </p>
          </div>

          <p className="text-sm font-black uppercase tracking-normal text-[#d7bd72] sm:text-base">
            Oportunidad para distribuidores
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.96] tracking-normal text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)] sm:text-7xl lg:text-8xl">
            Oportunidad de Negocio: Vida Plena Nipponflex
          </h1>
          <p className="mt-8 max-w-3xl text-2xl leading-tight text-white drop-shadow-[0_5px_14px_rgba(0,0,0,0.55)] sm:text-4xl">
            Unite a la revolucion del bienestar tecnologico
          </p>

          <div className="mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={buildWhatsAppUrl(
                'Hola, quiero informacion para comenzar a vender Nipponflex.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#d7bd72] px-6 py-4 text-sm font-black uppercase tracking-normal text-[#07111e] shadow-2xl shadow-black/35 transition hover:-translate-y-0.5 hover:bg-[#f1d686] focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Quiero empezar
            </a>
            <a
              href="#como-empezar"
              className="inline-flex items-center justify-center rounded-md border border-white/55 bg-white/10 px-6 py-4 text-sm font-black uppercase tracking-normal text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18 focus:outline-none focus:ring-4 focus:ring-white/25"
            >
              Ver como funciona
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf4] px-4 py-14 text-[#12351f] sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-normal text-[#c7ab54]">
              Empeza con una propuesta clara
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Bienestar que podes recomendar con criterio
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5f7165] sm:text-lg sm:leading-8">
              La oportunidad esta pensada para personas que quieren vender
              productos de bienestar con una conversacion seria: escuchar,
              orientar y acompanar decisiones de compra.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {opportunityHighlights.map((item) => (
              <article
                key={item.label}
                className="rounded-lg border border-[#dbe6d8] bg-white p-5 shadow-xl shadow-green-950/5"
              >
                <h3 className="text-xl font-black leading-tight">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5f7165]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="como-empezar"
        className="bg-[#101c16] px-4 py-14 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#d7bd72]">
              Como comenzar
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Primer paso: una charla simple
            </h2>
            <p className="mt-5 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Si te interesa generar ingresos recomendando Nipponflex, te
              contamos el modelo, los productos principales y la forma de
              iniciar sin complicarte.
            </p>
          </div>

          <div className="grid gap-3">
            {starterSteps.map((step, index) => (
              <article
                key={step}
                className="grid grid-cols-[52px_1fr] items-center gap-4 rounded-lg border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/15"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#d7bd72] text-sm font-black text-[#07111e]">
                  0{index + 1}
                </span>
                <p className="text-sm font-bold leading-6 text-white/84 sm:text-base">
                  {step}
                </p>
              </article>
            ))}

            <a
              href={buildWhatsAppUrl(
                'Hola, quiero agendar una charla para ser distribuidor Nipponflex.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-md bg-[#148a45] px-5 py-4 text-sm font-black uppercase tracking-normal text-white transition hover:-translate-y-0.5 hover:bg-[#0f7338] focus:outline-none focus:ring-4 focus:ring-[#98d5ad]"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DistributorsPage
