import { buildWhatsAppUrl } from '../../config/contact'
import { MessageCircle } from 'lucide-react'

function ProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-[#fbfbfd] border border-gray-200/50 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100/50 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8 bg-white">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
          {product.category}
        </p>
        <h3 className="text-2xl font-black leading-tight text-gray-900 mb-3">
          {product.name}
        </h3>
        <p className="flex-1 text-base leading-relaxed text-gray-500 mb-6">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {product.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700"
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
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-900/20"
        >
          <MessageCircle className="w-4 h-4" />
          Consultar
        </a>
      </div>
    </article>
  )
}

export default ProductCard
