'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-pink flex items-center"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 sm:mb-12"
        >
          Познакомимся
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white/20 rounded-2xl sm:rounded-3xl flex items-center justify-center border-2 sm:border-4 border-dashed border-white/50 backdrop-blur-sm"
          >
            <span className="text-white/80 text-lg">Ваше фото</span>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Обо мне</h3>
            <div className="space-y-4 text-lg md:text-xl text-white/95 leading-relaxed">
              <p>
                Привет! Я разработчик мобильных приложений с опытом создания качественных и удобных
                решений. Увлечен современными технологиями и всегда стремлюсь создавать продукты,
                которые приносят пользу людям.
              </p>
              <p>
                Специализируюсь на разработке нативных и кроссплатформенных приложений.
                Внимательно отношусь к деталям и пользовательскому опыту.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

