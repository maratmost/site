/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export', // статический экспорт для GitHub Pages
  images: {
    unoptimized: true, // обязательно для статического экспорта
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  basePath: isProd ? '/site' : '', // путь к репозиторию на GitHub Pages
  assetPrefix: isProd ? '/site/' : '',
}

module.exports = nextConfig

