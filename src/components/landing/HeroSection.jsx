import { buildWhatsAppUrl } from '../../config/contact'

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7fbf4]">
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#148a45] via-[#f3b23c] to-[#2b6777]" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-8 sm:py-16 lg:min-h-[680px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="fx-reveal mb-4 inline-flex rounded-full border border-[#c8dec4] bg-white px-3 py-2 text-xs font-semibold leading-5 text-[#38613c] shadow-sm sm:px-4 sm:text-sm">
            <span>Biohacking, descanso e hidratación</span>
            <span className="ml-1 hidden sm:inline"> con tecnología Nipponflex</span>
          </p>
          <h1 className="fx-reveal fx-reveal-delay-1 text-4xl font-black leading-[1.02] tracking-normal text-[#12351f] sm:text-6xl lg:text-7xl">
            Bienestar que se siente, tecnología que se demuestra
          </h1>
          <p className="fx-reveal fx-reveal-delay-2 mt-5 max-w-2xl text-base leading-7 text-[#4f6656] sm:text-xl sm:leading-8">
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
              className="inline-flex items-center justify-center rounded-md bg-[#148a45] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-[#0f7338] hover:shadow-xl hover:shadow-green-900/20 focus:outline-none focus:ring-4 focus:ring-[#98d5ad] sm:px-6 sm:py-4 sm:text-base"
            >
              Solicitar Asesoría Gratuita
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center rounded-md border border-[#bdd4ba] bg-white px-5 py-3.5 text-sm font-bold text-[#12351f] transition hover:-translate-y-0.5 hover:border-[#148a45] hover:text-[#148a45] hover:shadow-lg hover:shadow-green-950/10 focus:outline-none focus:ring-4 focus:ring-[#d9ebd6] sm:px-6 sm:py-4 sm:text-base"
            >
              Ver productos destacados
            </a>
          </div>

          <div className="fx-reveal fx-reveal-delay-3 mt-8 grid max-w-md grid-cols-2 gap-3 text-left sm:mt-10">
            {[
              ['+10', 'países con presencia'],
              ['+80', 'productos Nipponflex'],
            ].map(([value, label]) => (
              <div key={label} className="border-l-2 border-[#f3b23c] pl-4">
                <strong className="block text-xl font-black text-[#12351f] sm:text-2xl">
                  {value}
                </strong>
                <span className="text-sm leading-5 text-[#65766b]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fx-reveal fx-reveal-delay-2 fx-soft-float relative">
          <div className="fx-hero-frame overflow-hidden rounded-lg border border-[#dde9d7] bg-white shadow-2xl shadow-green-950/10">
            <img
              src="https://equipobioenergy.com/images/inicio/hero-1.jpeg"
              alt="Productos Nipponflex para bienestar y descanso"
              className="h-[320px] w-full object-cover sm:h-[460px] lg:h-[560px]"
            />
          </div>
          <div className="mt-3 rounded-md bg-white/95 p-4 shadow-xl shadow-green-950/15 backdrop-blur sm:absolute sm:bottom-5 sm:left-5 sm:right-5 sm:mt-0 sm:p-5">
            <p className="text-sm font-bold uppercase tracking-normal text-[#148a45]">
              Diagnóstico inicial
            </p>
            <p className="mt-2 text-base font-black leading-6 text-[#12351f] sm:text-lg">
              Descanso, hidratación o accesorios: elegimos el producto adecuado
              en una conversación.
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/70" />
      <div className="relative z-10 mx-auto -mt-5 max-w-7xl px-4 pb-7 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-lg border border-[#dbe6d8] bg-white/95 shadow-xl shadow-green-950/10 backdrop-blur">
          <div className="fx-bridge-track flex w-max items-center gap-3 px-4 py-3">
            {[
              'Descanso',
              'Hidratacion',
              'Movimiento',
              'Biohacking',
              'Asesoria',
              'Descanso',
              'Hidratacion',
              'Movimiento',
              'Biohacking',
              'Asesoria',
            ].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-[#dbe6d8] bg-[#f7fbf4] px-4 py-2 text-xs font-black uppercase tracking-normal text-[#38613c]"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-[#f3b23c]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
