import ProductCard from './ProductCard'
import { featuredProducts } from '../../data/products'

function ProductCatalog() {
  return (
    <section
      id="catalogo"
      className="scroll-mt-28 bg-white px-4 py-14 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="fx-reveal text-sm font-black uppercase tracking-normal text-[#148a45]">
            Catálogo consultivo
          </p>
          <h2 className="fx-reveal fx-reveal-delay-1 mt-3 text-3xl font-black leading-tight text-[#12351f] sm:text-5xl">
            Productos destacados
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCatalog
