import { buildWhatsAppUrl } from '../../config/contact'

function ProductCard({ product }) {
  return (
    <article className="fx-card group flex h-full flex-col overflow-hidden rounded-lg border border-[#dbe6d8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b8d1b5] hover:shadow-2xl hover:shadow-green-950/10">
      <div className="aspect-[4/3] overflow-hidden bg-[#eef5ea]">
        <img
          src={product.image}
          alt={product.name}
          className="fx-card-media h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-xs font-bold uppercase tracking-normal text-[#2b6777] sm:text-sm">
          {product.category}
        </p>
        <h3 className="mt-2 text-xl font-black leading-7 text-[#12351f] sm:text-2xl">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-[#5f7165] sm:mt-3 sm:text-base sm:leading-7">
          {product.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          {product.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full bg-[#edf7e9] px-3 py-1 text-xs font-bold text-[#38613c]"
            >
              {highlight}
            </span>
          ))}
        </div>
        <a
          href={buildWhatsAppUrl(
            `Hola, quiero consultar por el producto ${product.name}.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-5 inline-flex w-full items-center justify-center rounded-md bg-[#12351f] px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#148a45] hover:shadow-lg hover:shadow-green-950/15 focus:outline-none focus:ring-4 focus:ring-[#badfc6] sm:mt-6"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  )
}

export default ProductCard
