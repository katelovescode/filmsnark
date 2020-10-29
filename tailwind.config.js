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
        themeGray: "#E7E7E7",
        themeBlack: "#202020",
        themeYellow: "#F5E41A",
        themeOrange: "#FF9149",
        themePink: "#BE1564",
        themeBlue: "#1866B3",
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
