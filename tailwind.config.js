/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'sm': '650px',
      'md': '960px',
      'lg': '1440px',
      },
    },
  },
  plugins: [],
}