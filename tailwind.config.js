/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto Slab', 'serif'],
      },
      colors: {
        redOrange: '#F05941',
        greyishBlue: '#749BC2',
        lightOrange: '#FFE4D6',
        lightGrey: '#F0F0F0',
        lightBlack: '#272829',
      },
    },
  },
  plugins: [],
}

