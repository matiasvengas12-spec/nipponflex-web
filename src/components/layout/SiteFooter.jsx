import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  buildWhatsAppUrl,
} from '../../config/contact'

const footerLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Biohacking', href: '/biohacking' },
  { label: 'Tecnologias', href: '/tecnologias' },
  { label: 'Catalogo', href: '/#catalogo' },
]

function SiteFooter() {
  const whatsappUrl = buildWhatsAppUrl(
    'Hola, quiero recibir asesoramiento sobre productos Nipponflex.',
  )

  return (
    <footer className="bg-[#101c16] px-5 py-14 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
          <div>
            <p className="text-xl font-black">Vida Plena Nipponflex</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#b8c8be]">
              Asesoramiento independiente sobre productos Nipponflex para
              descanso, hidratacion, biohacking y bienestar cotidiano.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
              Navegacion
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#d7e6d8]">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a className="transition hover:text-white" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#d7e6d8]">
              <li>
                <a
                  className="transition hover:text-white"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar asesoria
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-white"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
              Oportunidad
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#b8c8be]">
              Si te interesa recomendar productos de bienestar, tambien podemos
              contarte como funciona la oportunidad comercial.
            </p>
            <a
              href={buildWhatsAppUrl(
                'Hola, quiero informacion sobre la oportunidad comercial Nipponflex.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-md bg-[#f3b23c] px-4 py-3 text-sm font-bold text-[#12351f] transition hover:bg-[#ffca67] focus:outline-none focus:ring-4 focus:ring-[#f8d58b]"
            >
              Quiero informacion
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[#93a79b] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Vida Plena Nipponflex. Todos los derechos reservados.</span>
          <span>Distribuidor independiente Nipponflex</span>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
