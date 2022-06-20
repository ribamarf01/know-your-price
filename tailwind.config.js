/** @type {import('tailwindcss').Config} */
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
