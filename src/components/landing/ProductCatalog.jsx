import ProductCard from './ProductCard'
import { featuredProducts } from '../../data/products'

function ProductCatalog() {
  return (
    <section id="catalogo" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-normal text-[#148a45]">
            Catálogo consultivo
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-[#12351f] sm:text-5xl">
            Productos Nipponflex destacados
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#5f7165]">
            Esta primera selección replica los productos del catálogo de
            referencia para validar la experiencia. Cada consulta se piensa como
            lead calificado, no como carrito de compra.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCatalog
