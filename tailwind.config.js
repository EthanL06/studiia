/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
    },
    
    extend: {
      colors: {
        primary: '#201C37',
        secondary: '#002BFF',
      },
      screens: {
        '3xl': '2000px',
      }
    }
  },
  plugins: [],
}
