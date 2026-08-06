import { buildWhatsAppUrl } from '../../config/contact'

function HeroSection() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[#0b1f17] sm:min-h-[760px] lg:min-h-[calc(100svh-72px)]">
      <img
        src="/images/hero-biohacking-band.png"
        alt="Tecnología FIR Power aplicada al bienestar cotidiano"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/42 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/55" />

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-20 sm:min-h-[760px] sm:px-8 lg:min-h-[calc(100svh-72px)] lg:px-10">
        <div className="max-w-4xl text-white">
          <p className="fx-reveal hidden text-sm font-black uppercase tracking-normal text-white/90 sm:block sm:text-lg">
            Bienestar que se siente, tecnología que se demuestra
          </p>
          <h1 className="fx-reveal fx-reveal-delay-1 text-4xl font-black leading-[1.05] tracking-normal sm:mt-4 sm:text-6xl lg:text-7xl">
            <span>Biohacking, descanso e hidratación</span>
            <span> con tecnología Nipponflex</span>
          </h1>
          <p className="fx-reveal fx-reveal-delay-2 mt-6 max-w-3xl text-base leading-7 text-white/90 sm:text-xl sm:leading-8">
            Te ayudamos a elegir productos con tecnología FIR Power, Ion Ball y
            Magneto según tu rutina, tu descanso y tus objetivos. Usamos el
            biohacking como punto de partida: hábitos simples, agua, descanso y
            bienestar medible en la vida cotidiana.
          </p>

          <div className="fx-reveal fx-reveal-delay-3 mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              href={buildWhatsAppUrl(
                'Hola, quiero solicitar una asesoria gratuita sobre productos Nipponflex.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#148a45] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#0f7338] hover:shadow-xl hover:shadow-black/25 focus:outline-none focus:ring-4 focus:ring-white/30 sm:px-6 sm:py-4 sm:text-base"
            >
              Solicitar Asesoría Gratuita
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center rounded-md border border-white/55 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white hover:bg-white/18 hover:shadow-lg hover:shadow-black/20 focus:outline-none focus:ring-4 focus:ring-white/25 sm:px-6 sm:py-4 sm:text-base"
            >
              Ver productos destacados
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f7fbf4]" />
    </section>
  )
}

export default HeroSection
