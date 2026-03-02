import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const galleryItems = [
  {
    img: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?w=600&q=80',
    title: 'Planchado & Pintura',
    category: 'Carrocería',
  },
  {
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&q=80',
    title: 'Diagnóstico Electrónico',
    category: 'Electrónica',
  },
  {
    img: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&q=80',
    title: 'Pintura Metalizada',
    category: 'Pintura',
  },
  {
    img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
    title: 'Restauración Total',
    category: 'Carrocería',
  },
  {
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
    title: 'Acabado Premium',
    category: 'Pintura',
  },
  {
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80',
    title: 'Sistema de Airbag',
    category: 'Electrónica',
  },
]

const categories = ['Todos', 'Carrocería', 'Pintura', 'Electrónica']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selectedImg, setSelectedImg] = useState(null)

  const filtered =
    activeCategory === 'Todos'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-40 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.4em] mb-4">
            Nuestro trabajo
          </p>
          <h2 className="section-title">
            <span className="text-gradient">Galería</span> de Proyectos
          </h2>
          <div className="red-line" />
          <p className="section-subtitle">
            Cada trabajo es un testimonio de nuestra exigencia y dedicación al detalle.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-xs font-semibold uppercase tracking-widest rounded-sm border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary border-primary text-white'
                  : 'border-white/20 text-gray-400 hover:border-primary/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative group overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedImg(item)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-primary text-[10px] uppercase tracking-widest font-bold mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-heading font-bold text-lg uppercase">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.img}
                alt={selectedImg.title}
                className="w-full rounded-lg"
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="mt-4 text-center">
                <span className="text-primary text-xs uppercase tracking-widest">{selectedImg.category}</span>
                <h3 className="text-white font-heading font-bold text-2xl uppercase mt-1">{selectedImg.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
