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
      colors: {
        paletteGold: "#ffbc42",
        paletteBerry: "#d81159",
        paletteMauve: "#b56576",
        palettePink: "#e56b6f",
        paletteBeige: "#eaac8b",
      },
      fontFamily: {
        poppins: ["Poppins"],
        ptsans: ["PT Sans"],
      },
      lineHeight: {
        full: "100%",
        16: "4rem",
      },
      inset: {
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
      },
    },
  },
}
