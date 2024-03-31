/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {colors: {
      'mred': '#ff2020', 
    }},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

