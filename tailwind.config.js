/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'backgroundDice': '#52ffab',
        'backgroundTarget': '#313a49',
      },
      colors: {
        'colorText': '#fff',
        'colorTextSecondary': '#52ffab'
      }
    },
  },
  plugins: [],
}

