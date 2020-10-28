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
        paletteMaroon: "#821752",
        palettePink: "#DE4463",
        paletteBeige: "#EDC988",
        paletteIvory: "#F8EFD4",
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
