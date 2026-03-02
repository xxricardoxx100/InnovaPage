import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+1 (000) 000-0000',
    href: 'tel:+10000000000',
  },
  {
    icon: Mail,
    label: 'Correo Electrónico',
    value: 'contacto@innovaacabadosglobal.com',
    href: 'mailto:contacto@innovaacabadosglobal.com',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Tu ciudad, País',
    href: '#',
  },
]

const socials = [
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/10000000000', color: 'hover:text-green-400' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/', color: 'hover:text-pink-400' },
  { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com/', color: 'hover:text-blue-400' },
  { icon: FaTiktok, label: 'TikTok', href: 'https://tiktok.com/', color: 'hover:text-white' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // WhatsApp redirect
    const text = `Hola! Soy ${formData.name}. Me interesa el servicio de ${formData.service}. ${formData.message} Contacto: ${formData.phone || formData.email}`
    window.open(`https://wa.me/10000000000?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
            Contáctanos
          </p>
          <h2 className="section-title">
            Solicita tu <span className="text-gradient">Cotización</span>
          </h2>
          <div className="red-line" />
          <p className="section-subtitle">
            Cuéntanos sobre tu vehículo y te respondemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/10000000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 rounded-lg p-6 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors duration-300">
                <FaWhatsapp className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold">Escríbenos por WhatsApp</p>
                <p className="text-green-400 text-sm">Respuesta inmediata</p>
              </div>
            </a>

            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 glass-card p-5 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">{item.label}</p>
                    <p className="text-white text-sm font-medium mt-0.5">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social media */}
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">
                Síguenos en redes
              </p>
              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`w-12 h-12 glass-card hover:border-white/30 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full bg-dark-300 border border-white/10 focus:border-primary rounded-sm px-4 py-3 text-white text-sm outline-none transition-colors duration-300 placeholder-gray-600"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 000 000 0000"
                    className="w-full bg-dark-300 border border-white/10 focus:border-primary rounded-sm px-4 py-3 text-white text-sm outline-none transition-colors duration-300 placeholder-gray-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full bg-dark-300 border border-white/10 focus:border-primary rounded-sm px-4 py-3 text-white text-sm outline-none transition-colors duration-300 placeholder-gray-600"
                />
              </div>

              <div>
                <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">
                  Servicio de Interés *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-300 border border-white/10 focus:border-primary rounded-sm px-4 py-3 text-white text-sm outline-none transition-colors duration-300"
                >
                  <option value="" className="bg-dark-300">Seleccionar servicio...</option>
                  <option value="Planchado Automotriz" className="bg-dark-300">Planchado Automotriz</option>
                  <option value="Pintura de Alta Gama" className="bg-dark-300">Pintura de Alta Gama</option>
                  <option value="Diagnóstico Electrónico" className="bg-dark-300">Diagnóstico Electrónico</option>
                  <option value="Reset Sistema Airbag" className="bg-dark-300">Reset Sistema Airbag</option>
                  <option value="Simulaciones Electrónicas" className="bg-dark-300">Simulaciones Electrónicas</option>
                  <option value="Calibración de Odómetros" className="bg-dark-300">Calibración de Odómetros</option>
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-xs uppercase tracking-widest block mb-2">
                  Descripción del problema
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Cuéntanos sobre tu vehículo y el problema que tiene..."
                  className="w-full bg-dark-300 border border-white/10 focus:border-primary rounded-sm px-4 py-3 text-white text-sm outline-none transition-colors duration-300 placeholder-gray-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-3 group"
              >
                {submitted ? (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    ¡Redirigiendo a WhatsApp!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Enviar Solicitud
                  </>
                )}
              </button>

              <p className="text-gray-600 text-xs text-center">
                Al enviar, serás redirigido a WhatsApp para completar tu solicitud.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
