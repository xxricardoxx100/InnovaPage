import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Méndez',
    role: 'Toyota Corolla 2021',
    avatar: 'CM',
    rating: 5,
    text: 'Excelente trabajo con el reset del airbag de mi Toyota. Equipo muy profesional, me explicaron todo el proceso y el resultado fue impecable. 100% recomendados.',
  },
  {
    name: 'Andrea Rojas',
    role: 'Nissan Sentra 2020',
    avatar: 'AR',
    rating: 5,
    text: 'Llevé mi Nissan por un golpe fuerte y quedó como nuevo. La pintura quedó perfecta, no se nota absolutamente nada. El taller es muy limpio y los técnicos son muy amables.',
  },
  {
    name: 'Ricardo Fernández',
    role: 'Hyundai Tucson 2019',
    avatar: 'RF',
    rating: 5,
    text: 'Calibraron el odómetro de mi Tucson después del cambio de cuadro. El proceso fue rápido y me entregaron todo con documentación. Muy transparentes con el trabajo.',
  },
  {
    name: 'María Lucía Torres',
    role: 'Volkswagen Jetta 2022',
    avatar: 'MT',
    rating: 5,
    text: 'El diagnóstico electrónico que hicieron al VW fue muy completo. Encontraron fallas que en otros talleres no habían detectado. Servicio de primera calidad.',
  },
  {
    name: 'Javier López',
    role: 'Chevrolet Spark 2023',
    avatar: 'JL',
    rating: 5,
    text: 'Planchado y pintura de todo el lado derecho. El trabajo es de muy alta calidad. El precio fue justo y me entregaron en el plazo prometido. Volvería sin dudarlo.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-24 bg-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.4em] mb-4">
            Testimonios
          </p>
          <h2 className="section-title">
            Lo que dicen <span className="text-gradient">nuestros clientes</span>
          </h2>
          <div className="red-line" />
        </motion.div>

        {/* Testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-10 text-center relative"
            >
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" fill="currentColor" />

              <p className="text-gray-200 text-lg leading-relaxed max-w-3xl mx-auto mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-xl text-white">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">{testimonials[current].name}</p>
                  <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-sm border border-white/15 hover:border-primary flex items-center justify-center transition-colors duration-300 text-gray-400 hover:text-primary"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 transition-all duration-300 rounded-full ${
                    i === current ? 'w-8 bg-primary' : 'w-4 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-sm border border-white/15 hover:border-primary flex items-center justify-center transition-colors duration-300 text-gray-400 hover:text-primary"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
