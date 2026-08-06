import { buildWhatsAppUrl } from '../../config/contact'

const biohackingPillars = [
  {
    title: 'Descanso',
    description:
      'Optimizar el sueño y la recuperación diaria con hábitos simples y productos orientados al confort.',
  },
  {
    title: 'Hidratación',
    description:
      'Mejorar la calidad del agua que consumís todos los días como primer paso de una rutina más consciente.',
  },
  {
    title: 'Movimiento',
    description:
      'Acompañar postura, pisada y actividad cotidiana con accesorios pensados para el uso diario.',
  },
]

function BiohackingSection() {
  return (
    <section className="bg-[#12351f] px-5 py-20 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
              Biohacking natural
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Una puerta de entrada para mejorar hábitos y elegir mejor
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[#d7e6d8]">
              Hablamos de biohacking como pequeñas decisiones para cuidar el
              cuerpo todos los días: descansar mejor, tomar mejor agua, moverse
              con más conciencia y observar qué rutinas te hacen bien.
              Nipponflex entra ahí como tecnología de bienestar aplicada a la
              vida cotidiana.
            </p>
            <a
              href={buildWhatsAppUrl(
                'Hola, quiero saber como empezar con biohacking y productos Nipponflex.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-[#f3b23c] px-5 py-3 text-sm font-bold text-[#12351f] transition hover:bg-[#ffca67] focus:outline-none focus:ring-4 focus:ring-[#f8d58b]"
            >
              Consultar por biohacking
            </a>
          </div>
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
