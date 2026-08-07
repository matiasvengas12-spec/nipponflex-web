import { useEffect, useRef, useState } from 'react'

const lifestyleCards = [
  {
    title: 'Estrés Moderno',
    image: '/images/home-modern-stress.png',
    alt: 'Persona usando el celular en una ciudad con ondas de estrés moderno',
  },
  {
    title: 'Equilibrio Natural',
    image: '/images/home-natural-balance.png',
    alt: 'Persona meditando en la naturaleza con ondas de equilibrio natural',
  },
]

function LifestyleVisionSection() {
  const visionRef = useRef(null)
  const [isVisionVisible, setIsVisionVisible] = useState(false)

  useEffect(() => {
    const target = visionRef.current
    if (!target) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisionVisible(true)
        observer.disconnect()
      },
      { rootMargin: '0px 0px -18% 0px', threshold: 0.18 },
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#f7fbf4] px-4 pt-14 sm:px-8 sm:pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div
          ref={visionRef}
          className={`fx-scroll-reveal rounded-lg border border-[#c7ab54]/45 bg-[#082218] p-4 shadow-2xl shadow-green-950/15 sm:p-6 lg:p-8 ${isVisionVisible ? 'is-visible' : ''}`}
        >
          <div className="text-center">
            <p className="text-2xl font-black leading-tight text-[#c7ab54] sm:text-4xl">
              Desconexion con la Naturaleza:
            </p>
            <p className="mt-1 text-2xl font-black leading-tight text-white sm:text-4xl">
              El impacto del estilo de vida moderno
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:gap-6">
            {lifestyleCards.map((card, index) => (
              <article
                key={card.title}
                className="fx-scroll-card rounded-lg border border-[#c7ab54]/55 bg-[#0b261c] p-3 shadow-xl shadow-black/20"
                style={{ transitionDelay: `${index * 140}ms` }}
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="aspect-square w-full rounded-md object-cover sm:aspect-[4/3]"
                />
                <h2 className="px-2 py-4 text-center text-2xl font-black leading-tight text-white sm:text-3xl">
                  {card.title}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LifestyleVisionSection
