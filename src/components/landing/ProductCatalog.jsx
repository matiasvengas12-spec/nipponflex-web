import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { featuredProducts } from '../../data/products'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

function ProductCatalog() {
  return (
    <section
      id="catalogo"
      className="scroll-mt-28 bg-white px-6 py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-3xl mb-16"
        >
          <motion.p variants={fadeInUp} className="text-sm font-black uppercase tracking-widest text-emerald-600">
            Catálogo consultivo
          </motion.p>
          <motion.h2 variants={fadeInUp} className="mt-4 text-4xl font-black leading-tight text-gray-900 sm:text-6xl tracking-tight">
            Productos destacados.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={fadeInUp} className="h-full">
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProductCatalog
