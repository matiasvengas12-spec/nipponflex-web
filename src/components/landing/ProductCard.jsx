function ProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#dbe6d8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-950/10">
      <div className="aspect-[4/3] overflow-hidden bg-[#eef5ea]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-bold uppercase tracking-normal text-[#2b6777]">
          {product.category}
        </p>
        <h3 className="mt-2 text-2xl font-black leading-7 text-[#12351f]">
          {product.name}
        </h3>
        <p className="mt-3 flex-1 text-base leading-7 text-[#5f7165]">
          {product.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full bg-[#edf7e9] px-3 py-1 text-xs font-bold text-[#38613c]"
            >
              {highlight}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#12351f] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#148a45] focus:outline-none focus:ring-4 focus:ring-[#badfc6]"
        >
          Consultar por WhatsApp
        </button>
      </div>
    </article>
  )
}

export default ProductCard
