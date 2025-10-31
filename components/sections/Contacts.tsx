'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const contacts = [
  {
    id: 1,
    title: 'Instagram',
    url: '#',
  },
  {
    id: 2,
    title: 'Telegram',
    url: '#',
  },
  {
    id: 3,
    title: 'GitHub',
    url: '#',
  },
]

export default function Contacts() {
  return (
    <section
      id="contacts"
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
          Контакты
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-primary rounded-3xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-6">{contact.title}</h3>
              <div className="w-full h-40 bg-white/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-white/30 mb-6">
                <span className="text-white/70">Скриншот профиля</span>
              </div>
              <Button variant="primary" className="w-full">
                Перейти
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

