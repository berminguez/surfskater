const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      primary: '#00C4CB',
      gray: colors.trueGray,
      secondary: '#F2CB00',
      tertiary: '#009999',
      niceblack: '#272727',
      bone: '#E2E2E2',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
