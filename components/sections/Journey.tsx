'use client'

import { motion } from 'framer-motion'

const journeySections = [
  {
    title: 'Начало пути',
    items: [
      { title: '2016 год', description: 'Начал изучать программирование' },
      { title: 'Первые шаги', description: 'Освоил базовые технологии' },
      { title: 'Практика', description: 'Создал первые пет-проекты' },
    ],
  },
  {
    title: 'Профессиональный рост',
    items: [
      { title: 'Первые клиенты', description: 'Начал работать с заказчиками' },
      { title: 'Навыки', description: 'Расширил стек технологий' },
      { title: 'Опыт', description: 'Реализовал крупные проекты' },
    ],
  },
  {
    title: 'Сегодня',
    items: [
      { title: 'Экспертиза', description: 'Создаю сложные приложения' },
      { title: 'Команда', description: 'Работаю с профессионалами' },
      { title: 'Будущее', description: 'Постоянно развиваюсь' },
    ],
  },
]

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
        >
          Мой путь в разработке
        </motion.h2>

        <div className="space-y-8">
          {journeySections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              className="bg-gradient-primary rounded-3xl p-8 lg:p-12 text-white shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8">{section.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
                  >
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-white/90">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

