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
    },
  },
}
