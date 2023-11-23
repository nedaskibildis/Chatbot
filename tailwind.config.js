/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primaryBlack: '#242424',
        darkBlue: '#164863',
        midBlue: '#427D9D',
        lightBlue: '#9BBEC8',
        lightestBlue: '#DDF2FD',
        // Add more custom colors as needed
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}

