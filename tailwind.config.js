/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#737373',
        dark: '#171717',
      },
      screens: {
        '2xl': '1320px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive'],
      }
    },
  },
  plugins: [],
}

