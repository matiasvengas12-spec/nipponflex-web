import { useState } from 'react'
import { buildWhatsAppUrl } from '../../config/contact'

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Biohacking', href: '/biohacking' },
  { label: 'Tecnologías', href: '/tecnologias' },
  { label: 'Distribuidores', href: '/distribuidores' },
  { label: 'Catálogo', href: '/#catalogo' },
]

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 py-3 px-6 rounded-full border border-white/20 bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 pointer-events-auto transition-all duration-300">
        
        <a href="/" className="min-w-0 text-base font-black tracking-tight text-gray-900 transition hover:opacity-80 sm:text-lg">
          Vidasanasm Nipponflex
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          <nav
            aria-label="Navegación principal"
            className="flex items-center gap-1 whitespace-nowrap bg-white/50 p-1 rounded-full border border-white/40"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-sm font-bold text-gray-600 transition-all hover:bg-white hover:text-gray-900 hover:shadow-sm"
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
            className="ml-2 inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2 text-sm font-bold text-white transition hover:bg-emerald-600 hover:scale-105 hover:shadow-md hover:shadow-emerald-900/20"
          >
            Asesoría
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/50 text-gray-900 transition hover:bg-white focus:outline-none lg:hidden"
        >
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`block h-0.5 w-full rounded-full bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-full rounded-full bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full rounded-full bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        id="mobile-menu"
        className={`fixed left-4 right-4 top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-2xl border border-white/30 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/15 transition-all duration-300 origin-top pointer-events-auto sm:left-6 sm:right-6 lg:hidden ${
          isMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-2 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="p-3 flex flex-col gap-2">
          <nav aria-label="Navegación principal" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base font-bold text-gray-700 transition hover:bg-emerald-50 hover:text-gray-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="h-px w-full bg-gray-200 my-2" />

          <a
            href={buildWhatsAppUrl(
              'Hola, quiero recibir asesoramiento sobre productos Nipponflex.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-base font-bold text-white transition hover:bg-emerald-500 shadow-lg shadow-emerald-900/20"
          >
            Solicitar asesoría
          </a>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
