import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: "Muli",
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ]
    }
  ],
  headerFontFamily: [
    "Muli",
  ],
  bodyFontFamily: ["Muli"],
});

export default typography;
