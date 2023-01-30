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
        'vendas': "url('/assets/vendas-card.png')",
        'disney': "url('/assets/disney-card.png')",
        'grupow': "url('/assets/grupow-card.png')",
        'jedigital': "url('/assets/jedigital-card.png')",
        'recon': "url('/assets/recon-card.png')",
        'presponto': "url('/assets/presponto-card.png')",
        'prespontoSite': "url('/assets/presponto-site-card.png')",
        'mila': "url('/assets/mila-moura-card.png')",
        'timeline': "url('/assets/timeline.png')",
      }
    },
  },
  plugins: [],
}