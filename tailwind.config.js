/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        commonWhite: '#FFF',
        cardBlack: '#2F2F2F',
        deepViolet: '#21092F',
        inputHover: '#6348FE',
        errorRed: '#FF5050',
        commonGrey: '#8F8694'
      }
    },
  },
  plugins: [],
}

