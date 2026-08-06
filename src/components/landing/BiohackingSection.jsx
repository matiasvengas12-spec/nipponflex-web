import { useEffect, useState } from 'react'

const biohackingPillars = [
  {
    number: '01',
    title: 'Descanso',
    description:
      'Rutinas y productos orientados a mejorar la experiencia de recuperacion diaria.',
    accent: 'Recuperacion',
    image: 'https://equipobioenergy.com/images/productos/almh1-1.png',
  },
  {
    number: '02',
    title: 'Hidratacion',
    description:
      'Agua como punto de entrada simple para empezar a cuidar el bienestar cotidiano.',
    accent: 'Agua',
    image: 'https://equipobioenergy.com/images/productos/jam3l-1.jpg',
  },
  {
    number: '03',
    title: 'Movimiento',
    description:
      'Postura, pisada y actividad diaria acompanadas con tecnologia de uso practico.',
    accent: 'Postura',
    image: 'https://equipobioenergy.com/images/productos/pinsole-1.jpg',
  },
]

const biohackingSlides = [
  {
    image: '/images/biohacking-home-slide-tech.png',
    alt: 'Mapa corporal con ejes de descanso inteligente, hidratacion celular y movimiento',
  },
  {
    image: '/images/biohacking-home-slide-lifestyle.png',
    alt: 'Rutina cotidiana de hidratacion y descanso como entrada al biohacking',
  },
]

function BiohackingSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % biohackingSlides.length)
    }, 4200)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      id="biohacking"
      className="bg-[#f7fbf4] px-4 py-14 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="fx-reveal text-sm font-black uppercase tracking-normal text-[#148a45]">
              Bienestar real
            </p>
            <h2 className="fx-reveal fx-reveal-delay-1 mt-3 max-w-3xl text-3xl font-black leading-tight text-[#12351f] sm:text-5xl">
              Biohacking aplicado a habitos simples
            </h2>
            <p className="fx-reveal fx-reveal-delay-2 mt-4 max-w-2xl text-base leading-7 text-[#5f7165] sm:text-lg sm:leading-8">
              Un enfoque claro para conversar con personas que quieren empezar
              por descanso, hidratacion y movimiento antes de elegir un
              producto.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {biohackingPillars.map((pillar) => (
                <a
                  key={pillar.title}
                  href="/biohacking"
                  className="fx-card group relative flex min-h-72 flex-col overflow-hidden rounded-lg border border-[#dbe6d8] bg-white no-underline shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b8d1b5] hover:shadow-2xl hover:shadow-green-950/10 focus:-translate-y-1 focus:border-[#b8d1b5] focus:outline-none focus:ring-4 focus:ring-[#d9ebd6]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#148a45] via-[#f3b23c] to-[#2b6777]" />

                  <div className="relative h-36 overflow-hidden bg-[#eef5ea]">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="fx-card-media h-full w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-black text-[#12351f] shadow-lg shadow-green-950/15">
                      {pillar.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mt-4 text-2xl font-black text-[#12351f]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5f7165]">
                      {pillar.description}
                    </p>

                    <div className="mt-auto flex items-center gap-3 pt-6">
                      <span className="whitespace-nowrap rounded-full border border-[#dbe6d8] bg-[#f7fbf4] px-3 py-1 text-xs font-black text-[#38613c]">
                        {pillar.accent}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="/biohacking"
              className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-[#12351f] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#148a45] hover:shadow-lg hover:shadow-green-950/15 focus:outline-none focus:ring-4 focus:ring-[#badfc6] sm:w-auto"
            >
              Ver mas sobre biohacking
            </a>
          </div>

          <div className="fx-reveal fx-reveal-delay-2 fx-card relative overflow-hidden rounded-lg border border-[#dbe6d8] bg-white shadow-xl shadow-green-950/10">
            <div className="relative h-[340px] bg-[#f7fbf4] sm:h-[460px]">
              {biohackingSlides.map((slide, index) => (
                <img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-contain p-3 transition duration-700 sm:p-5 ${
                    activeSlide === index
                      ? 'opacity-100'
                      : 'pointer-events-none opacity-0'
                  }`}
                />
              ))}
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {biohackingSlides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  aria-label={`Ver imagen ${index + 1} del carrusel`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition focus:outline-none focus:ring-2 focus:ring-[#148a45] focus:ring-offset-2 ${
                    activeSlide === index
                      ? 'w-8 bg-[#148a45]'
                      : 'w-2.5 bg-[#9ab49b]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BiohackingSection
