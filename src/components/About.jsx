import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { Award, Users, Star, Clock } from 'lucide-react'

const stats = [
  { icon: Award, value: 8, suffix: '+', label: 'Años de Experiencia' },
  { icon: Users, value: 500, suffix: '+', label: 'Clientes Satisfechos' },
  { icon: Star, value: 1200, suffix: '+', label: 'Vehículos Atendidos' },
  { icon: Clock, value: 24, suffix: 'h', label: 'Diagnóstico Rápido' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
                alt="Taller Innova Acabados Global"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-dark-300 border border-primary/30 rounded-lg p-6 z-20 w-52"
            >
              <div className="text-4xl font-heading font-bold text-primary">IAG</div>
              <div className="text-white font-semibold text-sm mt-1">Innova Acabados Global</div>
              <div className="mt-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <div className="text-gray-400 text-xs mt-1">Calificación de clientes</div>
            </motion.div>

            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-lg z-0" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.4em] mb-4">
              Quiénes somos
            </p>
            <h2 className="section-title text-left">
              Expertos que <span className="text-gradient">transforman</span> tu auto
            </h2>
            <div className="red-line-left mb-8" />

            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                En <span className="text-white font-semibold">Innova Acabados Global</span>, somos
                un equipo de técnicos apasionados con más de <span className="text-primary font-semibold">8 años de experiencia</span>{' '}
                en el sector automotriz.
              </p>
              <p>
                Nos especializamos en <span className="text-white">carrocería de alta precisión</span> y{' '}
                <span className="text-white">electrónica automotriz avanzada</span>, combinando
                tecnología de punta con el cuidado artesanal que cada vehículo merece.
              </p>
              <p>
                Nuestro compromiso es devolver tu vehículo en condiciones de fábrica —
                o mejor — con garantía en cada trabajo que realizamos.
              </p>
            </div>

            {/* Feature list */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Equipos de última generación',
                'Técnicos certificados',
                'Garantía en todos los trabajos',
                'Atención personalizada',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={ref} className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center p-8 glass-card hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="font-heading font-bold text-4xl text-white">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  '0'
                )}
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wider mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
