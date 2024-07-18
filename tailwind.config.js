/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryLight: '#FFFABC',
      primaryDark: '#FFED97',
      secondary: "#C93F27",
      orange: "#E5A968",
      orangeDark: "#FFAD26",
      pink: '#FF5EEF',
      green:"#97FFAE",
      brown:"#42210B",
      black:"#000000",
      white:"#ffffff",
    },
    fontFamily: {
      'primary-als': ['Als Lamon'],
      'primary-glow': ['Glowworm'],
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg, #EF6759 0%, #FFF280 32.5%, #FFDAC5 57%, #BFEDD4 82.5%)',
    },
    keyframes: {
      scrollForward: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(calc(-100px * 7))' },
      },
      scrollBackward: {
        '0%': { transform: 'translateX(calc(-100px * 7))' },
        '100%': { transform: 'translateX(0)' },
      },
      loading: {
        '0%, 100%': {
          transform: 'scale3d(0.9, 0.9, 0.9)',
          easing: 'ease-out',
        },
        '50%': {
          transform: 'scale3d(1.2, 1.2, 1.2)',
          easing: 'ease-in',
        },
      },
    },
    animation: {
      scrollForward: 'scrollForward 30s linear infinite',
      scrollBackward: 'scrollBackward 30s linear infinite',
      loading: 'loading 1s infinite',
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('children', '&>*')
    })
  ],
}