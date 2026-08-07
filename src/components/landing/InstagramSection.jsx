import { motion } from 'framer-motion'
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  buildWhatsAppUrl,
} from '../../config/contact'
import { MessageCircle, Instagram } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

function InstagramSection() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 border-t border-gray-100">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} className="text-sm font-black uppercase tracking-widest text-emerald-600 mb-4">
            Contacto directo
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl font-black leading-tight text-gray-900 sm:text-6xl tracking-tight mb-6">
            Elegí el producto ideal con asesoramiento personalizado.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-gray-500 sm:text-xl mb-12">
            Escribinos para recibir una recomendación según tu rutina, tus
            objetivos y el tipo de bienestar que querés trabajar.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={buildWhatsAppUrl(
                'Hola, quiero recibir asesoramiento sobre productos Nipponflex.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-emerald-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-900/20"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar asesoramiento
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-sm font-bold text-gray-900 transition-all duration-300 hover:border-gray-900 hover:bg-gray-50"
            >
              <Instagram className="w-5 h-5" />
              Ver {INSTAGRAM_HANDLE}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default InstagramSection
