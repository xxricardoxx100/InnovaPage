import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Paintbrush2, Wrench, Cpu, Shield, Gauge, Car } from 'lucide-react'

const services = [
  {
    icon: Car,
    title: 'Planchado Automotriz',
    description:
      'Reparación de abolladuras, golpes y daños estructurales de carrocería con técnicas de última generación. Resultados perfectos garantizados.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
    tag: 'Carrocería',
  },
  {
    icon: Paintbrush2,
    title: 'Pintura de Alta Gama',
    description:
      'Aplicación de pintura profesional con cabina de pintado climatizada. Colores sólidos, metálicos, perlados y personalizados al detalle.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=75',
    tag: 'Pintura',
  },
  {
    icon: Cpu,
    title: 'Diagnóstico Electrónico',
    description:
      'Escaneo completo de todos los sistemas electrónicos del vehículo con equipos de alta tecnología. Identificamos fallas con precisión.',
    image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=600&q=75',
    tag: 'Electrónica',
  },
  {
    icon: Shield,
    title: 'Reset Sistema Airbag',
    description:
      'Reseteo profesional del módulo de airbag y simulaciones de impacto. Restauramos el sistema completo de seguridad de tu vehículo.',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=75',
    tag: 'Seguridad',
  },
  {
    icon: Wrench,
    title: 'Simulaciones Electrónicas',
    description:
      'Simulaciones y emulaciones de sensores y módulos electrónicos. Soluciones definitivas para problemas de difícil diagnóstico convencional.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=75',
    tag: 'Electrónica',
  },
  {
    icon: Gauge,
    title: 'Calibración de Odómetros',
    description:
      'Programación y calibración de odómetros nuevos tras cambio de cuadro. Proceso legal y certificado con garantía de precisión total.',
    image: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=600&q=75',
    tag: 'Instrumentos',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 bg-dark-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.4em] mb-4">
            Lo que hacemos
          </p>
          <h2 className="section-title">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <div className="red-line" />
          <p className="section-subtitle">
            Ofrecemos soluciones integrales para tu vehículo, desde reparación de
            carrocería hasta diagnóstico electrónico especializado.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group relative overflow-hidden rounded-lg border border-white/5 hover:border-primary/40 transition-all duration-500 bg-dark-200"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-dark-200/50 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/20 border border-primary/40 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom line */}
                <div className="mt-5 pt-4 border-t border-white/5">
                  <span className="text-primary text-xs font-semibold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all duration-300 cursor-pointer">
                    Más información
                    <span className="text-lg leading-none">→</span>
                  </span>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
