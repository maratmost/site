'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const projects = [
  {
    id: 1,
    title: 'Проект 1',
    description: 'Краткое описание проекта. Основные функции и технологии.',
  },
  {
    id: 2,
    title: 'Проект 2',
    description: 'Краткое описание проекта. Основные функции и технологии.',
  },
  {
    id: 3,
    title: 'Проект 3',
    description: 'Краткое описание проекта. Основные функции и технологии.',
  },
  {
    id: 4,
    title: 'Проект 4',
    description: 'Краткое описание проекта. Основные функции и технологии.',
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
        >
          Портфолио
        </motion.h2>

        <div className="overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-primary-600 scrollbar-track-gray-100">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[350px] flex-shrink-0 bg-gradient-primary rounded-3xl p-8 text-white shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6">{project.title}</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="aspect-video bg-white/20 rounded-xl flex items-center justify-center border-2 border-dashed border-white/30">
                    <span className="text-white/70 text-sm">Скрин</span>
                  </div>
                  <div className="aspect-video bg-white/20 rounded-xl flex items-center justify-center border-2 border-dashed border-white/30">
                    <span className="text-white/70 text-sm">Скрин</span>
                  </div>
                </div>
                <p className="mb-6 text-white/90">{project.description}</p>
                <Button variant="primary" className="w-full">
                  Подробнее
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

