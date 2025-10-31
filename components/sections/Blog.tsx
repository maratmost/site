'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const articles = [
  {
    id: 1,
    title: 'Статья 1',
    description: 'Интересная статья о разработке и современных технологиях. Делюсь опытом и полезными советами.',
  },
  {
    id: 2,
    title: 'Статья 2',
    description: 'Интересная статья о разработке и современных технологиях. Делюсь опытом и полезными советами.',
  },
  {
    id: 3,
    title: 'Статья 3',
    description: 'Интересная статья о разработке и современных технологиях. Делюсь опытом и полезными советами.',
  },
  {
    id: 4,
    title: 'Статья 4',
    description: 'Интересная статья о разработке и современных технологиях. Делюсь опытом и полезными советами.',
  },
]

export default function Blog() {
  return (
    <section
      id="blog"
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-cyan"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 sm:mb-12"
        >
          Блог
        </motion.h2>

        <div className="overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-white scrollbar-track-white/20">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] flex-shrink-0 bg-gradient-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4">{article.title}</h3>
                <p className="mb-6 text-white/90 leading-relaxed">{article.description}</p>
                <Button variant="primary" className="w-full">
                  Читать
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

