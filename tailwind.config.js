module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  plugins: [
    require("@ky-is/tailwindcss-plugin-width-height")({
      variants: ["responsive"],
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        staatliches: ["Staatliches"],
        montserrat: ["Montserrat"],
      },
      colors: {
        themeYellow: "#DFCC1C",
        themeBlue: "#1CDFD3",
        themePink: "#DF1CB4",
        menuOutlineGray: "#BABABA",
      },
      width: {
        80: "20rem",
        88: "22rem",
      },
      margin: {
        14: "3.5rem",
      },
      inset: {
        "1/4": "25%",
        "1/3": "33.333333%",
        "1/2": "50%",
        "2/3": "66.666667%",
        "3/4": "75%",
      },
      spacing: {
        "1/4": "25%",
        "1/3": "33.333333%",
        "1/2": "50%",
        "2/3": "66.666667%",
        "3/4": "75%",
      },
    },
  },
}
