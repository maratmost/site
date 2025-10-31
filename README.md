# Portfolio Website

Современный сайт-портфолио на Next.js 14 с TypeScript и Tailwind CSS.

## Технологии

- **Next.js 14** (App Router) - SSR/SSG для SEO
- **TypeScript** - типобезопасность
- **Tailwind CSS** - современный UI
- **Framer Motion** - анимации

## Установка

```bash
npm install
```

## Запуск

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## Сборка

```bash
npm run build
npm start
```

## Структура проекта

```
├── app/
│   ├── layout.tsx          # Root layout с SEO мета-тегами
│   ├── page.tsx            # Главная страница
│   └── globals.css          # Глобальные стили
├── components/
│   ├── layout/
│   │   └── Navbar.tsx       # Навигация
│   ├── sections/            # Секции сайта
│   │   ├── Hero.tsx
│   │   ├── Portfolio.tsx
│   │   ├── About.tsx
│   │   ├── Journey.tsx
│   │   ├── Blog.tsx
│   │   └── Contacts.tsx
│   └── ui/
│       └── Button.tsx      # Переиспользуемые компоненты
└── public/                  # Статические файлы
```

## SEO оптимизация

- Server-side rendering (SSR)
- Semantic HTML
- Metadata API для мета-тегов
- Open Graph и Twitter Cards
- Правильная структура заголовков

