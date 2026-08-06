import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  buildWhatsAppUrl,
} from '../../config/contact'

const contactChannels = [
  {
    title: 'Asesoramiento por WhatsApp',
    description:
      'Para consultas directas, recomendacion de productos y coordinacion de una asesoria personalizada.',
    action: 'Escribir por WhatsApp',
    href: buildWhatsAppUrl(
      'Hola, quiero recibir asesoramiento sobre productos Nipponflex.',
    ),
    external: true,
  },
  {
    title: `Instagram ${INSTAGRAM_HANDLE}`,
    description:
      'Canal de contenido, novedades, testimonios y material educativo sobre biohacking y bienestar diario.',
    action: 'Ver perfil',
    href: INSTAGRAM_URL,
    external: true,
  },
]

function InstagramSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-t border-[#dbe6d8] pt-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#148a45]">
              Contacto
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#12351f] sm:text-5xl">
              Hablemos por el canal que te resulte mas comodo
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5f7165]">
              La recomendacion no sale de un formulario generico: primero
              entendemos el objetivo, la rutina y el interes de cada persona.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {contactChannels.map((channel) => (
              <article
                key={channel.title}
                className="flex min-h-64 flex-col justify-between rounded-lg border border-[#dbe6d8] bg-[#f7fbf4] p-6"
              >
                <div>
                  <h3 className="text-2xl font-black text-[#12351f]">
                    {channel.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#5f7165]">
                    {channel.description}
                  </p>
                </div>
                <a
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-[#12351f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#148a45] focus:outline-none focus:ring-4 focus:ring-[#badfc6]"
                >
                  {channel.action}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstagramSection
