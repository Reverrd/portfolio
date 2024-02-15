/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xxs': '160px',
        'xs': '320px',
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}

