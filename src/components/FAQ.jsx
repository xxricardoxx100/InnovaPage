import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '¿Qué es la calibración de odómetro y cuándo se necesita?',
    answer:
      'La calibración de odómetro es el proceso de programar el kilometraje correcto en un cuadro o tablero de instrumentos nuevo. Se necesita cuando se cambia el cuadro del vehículo por daño, robo o fallo electrónico. En Innova Acabados Global realizamos la calibración de odómetros nuevos de forma profesional, documentada y con garantía de precisión total.',
  },
  {
    question: '¿Qué es el reseteo del sistema airbag y cuándo se requiere?',
    answer:
      'El reset de airbag es el proceso de limpiar y restaurar el módulo de control SRS (Sistema de Restricción Suplementaria) después de que los airbags se han activado en un accidente. También realizamos reparación de módulos airbag dañados y simulaciones cuando no se reemplazarán las bolsas de aire. Esto elimina los códigos de falla y apaga la luz de airbag.',
  },
  {
    question: '¿Cuánto tarda un diagnóstico electrónico automotriz?',
    answer:
      'Un diagnóstico electrónico básico toma entre 30 minutos y 1 hora. El diagnóstico completo de todos los módulos puede tomar hasta 2 horas dependiendo del vehículo. Escaneamos: motor, transmisión, ABS, airbag, climatización y todos los sistemas disponibles. Entregamos el reporte detallado el mismo día.',
  },
  {
    question: '¿Con qué marcas de vehículos trabajan?',
    answer:
      'Trabajamos con todas las marcas: Toyota, Chevrolet, Hyundai, Kia, Nissan, Ford, Volkswagen, Honda, Mazda, Renault, Jeep, Mitsubishi y muchas más. Nuestros equipos de diagnóstico son multimarca y multisistema.',
  },
  {
    question: '¿Los trabajos tienen garantía?',
    answer:
      'Sí. Todos nuestros servicios incluyen garantía por escrito. La pintura tiene garantía de calidad de acabado. Las reparaciones electrónicas (airbag, odómetro, diagnóstico) tienen garantía de funcionamiento. Consulta los plazos específicos según el servicio.',
  },
  {
    question: '¿Atienden vehículos de todas las marcas para el reset de airbag?',
    answer:
      'Sí. Realizamos reseteo y reparación de airbag para vehículos de todas las marcas y modelos. Contamos con el equipo especializado para leer, limpiar y restaurar el módulo SRS de manera profesional, devolviendo el 100% de la funcionalidad del sistema de seguridad.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-24 bg-dark relative overflow-hidden" id="faq">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.4em] mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="section-title">
            Resolvemos tus <span className="text-gradient">Dudas</span>
          </h2>
          <div className="red-line" />
          <p className="section-subtitle">
            Todo lo que necesitas saber sobre calibración de odómetros, reseteo de airbag, diagnóstico electrónico y más.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              {/* Using itemScope/itemProp for schema compatibility */}
              <div
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                  open === i
                    ? 'border-primary/40 bg-dark-300'
                    : 'border-white/5 bg-dark-200 hover:border-white/15'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <h3 className="font-medium text-white text-sm leading-relaxed pr-2">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    open === i ? 'bg-primary border-primary' : 'border-white/20'
                  }`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        open === i ? 'rotate-180 text-white' : 'text-gray-400'
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-white/5 mb-4" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">¿Tienes una pregunta diferente?</p>
          <a href="#contact" className="btn-outline inline-flex items-center gap-2 text-xs">
            Contáctanos directamente
          </a>
        </motion.div>
      </div>
    </section>
  )
}
