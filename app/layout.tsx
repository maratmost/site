import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Портфолио разработчика | Создание мобильных приложений',
  description: 'Профессиональная разработка мобильных приложений под ключ. Индивидуальный подход, современные технологии, соблюдение сроков.',
  keywords: ['разработка приложений', 'мобильная разработка', 'iOS разработка', 'Android разработка', 'кроссплатформенная разработка'],
  authors: [{ name: 'Developer Portfolio' }],
  openGraph: {
    title: 'Портфолио разработчика',
    description: 'Создаю качественные мобильные приложения',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Портфолио разработчика',
    description: 'Создаю качественные мобильные приложения',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}

