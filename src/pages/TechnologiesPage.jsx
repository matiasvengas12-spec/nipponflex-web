import { useEffect } from 'react'
import { buildWhatsAppUrl } from '../config/contact'

const technologies = [
  {
    number: '01',
    name: 'Campos Magneticos',
    headline: 'Conexion con la Tierra.',
    image: '/images/technology-magnetic-fields.png',
    summary:
      'Una tecnologia pensada para acompanar equilibrio, circulacion y descanso profundo desde el contacto cotidiano.',
    benefits: 'Sueno profundo, menor fatiga.',
    tags: ['Descarga a tierra', 'Circulacion mejorada'],
  },
  {
    number: '02',
    name: 'FIR Power',
    headline: 'El calor que revitaliza.',
    image: '/images/technology-fir-power.png',
    summary:
      'Bioceramica que trabaja con el calor corporal para una sensacion de confort mas profunda y sostenida.',
    benefits: 'Alivio del dolor, recuperacion muscular.',
    tags: ['Patente mundial', 'Oxido nitrico'],
  },
  {
    number: '03',
    name: 'Ion Balls',
    headline: 'Iones negativos para tu entorno.',
    image: '/images/technology-ion-balls.png',
    summary:
      'Tecnologia mineral inspirada en la naturaleza para hablar de aire, ambiente y bienestar diario.',
    benefits: 'Aire puro, ambiente saludable.',
    tags: ['Aire purificado', 'Combate smog'],
  },
]

const mfpTags = ['Sinergia total', 'Bienestar integral', 'Tecnologia insignia']

function TechnologiesPage() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-tech-reveal]')
    if (!items.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -16% 0px', threshold: 0.2 },
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      <section className="px-4 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-black uppercase tracking-normal text-[#6e6e73]">
              Tecnologias Nipponflex
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[0.98] tracking-normal sm:text-7xl lg:text-8xl">
              Innovacion que se siente en la rutina.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-[#6e6e73] sm:text-2xl sm:leading-9">
              Magnetismo, FIR Power e iones negativos se combinan para convertir
              descanso, agua y ambiente en una experiencia de bienestar mas
              clara, simple y cotidiana.
            </p>
          </div>

          <div
            data-tech-reveal
            className="fx-apple-reveal mt-12 rounded-[28px] bg-white p-4 shadow-2xl shadow-black/8 sm:p-8 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10"
          >
            <div className="overflow-hidden rounded-[22px] bg-[#090f18]">
              <img
                src="/images/technology-mfp-magnets.png"
                alt="Imanes y ondas de Magnetic FIR Power"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
              />
            </div>

            <div className="px-1 py-8 sm:px-2 lg:py-0">
              <p className="text-sm font-black uppercase tracking-normal text-[#148a45]">
                Tecnologia insignia
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                Magnetic FIR Power.
              </h2>
              <p className="mt-4 text-base font-medium leading-7 text-[#6e6e73] sm:text-lg sm:leading-8">
                La sinergia central de Nipponflex: magnetismo y FIR Power en una
                lectura mas elegante, visual y facil de explicar.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#catalogo"
                  className="inline-flex items-center justify-center rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-4 focus:ring-black/15"
                >
                  Ver productos
                </a>
                <a
                  href={buildWhatsAppUrl(
                    'Hola, quiero recibir asesoria sobre tecnologias Nipponflex.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#1d1d1f]/20 bg-white px-6 py-3 text-sm font-black text-[#1d1d1f] transition hover:-translate-y-0.5 hover:border-[#1d1d1f]/45 focus:outline-none focus:ring-4 focus:ring-black/10"
                >
                  Solicitar asesoria
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {technologies.map((tech) => (
              <article
                key={tech.number}
                data-tech-reveal
                className="fx-apple-reveal rounded-[24px] bg-white p-4 shadow-xl shadow-black/6 sm:p-5"
              >
                <img
                  src={tech.image}
                  alt={`${tech.name}: ${tech.headline}`}
                  className="aspect-[4/3] w-full rounded-[18px] object-cover"
                />
                <div className="px-1 pt-5">
                  <span className="text-sm font-black text-[#86868b]">
                    {tech.number}
                  </span>
                  <h2 className="mt-2 text-2xl font-black leading-tight">
                    {tech.name}
                  </h2>
                  <p className="mt-1 text-xl font-black leading-tight text-[#148a45]">
                    {tech.headline}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-4 py-14 text-white sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <p className="text-sm font-black uppercase tracking-normal text-[#8fd7a7]">
              Get to know wellness tech
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              Tres tecnologias. Una experiencia mas simple.
            </h2>
            <p className="mt-5 text-base font-medium leading-7 text-white/68 sm:text-lg sm:leading-8">
              En lugar de mostrar todo como una lamina, cada tecnologia aparece
              como una escena: imagen, beneficio y una explicacion clara para
              vender mejor.
            </p>
          </div>

          <div className="grid gap-5">
            {technologies.map((tech) => (
              <article
                key={tech.name}
                data-tech-reveal
                className="fx-apple-reveal overflow-hidden rounded-[28px] bg-[#161617] shadow-2xl shadow-black/30 lg:grid lg:grid-cols-[0.92fr_1fr] lg:items-stretch"
              >
                <img
                  src={tech.image}
                  alt={`${tech.name} aplicada al bienestar`}
                  className="h-full min-h-[280px] w-full object-cover"
                />
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <span className="text-5xl font-black leading-none text-[#8fd7a7] sm:text-6xl">
                    {tech.number}
                  </span>
                  <h3 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
                    {tech.name}
                  </h3>
                  <p className="mt-2 text-2xl font-black leading-tight text-white">
                    {tech.headline}
                  </p>
                  <p className="mt-5 text-base leading-7 text-white/72">
                    {tech.summary}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-white/72">
                    <strong className="text-white">Beneficios:</strong>{' '}
                    {tech.benefits}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tech.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/14 bg-white/[0.06] px-3 py-1 text-xs font-bold text-white/82"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div
          data-tech-reveal
          className="fx-apple-reveal mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-2xl shadow-black/8 lg:grid lg:grid-cols-[1fr_0.95fr] lg:items-center"
        >
          <div className="p-6 sm:p-10 lg:p-14">
            <span className="text-6xl font-black leading-none text-[#148a45] sm:text-8xl">
              04
            </span>
            <h2 className="mt-6 max-w-2xl text-4xl font-black leading-tight sm:text-6xl">
              Magnetic FIR Power (MFP).
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-[#6e6e73]">
              Nuestra tecnologia insignia fusiona los beneficios del magnetismo
              con la potencia del FIR Power para una experiencia de bienestar
              integral y profunda.
            </p>
            <p className="mt-5 text-base leading-7 text-[#6e6e73]">
              <strong className="text-[#1d1d1f]">Beneficios:</strong>{' '}
              Equilibrio total, energia sostenida.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {mfpTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-black text-[#1d1d1f]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#090f18] p-4 sm:p-8">
            <img
              src="/images/technology-mfp-magnets.png"
              alt="Imanes y ondas Magnetic FIR Power"
              className="aspect-square w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default TechnologiesPage
