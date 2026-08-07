import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Activity, Moon, Zap, ShieldCheck } from 'lucide-react'
import { buildWhatsAppUrl } from '../config/contact'
import { useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const habits = [
  {
    title: 'Alimentación y movimiento',
    description:
      'Cuando cuidamos de nuestra salud haciendo ejercicio físico regular y escogiendo bien nuestra alimentación, prestando atención a lo que nos hace bien y bebiendo agua de calidad, mejoramos el funcionamiento del cuerpo.',
    icon: Activity,
    color: 'text-emerald-400',
    bg: 'bg-emerald-950/30',
    border: 'border-emerald-500/20',
  },
  {
    title: 'Sueño y descanso',
    description:
      'Cuando buscamos mejorar el sueño despejando la mente, eligiendo el sistema de descanso adecuado y asegurando una buena noche, obtenemos más energía y reparación celular.',
    icon: Moon,
    color: 'text-indigo-400',
    bg: 'bg-indigo-950/30',
    border: 'border-indigo-500/20',
  },
]

const technologies = [
  {
    name: 'FIR Power',
    desc: 'Infrarrojo largo que estimula las células madre y mejora el flujo sanguíneo.',
    icon: Zap,
  },
  {
    name: 'Magneto',
    desc: 'Terapia magnética que compensa el déficit magnético de la vida moderna.',
    icon: ShieldCheck,
  },
]

function BiohackingPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="bg-black text-white selection:bg-emerald-500/30" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <img 
            src="/images/biohacking-advisory-tech.png" 
            alt="Fondo Biohacking" 
            className="w-[800px] h-[800px] object-contain opacity-25 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </motion.div>

        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] mix-blend-screen opacity-60" />
          <div className="absolute w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] mix-blend-screen opacity-40 translate-x-1/3 translate-y-1/4" />
        </div>

        <motion.div
          style={{ y: y1, opacity: opacity1 }}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.p variants={fadeInUp} className="text-emerald-400 font-semibold tracking-widest uppercase mb-6 text-sm sm:text-base">
            Optimización Natural
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8">
            ¿Qué es el <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-white">Biohacking?</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
            Hackear el cuerpo mediante métodos naturales y la inteligencia de la naturaleza, desafiando a la mente y al cuerpo a alcanzar su máximo rendimiento sin soluciones complejas.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#conoce-mas"
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              Descubrir cómo
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Already Doing It Section */}
      <section id="conoce-mas" className="py-32 px-6 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-6xl font-black mb-6">Ya estás haciendo biohacking</h2>
            <p className="text-gray-400 text-xl sm:text-2xl max-w-2xl mx-auto">
              Aunque no lo sepas, en definitiva el biohacking consiste en aprovechar los recursos de nuestro propio cuerpo a nuestro favor.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {habits.map((habit, idx) => (
              <motion.div
                key={habit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: idx * 0.2 } },
                }}
                className={`p-10 rounded-3xl border ${habit.border} ${habit.bg} backdrop-blur-md flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500`}
              >
                <div>
                  <habit.icon className={`w-12 h-12 ${habit.color} mb-8`} />
                  <h3 className="text-3xl font-bold mb-4">{habit.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {habit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-[#0a1510] relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
              Tecnología que <br /> potencia tu descanso
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-10 leading-relaxed">
              Herramientas naturales que ayudan a tu cuerpo a recuperarse mejor mientras dormís, sin medicamentos ni procesos complejos.
            </motion.p>

            <div className="space-y-8">
              {technologies.map((tech) => (
                <motion.div key={tech.name} variants={fadeInUp} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-gray-400">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-12">
              <a
                href={buildWhatsAppUrl('Hola, quiero potenciar mi biohacking del descanso con Nipponflex.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-colors duration-300"
              >
                Consultar por WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center drop-shadow-2xl"
          >
            <img
              src="/images/biohacking-advisory-tech.png"
              alt="Biohacking y Tecnología del descanso"
              className="w-full h-auto max-h-[600px] object-contain rounded-3xl"
            />
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default BiohackingPage
