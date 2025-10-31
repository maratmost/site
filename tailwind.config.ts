import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a5b8fc',
          400: '#818cf8',
          500: '#667eea',
          600: '#6366f1',
          700: '#764ba2',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-pink': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      },
    },
  },
  plugins: [],
}
export default config

