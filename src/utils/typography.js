import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Poppins",
      styles: ["Light 300", "Bold 700", "Extra-bold 800", "Black 900"],
    },
    {
      name: "PT Serif",
      styles: [],
    },
  ],
  headerFontFamily: ["Poppins"],
  bodyFontFamily: ["PT Serif"],
})

export default typography
