/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primaryBlack: '#242424',
        secondaryBlack: '#333333',
        darkBlue: '#164863',
        midBlue: '#427D9D',
        lightBlue: '#9BBEC8',
        lightestBlue: '#DDF2FD',
        primaryGray: '#E7E5E5',
        lightGray: '#EBEBEB'
        // Add more custom colors as needed
      },
      dropShadow: {
        'Sidebar': '0 0px 10px rgba(66, 125, 157, 0.25)',
      }
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}

