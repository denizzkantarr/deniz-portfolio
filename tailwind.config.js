/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    {
      pattern: /^(from|to)-(blue|purple|pink|red|orange|yellow|amber|green|emerald|teal|cyan|indigo|violet|fuchsia|rose|gray|slate)-[0-9]{2,3}$/,
    },
    { pattern: /^(from|to)-(primary|secondary|dark|light)$/ },
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        dark: '#0f172a',
        light: '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}