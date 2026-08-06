import { buildWhatsAppUrl } from '../../config/contact'

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7fbf4]">
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#148a45] via-[#f3b23c] to-[#2b6777]" />
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-[#c8dec4] bg-white px-4 py-2 text-sm font-semibold text-[#38613c] shadow-sm">
            Biohacking, descanso e hidratación con tecnología Nipponflex
          </p>
          <h1 className="text-5xl font-black leading-[0.98] tracking-normal text-[#12351f] sm:text-6xl lg:text-7xl">
            Bienestar que se siente, tecnología que se demuestra
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f6656] sm:text-xl">
            Te ayudamos a elegir productos con tecnología FIR Power, Ion Ball y
            Magneto según tu rutina, tu descanso y tus objetivos. Usamos el
            biohacking como punto de partida: hábitos simples, agua, descanso y
            bienestar medible en la vida cotidiana.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppUrl(
                'Hola, quiero solicitar una asesoria gratuita sobre productos Nipponflex.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#148a45] px-6 py-4 text-base font-bold text-white shadow-lg shadow-green-900/15 transition hover:bg-[#0f7338] focus:outline-none focus:ring-4 focus:ring-[#98d5ad]"
            >
              Solicitar Asesoría Gratuita
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center rounded-md border border-[#bdd4ba] bg-white px-6 py-4 text-base font-bold text-[#12351f] transition hover:border-[#148a45] hover:text-[#148a45] focus:outline-none focus:ring-4 focus:ring-[#d9ebd6]"
            >
              Ver productos destacados
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-2 gap-3 text-left">
            {[
              ['+10', 'países con presencia'],
              ['+80', 'productos Nipponflex'],
            ].map(([value, label]) => (
              <div key={label} className="border-l-2 border-[#f3b23c] pl-4">
                <strong className="block text-2xl font-black text-[#12351f]">
                  {value}
                </strong>
                <span className="text-sm leading-5 text-[#65766b]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-[#dde9d7] bg-white shadow-2xl shadow-green-950/10">
            <img
              src="https://equipobioenergy.com/images/inicio/hero-1.jpeg"
              alt="Productos Nipponflex para bienestar y descanso"
              className="h-[560px] w-full object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-md bg-white/95 p-5 shadow-xl shadow-green-950/15 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-normal text-[#148a45]">
              Diagnóstico inicial
            </p>
            <p className="mt-2 text-lg font-black leading-6 text-[#12351f]">
              Descanso, hidratación o accesorios: elegimos el producto adecuado
              en una conversación.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
