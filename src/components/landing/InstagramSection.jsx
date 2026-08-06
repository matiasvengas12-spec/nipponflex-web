import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../../config/contact'

function InstagramSection() {
  return (
    <section className="bg-[#f7fbf4] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-8 border-y border-[#dbe6d8] py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-[#2b6777]">
            Comunidad activa
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-[#12351f] sm:text-5xl">
            Seguinos en Instagram para ver productos, rutinas y novedades
          </h2>
        </div>

        <div className="rounded-lg border border-[#dbe6d8] bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-black text-[#12351f]">
                {INSTAGRAM_HANDLE}
              </p>
              <p className="mt-2 max-w-xl text-base leading-7 text-[#5f7165]">
                Este va a ser el canal de referencia para mostrar contenido,
                generar confianza y levantar nuevos clientes interesados en
                bienestar Nipponflex.
              </p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#2b6777] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#225261] focus:outline-none focus:ring-4 focus:ring-[#b9d9df]"
            >
              Ver Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstagramSection
