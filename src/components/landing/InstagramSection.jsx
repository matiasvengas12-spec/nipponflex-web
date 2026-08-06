import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  buildWhatsAppUrl,
} from '../../config/contact'

function InstagramSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="fx-reveal text-sm font-black uppercase tracking-normal text-[#148a45]">
          Contacto directo
        </p>
        <h2 className="fx-reveal fx-reveal-delay-1 mt-3 text-3xl font-black leading-tight text-[#12351f] sm:text-5xl">
          Elegi el producto ideal con asesoramiento personalizado
        </h2>
        <p className="fx-reveal fx-reveal-delay-2 mt-4 text-base leading-7 text-[#5f7165] sm:mt-5 sm:text-lg sm:leading-8">
          Escribinos para recibir una recomendacion segun tu rutina, tus
          objetivos y el tipo de bienestar que queres trabajar.
        </p>

        <div className="fx-reveal fx-reveal-delay-3 mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row">
          <a
            href={buildWhatsAppUrl(
              'Hola, quiero recibir asesoramiento sobre productos Nipponflex.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#148a45] px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0f7338] hover:shadow-lg hover:shadow-green-950/15 focus:outline-none focus:ring-4 focus:ring-[#98d5ad] sm:px-6 sm:py-4 sm:text-base"
          >
            Solicitar asesoramiento
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-[#bdd4ba] bg-white px-5 py-3.5 text-sm font-bold text-[#12351f] transition hover:-translate-y-0.5 hover:border-[#148a45] hover:text-[#148a45] hover:shadow-lg hover:shadow-green-950/10 focus:outline-none focus:ring-4 focus:ring-[#d9ebd6] sm:px-6 sm:py-4 sm:text-base"
          >
            Ver {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramSection
