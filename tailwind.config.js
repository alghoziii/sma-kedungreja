module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          700: '#1d4ed8',
          800: '#0077FF',
          900: '#00C8FF',
        },
        'dark': {
          900: '#F0F0F0',


        }
      }
    },
  },
  plugins: [],
}