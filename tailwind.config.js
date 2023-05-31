/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        natoSerif: ['Noto Serif', 'sans-serif'],
        jbMono: ['JetBrains Mono', 'Mono'],
      }
    },
  },
  plugins: [],
}

