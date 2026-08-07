import { buildWhatsAppUrl } from '../config/contact'

const technologies = [
  {
    number: '01',
    title: 'Campos Magneticos: Conexion con la Tierra',
    image: '/images/technology-magnetic-fields.png',
    summary: 'Reduce el estres oxidativo y mejora la circulacion.',
    benefits: 'Sueno profundo, menor fatiga.',
    tags: ['Descarga a tierra', 'Circulacion mejorada'],
  },
  {
    number: '02',
    title: 'FIR Power: El calor que revitaliza',
    image: '/images/technology-fir-power.png',
    summary: 'Bioceramica patentada que refleja el calor corporal.',
    benefits: 'Alivio del dolor, recuperacion muscular.',
    tags: ['Patente mundial', 'Oxido nitrico'],
  },
  {
    number: '03',
    title: 'Ion Balls: El poder de los iones negativos',
    image: '/images/technology-ion-balls.png',
    summary: 'Tecnologia mineral inspirada en la naturaleza para purificar.',
    benefits: 'Aire puro, ambiente saludable.',
    tags: ['Aire purificado', 'Combate smog'],
  },
]

const mfpTags = ['Sinergia total', 'Bienestar integral', 'Tecnologia insignia']

function TechnologiesPage() {
  return (
    <main className="overflow-hidden bg-[#050b2a] text-white">
      <section className="relative isolate px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_14%,rgba(93,120,220,0.34),transparent_28%),radial-gradient(circle_at_82%_82%,rgba(195,72,180,0.32),transparent_30%),linear-gradient(145deg,#07113a_0%,#050922_46%,#07132f_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:100%_70px]" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black uppercase leading-tight tracking-normal text-white sm:text-6xl">
              Tecnologias Nipponflex
            </h1>
            <p className="mt-4 text-base leading-7 text-white/82 sm:text-xl">
              Descubri el poder de nuestras innovaciones cientificas para el
              bienestar.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {technologies.map((tech) => (
              <article
                key={tech.number}
                className="fx-card rounded-lg border border-[#7f8cff]/70 bg-white/[0.06] p-4 shadow-2xl shadow-black/25 ring-1 ring-[#d067ff]/25 backdrop-blur sm:p-6"
              >
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="aspect-[4/3] w-full rounded-md object-cover"
                />
                <span className="mt-5 block text-4xl font-black leading-none text-[#a993ff] sm:text-5xl">
                  {tech.number}
                </span>
                <h2 className="mt-3 text-2xl font-black leading-tight text-white">
                  {tech.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/84">
                  {tech.summary}
                </p>
                <p className="mt-4 text-sm leading-6 text-white/84">
                  <strong className="text-white">Beneficios:</strong>{' '}
                  {tech.benefits}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tech.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/28 bg-white/[0.04] px-2 py-1 text-xs font-medium leading-5 text-white/88"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <article className="fx-card mt-8 rounded-lg border border-[#638cff]/80 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 ring-1 ring-[#d067ff]/25 backdrop-blur sm:p-8 lg:mt-10 lg:grid lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-10">
            <div className="overflow-hidden rounded-md bg-[#080d24]/70">
              <img
                src="/images/technology-mfp-magnets.png"
                alt="Magnetic FIR Power como sinergia de tecnologias Nipponflex"
                className="w-full object-contain"
              />
            </div>

            <div className="mt-8 lg:mt-0">
              <span className="block text-6xl font-black leading-none text-[#a993ff] sm:text-7xl">
                04
              </span>
              <h2 className="mt-6 max-w-2xl text-3xl font-black leading-tight text-white sm:text-5xl">
                Magnetic FIR Power (MFP): La sinergia definitiva
              </h2>
              <p className="mt-7 text-sm font-black uppercase tracking-normal text-white">
                Fusion magnetica y FIR
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/84 sm:text-base sm:leading-7">
                Nuestra tecnologia insignia fusiona los beneficios del
                magnetismo con la potencia del FIR Power para una experiencia
                de bienestar integral y profunda.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/84">
                <strong className="text-white">Beneficios:</strong> Equilibrio
                total, energia sostenida.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {mfpTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/28 bg-white/[0.04] px-2 py-1 text-xs font-medium leading-5 text-white/88"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#catalogo"
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-black text-[#050b2a] transition hover:-translate-y-0.5 hover:bg-[#eef2ff] focus:outline-none focus:ring-4 focus:ring-white/25"
                >
                  Ver productos destacados
                </a>
                <a
                  href={buildWhatsAppUrl(
                    'Hola, quiero recibir asesoria sobre tecnologias Nipponflex.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-white/60 bg-white/[0.04] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/12 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  Solicitar asesoria
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

export default TechnologiesPage
