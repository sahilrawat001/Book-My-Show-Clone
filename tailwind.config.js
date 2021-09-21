module.exports = {
  //purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        darkBackground :{
  50: '#efeffd',
  100: '#d1d2e4',
  200: '#b2b4cc',
  300: '#9396b7',
  400: '#7678a2',
  500: '#5c5f88',
  600: '#474a6b',
  700: '#33354d',
  800: '#1d2030',
  900: '#070b16',
        },
        premier: {
          50: "#edf4fd",
          100: "#ced7e5",
          200: "#afbbcf",
          300: "#909fbb",
          400: "#7081a7",
          500: "#57668e",
          600: "#444d6f",
          700: "#303650",
          800: "#2b3147",
          900: "#080d17",
      },
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
