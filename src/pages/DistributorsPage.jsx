import { buildWhatsAppUrl } from '../config/contact'
import { motion } from 'framer-motion'
import { CheckCircle, ShieldCheck, HeartHandshake, MessageCircle } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const opportunityHighlights = [
  {
    label: 'Productos con historia',
    text: 'Descanso, hidratación y bienestar tecnológico para conversar con clientes reales.',
    icon: ShieldCheck,
  },
  {
    label: 'Acompañamiento inicial',
    text: 'Te guiamos con argumentos claros, materiales y una forma simple de empezar.',
    icon: CheckCircle,
  },
  {
    label: 'Venta consultiva',
    text: 'No se trata de empujar productos: se trata de entender necesidades y recomendar bien.',
    icon: HeartHandshake,
  },
]

const starterSteps = [
  'Nos escribís y coordinamos una primera charla.',
  'Te contamos cómo funciona la oportunidad comercial.',
  'Definimos un camino de inicio según tu perfil y tu red.',
]

function DistributorsPage() {
  return (
    <main className="bg-[#07111e] text-white selection:bg-emerald-500/30">
      {/* Hero Section - Kept completely untouched as requested */}
      <section className="relative isolate min-h-[calc(100svh-64px)] overflow-hidden px-4 py-12 sm:px-8 lg:px-10">
        <img
          src="/images/distributors-hero-mountain-lake.png"
          alt="Paisaje de lago y montañas al amanecer para oportunidad de negocio Nipponflex"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#050914]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050914]/70 via-[#050914]/20 to-[#050914]/82" />
        <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-[#050914] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-160px)] max-w-6xl flex-col items-center justify-center text-center">
          <p className="text-sm font-black uppercase tracking-normal text-[#d7bd72] sm:text-base">
            Oportunidad para distribuidores
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.96] tracking-normal text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)] sm:text-7xl lg:text-8xl">
            Oportunidad de Negocio: Vida Plena Nipponflex
          </h1>
          <p className="mt-8 max-w-3xl text-2xl leading-tight text-white drop-shadow-[0_5px_14px_rgba(0,0,0,0.55)] sm:text-4xl">
            Unite a la revolución del bienestar tecnológico
          </p>

          <div className="mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={buildWhatsAppUrl(
                'Hola, quiero información para comenzar a vender Nipponflex.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#d7bd72] px-6 py-4 text-sm font-black uppercase tracking-normal text-[#07111e] shadow-2xl shadow-black/35 transition hover:-translate-y-0.5 hover:bg-[#f1d686] focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Quiero empezar
            </a>
            <a
              href="#como-empezar"
              className="inline-flex items-center justify-center rounded-md border border-white/55 bg-white/10 px-6 py-4 text-sm font-black uppercase tracking-normal text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18 focus:outline-none focus:ring-4 focus:ring-white/25"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>
      </section>

      {/* Modernized Highlights Section */}
      <section className="bg-black px-6 py-24 sm:py-32 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="max-w-3xl text-center mx-auto mb-20"
          >
            <p className="text-sm font-black uppercase tracking-widest text-emerald-400 mb-4">
              Empezá con una propuesta clara
            </p>
            <h2 className="text-4xl sm:text-6xl font-black leading-tight mb-6">
              Bienestar que podés recomendar con criterio
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              La oportunidad está pensada para personas que quieren vender productos de bienestar con una conversación seria: escuchar, orientar y acompañar decisiones de compra.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {opportunityHighlights.map((item) => (
              <motion.article
                key={item.label}
                variants={fadeInUp}
                className="rounded-3xl border border-gray-800 bg-[#050505] p-10 hover:border-emerald-500/30 hover:bg-emerald-950/10 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-8 group-hover:bg-emerald-900/30 group-hover:border-emerald-500/30 transition-colors duration-500">
                  <item.icon className="w-7 h-7 text-gray-400 group-hover:text-emerald-400 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-black leading-tight mb-4 text-white">
                  {item.label}
                </h3>
                <p className="text-base leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modernized Starter Steps Section */}
      <section id="como-empezar" className="bg-[#050505] px-6 py-24 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="text-sm font-black uppercase tracking-widest text-[#d7bd72] mb-4">
              Cómo comenzar
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-6xl font-black leading-tight mb-6">
              Primer paso: una charla simple
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl leading-relaxed text-gray-400 mb-10">
              Si te interesa generar ingresos recomendando Nipponflex, te contamos el modelo, los productos principales y la forma de iniciar sin complicarte.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <a
                href={buildWhatsAppUrl(
                  'Hola, quiero agendar una charla para ser distribuidor Nipponflex.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#148a45] px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-[#0f7338] hover:scale-105 duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Hablar por WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid gap-4"
          >
            {starterSteps.map((step, index) => (
              <motion.article
                key={step}
                variants={fadeInUp}
                className="flex items-center gap-6 rounded-3xl border border-gray-800 bg-black p-6 shadow-2xl hover:border-[#d7bd72]/30 transition-colors duration-500"
              >
                <span className="flex flex-shrink-0 h-16 w-16 items-center justify-center rounded-2xl bg-[#d7bd72]/10 text-xl font-black text-[#d7bd72]">
                  0{index + 1}
                </span>
                <p className="text-lg font-bold leading-relaxed text-gray-300">
                  {step}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default DistributorsPage
