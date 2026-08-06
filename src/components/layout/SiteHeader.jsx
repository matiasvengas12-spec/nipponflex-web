import { buildWhatsAppUrl } from '../../config/contact'

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Biohacking', href: '/biohacking' },
  { label: 'Tecnologias', href: '/tecnologias' },
  { label: 'Catalogo', href: '/#catalogo' },
]

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#dbe6d8] bg-white/95 px-4 backdrop-blur sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-3 py-3 lg:flex lg:min-h-16 lg:flex-wrap lg:justify-between">
        <a href="/" className="text-base font-black text-[#12351f] sm:text-lg">
          Vida Plena Nipponflex
        </a>

        <nav
          aria-label="Navegacion principal"
          className="col-span-2 -mx-1 flex items-center gap-1 overflow-x-auto whitespace-nowrap pb-1 lg:col-auto lg:mx-0 lg:overflow-visible lg:pb-0"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-bold text-[#4f6656] transition hover:bg-[#edf7e9] hover:text-[#148a45] focus:outline-none focus:ring-4 focus:ring-[#d9ebd6]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppUrl(
            'Hola, quiero recibir asesoramiento sobre productos Nipponflex.',
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center justify-center rounded-md bg-[#148a45] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0f7338] focus:outline-none focus:ring-4 focus:ring-[#98d5ad] md:inline-flex"
        >
          Solicitar asesoria
        </a>
      </div>
    </header>
  )
}

export default SiteHeader
