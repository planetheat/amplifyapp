module.exports = {

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'winter': "url('img/ph_background_snow.jpeg')",
      },
    },
  },
  variants: {
    extend: {
      colors: {
        "darkest-blue": "#120D31",
        "at-red": "#EF3E36",
        "ruby": "#D81E5B",
        "pumpkin": "#FC7A1E",
        "yellow-orange": "#FEB95F",
        "egyptian-blue": "#0E34A0",
        "peach": "#FCBF9C"
      },

    },
  },
  plugins: [],
}