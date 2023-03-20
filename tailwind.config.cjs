/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'benox': '#373747'
      },
      fontFamily: {
        oxygen: ['Oxygen', 'monospace'],
      }
    },

  },
  plugins: [],
}
