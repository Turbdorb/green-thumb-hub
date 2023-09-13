/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'head': 'Poppins, sans-serif',
        'body': 'Poppins, sans-serif',
      }
    },
  },
  plugins: [],
}

