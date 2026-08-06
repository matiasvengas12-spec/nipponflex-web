import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  buildWhatsAppUrl,
} from '../../config/contact'

function InstagramSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-normal text-[#148a45]">
          Contacto directo
        </p>
        <h2 className="mt-3 text-4xl font-black leading-tight text-[#12351f] sm:text-5xl">
          Elegi el producto ideal con asesoramiento personalizado
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#5f7165]">
          Escribinos para recibir una recomendacion segun tu rutina, tus
          objetivos y el tipo de bienestar que queres trabajar.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={buildWhatsAppUrl(
              'Hola, quiero recibir asesoramiento sobre productos Nipponflex.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#148a45] px-6 py-4 text-base font-bold text-white transition hover:bg-[#0f7338] focus:outline-none focus:ring-4 focus:ring-[#98d5ad]"
          >
            Solicitar asesoramiento
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-[#bdd4ba] bg-white px-6 py-4 text-base font-bold text-[#12351f] transition hover:border-[#148a45] hover:text-[#148a45] focus:outline-none focus:ring-4 focus:ring-[#d9ebd6]"
          >
            Ver {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramSection
