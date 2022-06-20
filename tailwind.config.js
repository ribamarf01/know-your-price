/** @type {import('tailwindcss').Config} */
// Color Pallete: https://coolors.co/7cc6fe-35a6fd-5c5874-837f9f-08090a
module.exports = {
  content: [
    "src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        "independence": "#5c5874ff",
        "maya-blue": "#7cc6feff",
        "blue-jeans": "#35A6FDff",
        "alice-blue": "#f4faffff",
        "rhythm": "#797596ff",
        "rich-black-fogra": "#08090aff",
      }
    },
  },
  plugins: [],
}
