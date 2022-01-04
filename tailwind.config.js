const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.js','./src/styles/index.css'],
  },
  corePlugins: {
   fontFamily: false,
  },
  theme: {
    screens:{
      sm: '600px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      xxl: '1536px'
    },
    colors: {
      primary: colors.sky,
      secondary: colors.black,
      blue: colors.sky,
      white: colors.white,
      indigo: colors.indigo,
      gray: colors.blueGray,
      black: colors.black,
      green: colors.emerald,
      red: colors.rose,
      orange: colors.amber,
      transparent: 'transparent',
    },
    extend: {
      outline: {
        gray: '2px solid #0F172A',
        red: '2px solid #FF0000',
        blue: ['2px solid #0ea5e9', '1px']
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['focus', 'hover'],
    },
  },
  plugins: [],
}
