/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // статический экспорт для GitHub Pages
  images: {
    unoptimized: true, // обязательно для статического экспорта
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/site' : '',
}

module.exports = nextConfig

