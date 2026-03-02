import { Link } from 'react-scroll'
import { Heart } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

const footerLinks = [
  { label: 'Inicio', to: 'hero' },
  { label: 'Servicios', to: 'services' },
  { label: 'Nosotros', to: 'about' },
  { label: 'Galería', to: 'gallery' },
  { label: 'Contacto', to: 'contact' },
]

const services = [
  'Planchado Automotriz',
  'Pintura de Alta Gama',
  'Diagnóstico Electrónico',
  'Reset Sistema Airbag',
  'Simulaciones Electrónicas',
  'Calibración de Odómetros',
]

const socials = [
  { icon: FaWhatsapp, href: 'https://wa.me/10000000000', label: 'WhatsApp' },
  { icon: FaInstagram, href: 'https://instagram.com/', label: 'Instagram' },
  { icon: FaFacebook, href: 'https://facebook.com/', label: 'Facebook' },
  { icon: FaTiktok, href: 'https://tiktok.com/', label: 'TikTok' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-100 border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="hero" smooth duration={800} className="cursor-pointer inline-block mb-6">
              <img
                src="/logo-horizontal.svg"
                alt="Innova Acabados Global"
                className="h-14 w-auto hover:opacity-90 transition-opacity duration-300"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Especialistas en carrocería y electrónica automotriz. Devolvemos la perfección a tu vehículo.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-dark-300 border border-white/5 hover:border-primary/40 hover:bg-primary/10 rounded-sm flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={800}
                    offset={-80}
                    className="text-gray-500 hover:text-primary text-sm cursor-pointer transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gray-700 group-hover:bg-primary group-hover:w-6 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-6">
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="services"
                    smooth
                    duration={800}
                    offset={-80}
                    className="text-gray-500 hover:text-primary text-sm cursor-pointer transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gray-700 group-hover:bg-primary group-hover:w-6 transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-6">
              Contacto
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Teléfono</span>
                <a href="tel:+10000000000" className="hover:text-primary transition-colors duration-300">
                  +1 (000) 000-0000
                </a>
              </li>
              <li>
                <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:contacto@innovaacabadosglobal.com" className="hover:text-primary transition-colors duration-300 break-all">
                  contacto@innovaacabadosglobal.com
                </a>
              </li>
              <li>
                <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">Horario</span>
                <span>Lun–Sáb: 8:00am – 6:00pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {year} Innova Acabados Global. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-primary fill-primary" /> para tu vehículo
          </p>
        </div>
      </div>
    </footer>
  )
}
