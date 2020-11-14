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
        themeDarkGray: "#BABABA",
        themeLightGray: "#EBEBEB",
      },
      width: {
        80: "20rem",
        88: "22rem",
        136: "34rem",
        "11/25": "44%",
        "23/50": "46%",
        "12/25": "48%",
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
        "1/10": "10%",
        "-4": "-1rem",
        banner: "-5%",
      },
      spacing: {
        "1/4": "25%",
        "1/3": "33.333333%",
        "1/2": "50%",
        "7/12": "58.333333%",
        "2/3": "66.666667%",
        "3/4": "75%",
      },
    },
  },
}
