import { useState } from 'react'
import { buildWhatsAppUrl } from '../../config/contact'

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Biohacking', href: '/biohacking' },
  { label: 'Tecnologias', href: '/tecnologias' },
  { label: 'Distribuidores', href: '/distribuidores' },
  { label: 'Catalogo', href: '/#catalogo' },
]

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#dbe6d8] bg-white/95 px-4 backdrop-blur sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 py-3 lg:min-h-16">
        <a href="/" className="text-base font-black text-[#12351f] sm:text-lg">
          Nippon Flex Vida Plena
        </a>

        <div className="hidden items-center gap-3 lg:flex">
          <nav
            aria-label="Navegacion principal"
            className="flex items-center gap-1 whitespace-nowrap"
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
            className="inline-flex items-center justify-center rounded-md bg-[#148a45] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0f7338] focus:outline-none focus:ring-4 focus:ring-[#98d5ad]"
          >
            Solicitar asesoria
          </a>
        </div>

        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#dbe6d8] text-[#12351f] transition hover:bg-[#edf7e9] focus:outline-none focus:ring-4 focus:ring-[#d9ebd6] lg:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-full rounded-full bg-[#12351f]" />
            <span className="block h-0.5 w-full rounded-full bg-[#12351f]" />
            <span className="block h-0.5 w-full rounded-full bg-[#12351f]" />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${isMenuOpen ? 'block' : 'hidden'} mx-auto max-w-7xl border-t border-[#edf2ea] pb-3 lg:hidden`}
      >
        <nav aria-label="Navegacion principal" className="flex flex-col py-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-sm font-bold text-[#4f6656] transition hover:bg-[#edf7e9] hover:text-[#148a45] focus:outline-none focus:ring-4 focus:ring-[#d9ebd6]"
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
          onClick={closeMenu}
          className="flex items-center justify-center rounded-md bg-[#148a45] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0f7338] focus:outline-none focus:ring-4 focus:ring-[#98d5ad]"
        >
          Solicitar asesoria
        </a>
      </div>
    </header>
  )
}

export default SiteHeader
