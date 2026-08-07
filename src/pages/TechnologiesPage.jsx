import { motion, useScroll, useTransform } from 'framer-motion'
import { buildWhatsAppUrl } from '../config/contact'
import { useRef } from 'react'
import { Activity, Zap, Wind, ShieldCheck, ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const technologies = [
  {
    number: '01',
    name: 'Campos Magnéticos',
    headline: 'Conexión con la Tierra.',
    image: '/images/technology-magnetic-fields.png',
    summary:
      'Una tecnología pensada para acompañar el equilibrio, la circulación y el descanso profundo desde el contacto cotidiano.',
    benefits: 'Sueño profundo, menor fatiga.',
    tags: ['Descarga a tierra', 'Circulación mejorada'],
    icon: Activity,
    color: 'text-indigo-400',
    border: 'border-indigo-500/20',
    bg: 'bg-indigo-950/20',
  },
  {
    number: '02',
    name: 'FIR Power',
    headline: 'El calor que revitaliza.',
    image: '/images/technology-fir-power.png',
    summary:
      'Biocerámica que trabaja con el calor corporal para una sensación de confort más profunda y sostenida.',
    benefits: 'Alivio del dolor, recuperación muscular.',
    tags: ['Patente mundial', 'Óxido nítrico'],
    icon: Zap,
    color: 'text-rose-400',
    border: 'border-rose-500/20',
    bg: 'bg-rose-950/20',
  },
  {
    number: '03',
    name: 'Ion Balls',
    headline: 'Iones negativos para tu entorno.',
    image: '/images/technology-ion-balls.png',
    summary:
      'Tecnología mineral inspirada en la naturaleza para purificar el aire, mejorar el ambiente y el bienestar diario.',
    benefits: 'Aire puro, ambiente saludable.',
    tags: ['Aire purificado', 'Combate smog'],
    icon: Wind,
    color: 'text-sky-400',
    border: 'border-sky-500/20',
    bg: 'bg-sky-950/20',
  },
]

const mfpTags = ['Sinergia total', 'Bienestar integral', 'Tecnología insignia']

function TechnologiesPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="bg-black text-white selection:bg-emerald-500/30 overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <img 
            src="/images/technology-mfp-magnets.png" 
            alt="Fondo Tecnología Nipponflex" 
            className="w-[800px] h-[800px] object-contain opacity-25 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </motion.div>

        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] mix-blend-screen opacity-60" />
          <div className="absolute w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-screen opacity-30 -translate-x-1/4 -translate-y-1/4" />
        </div>

        <motion.div
          style={{ y: y1, opacity: opacity1 }}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.p variants={fadeInUp} className="text-emerald-400 font-semibold tracking-widest uppercase mb-6 text-sm sm:text-base">
            Tecnologías Nipponflex
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8">
            Innovación que se <br className="hidden sm:block" />
            siente en la <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-white">rutina.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
            Magnetismo, FIR Power e iones negativos se combinan para convertir el descanso, el agua y el ambiente en una experiencia de bienestar más clara, simple y cotidiana.
          </motion.p>
        </motion.div>
      </section>

      {/* Flagship Technology Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="rounded-[40px] border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 to-black p-8 sm:p-14 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 shadow-2xl shadow-emerald-900/10 backdrop-blur-xl"
          >
            <div className="order-2 lg:order-1 mt-12 lg:mt-0">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-emerald-400" />
                <p className="text-sm font-black uppercase tracking-widest text-emerald-400">
                  Tecnología Insignia
                </p>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black leading-tight mb-6">
                Magnetic <br className="hidden sm:block" /> FIR Power.
              </h2>
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-gray-300 mb-8">
                Nuestra tecnología insignia fusiona los beneficios del magnetismo con la potencia del FIR Power para una experiencia de bienestar integral y profunda.
              </p>
              
              <div className="mb-10">
                <p className="text-base text-gray-400 mb-4">
                  <strong className="text-white">Beneficios:</strong> Equilibrio total, energía sostenida.
                </p>
                <div className="flex flex-wrap gap-2">
                  {mfpTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-emerald-500/30 bg-emerald-900/20 px-4 py-1.5 text-sm font-bold text-emerald-200 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#catalogo"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-black text-black transition hover:scale-105"
                >
                  Ver productos
                </a>
                <a
                  href={buildWhatsAppUrl('Hola, quiero recibir asesoría sobre tecnologías Nipponflex.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-gray-700 bg-black/50 px-8 py-4 text-sm font-black text-white transition hover:bg-gray-800"
                >
                  Solicitar asesoría
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative group">
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src="/images/technology-mfp-magnets.png"
                alt="Imanes y ondas de Magnetic FIR Power"
                className="relative z-10 w-full h-auto max-h-[500px] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The 3 Technologies Section */}
      <section className="py-32 px-6 relative z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-24"
          >
            <p className="text-sm font-black uppercase tracking-widest text-emerald-400 mb-4">
              Get to know wellness tech
            </p>
            <h2 className="text-4xl sm:text-6xl font-black leading-tight mb-6">
              Tres tecnologías. <br className="hidden sm:block" /> Una experiencia más simple.
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Cada tecnología aparece como una escena: imagen, beneficio y una explicación clara para entender cómo mejoran tu rutina.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:gap-24">
            {technologies.map((tech, idx) => {
              const isEven = idx % 2 !== 0
              return (
                <motion.article
                  key={tech.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={fadeInUp}
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`w-full lg:w-1/2 relative p-1 lg:p-4 rounded-3xl ${tech.bg} ${tech.border} backdrop-blur-sm border`}>
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-2xl"
                    />
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`text-6xl font-black ${tech.color} opacity-40`}>
                        {tech.number}
                      </span>
                      <tech.icon className={`w-10 h-10 ${tech.color}`} />
                    </div>
                    
                    <h3 className="text-4xl sm:text-5xl font-black mb-4">
                      {tech.name}
                    </h3>
                    <p className={`text-2xl font-bold ${tech.color} mb-6`}>
                      {tech.headline}
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      {tech.summary}
                    </p>
                    
                    <p className="text-gray-400 mb-8">
                      <strong className="text-white">Beneficios:</strong> {tech.benefits}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {tech.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-700 bg-gray-800/50 px-4 py-1.5 text-sm font-bold text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default TechnologiesPage
