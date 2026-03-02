import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Trophy, Headphones, Clock, Microscope } from 'lucide-react'

const reasons = [
  {
    icon: Trophy,
    title: 'Calidad Premium',
    description:
      'Utilizamos materiales y pinturas de primera calidad. Ningún compromiso en la excelencia de cada trabajo.',
  },
  {
    icon: Zap,
    title: 'Tecnología Avanzada',
    description:
      'Equipos de diagnóstico de última generación compatibles con todas las marcas y modelos del mercado.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía Total',
    description:
      'Todos nuestros trabajos incluyen garantía escrita. Tu inversión está protegida desde el primer día.',
  },
  {
    icon: Clock,
    title: 'Entrega a Tiempo',
    description:
      'Respetamos los plazos acordados. Sabemos que tu tiempo es valioso y tu movilidad es fundamental.',
  },
  {
    icon: Headphones,
    title: 'Asesoría Personalizada',
    description:
      'Te orientamos en cada paso del proceso, con presupuestos transparentes y sin cargos ocultos.',
  },
  {
    icon: Microscope,
    title: 'Diagnóstico Preciso',
    description:
      'Identificamos el problema con exactitud antes de intervenir. Sin trabajo innecesario, solo lo que tu auto necesita.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
            Por qué elegirnos
          </p>
          <h2 className="section-title">
            La <span className="text-gradient">Diferencia</span> Innova
          </h2>
          <div className="red-line" />
          <p className="section-subtitle">
            No somos un taller más. Somos el estándar de excelencia que tu vehículo merece.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 bg-dark-200 border border-white/5 hover:border-primary/30 rounded-lg transition-all duration-500 hover:bg-dark-300"
            >
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 relative overflow-hidden rounded-lg border border-primary/30 bg-gradient-to-r from-primary/10 via-dark-300 to-primary/5 p-10 text-center"
        >
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />
          <h3 className="font-heading font-bold text-3xl uppercase tracking-wide text-white mb-3">
            ¿Listo para agendar tu servicio?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contáctanos hoy y recibe una cotización sin costo ni compromiso.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Cotizar Ahora — Es Gratis
          </a>
        </motion.div>
      </div>
    </section>
  )
}
