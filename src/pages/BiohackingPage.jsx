import { buildWhatsAppUrl } from '../config/contact'

const habitCards = [
  {
    title: 'Reconectar con la naturaleza',
    text: 'Menos encierro, mas contacto con rutinas simples: descanso, luz, movimiento y agua de mejor calidad.',
  },
  {
    title: 'Cuidar el descanso',
    text: 'El descanso es una de las primeras areas donde una persona nota si su rutina la esta ayudando o agotando.',
  },
  {
    title: 'Pensar el agua diaria',
    text: 'La hidratacion puede ser una puerta de entrada muy concreta para empezar a hablar de bienestar.',
  },
  {
    title: 'Reducir sobrecarga',
    text: 'Pantallas, estres y sedentarismo hacen que muchas personas busquen herramientas practicas para equilibrarse.',
  },
]

function BiohackingPage() {
  return (
    <main className="bg-[#f7fbf4]">
      <section className="px-4 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-normal text-[#148a45]">
            Biohacking natural
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-[#12351f] sm:text-6xl">
            Pequenos ajustes diarios para volver a sentir bienestar
          </h1>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-2 md:gap-4">
          {habitCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-[#dbe6d8] bg-white p-4 shadow-sm sm:p-6"
            >
              <h2 className="text-xl font-black text-[#12351f] sm:text-2xl">
                {card.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#5f7165] sm:mt-3 sm:text-base sm:leading-7">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#12351f] px-4 py-12 text-white sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#f3b23c]">
              Primer contacto
            </p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Convertir interes en una charla concreta
            </h2>
          </div>
          <a
            href={buildWhatsAppUrl(
              'Hola, vengo de la pagina de biohacking y quiero asesoramiento Nipponflex.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md bg-[#f3b23c] px-5 py-3 text-sm font-bold text-[#12351f] transition hover:bg-[#ffca67] focus:outline-none focus:ring-4 focus:ring-[#f8d58b] sm:w-auto"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}

export default BiohackingPage
