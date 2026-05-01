/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    {
      pattern: /^(from|to)-(blue|purple|pink|red|orange|yellow|amber|green|emerald|teal|cyan|indigo|violet|fuchsia|rose|gray|slate|sky)-[0-9]{2,3}$/,
    },
    { pattern: /^(from|to)-(primary|secondary|accent)$/ },
    { pattern: /^bg-(primary|secondary|accent)(\/(10|20|30))?$/ },
    { pattern: /^border-(primary|secondary)(\/[0-9]+)?$/ },
    { pattern: /^text-(primary|secondary|accent)$/ },
    { pattern: /^shadow-(primary|secondary)(\/(10|20|30))?$/ },
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c6af7',
        secondary: '#f06aab',
        accent: '#3de8c8',
        'bg-base': '#07070f',
        'bg-alt': '#0c0c18',
        surface: '#11111e',
        'surface-2': '#18182a',
        border: '#1f1f35',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'spin-slow-rev': 'spin 26s linear infinite reverse',
        float: 'floatY 6s ease-in-out infinite',
        blob: 'blobMove 14s ease-in-out infinite alternate',
        'dot-pulse': 'dotPulse 1.4s ease-in-out infinite',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blobMove: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '33%': { transform: 'scale(1.12) translate(30px, -20px)' },
          '66%': { transform: 'scale(0.92) translate(-20px, 20px)' },
          '100%': { transform: 'scale(1.05) translate(10px, -10px)' },
        },
        dotPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.6)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
