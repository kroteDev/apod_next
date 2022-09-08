/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#f9f9f9',
        'bg-color-dark': '#18191a',
        'apod-bg-dark': '#242526',
        'nasa-blue': '#0b3d91',
        'border-nav': '#3357e6',
        'nav-dark': '#242526',
        'nasa-worm': '#db362d',
        'gradient-start': '#0b3d91',
        'gradient-end': '#001841',
        'text-color': '#54595f',
        'text-color-dark': '#b9b9b9'
      },
    },
    container: {
      center: true,
    },    
  },
  plugins: [],
}
