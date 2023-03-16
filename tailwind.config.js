/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          brandColor:"#4C3398",
          primaryColor:"#5d3ebc",
          secondaryColor:"#8B3EBC",
          whitebgColor:"#FAFAFA",
          borderColor:"#DFDEE2",
          brandYellowColor:"#ffd300",
          cardbgColor:"#F3F0FE",
          textGrayColor:"#737373",
          textGrayStormColor:"#697488",
          textBlackColor:"#191919",
          footerTextColor:"#525252",
          textPurpleColor:"#7849f7",
      }
    },
  },
  plugins: [],
}