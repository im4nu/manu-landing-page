/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-white': '#DEDEDE',
        'primary-black': '#1E1E1E',
        'primary-green': '#769586',
      },
      backgroundImage: {
        'hero': "url('/assets/hero.png')",
        'heroDesktop': "url('/assets/heroDesktop.png')",
      }
    },
  },
  plugins: [],
}