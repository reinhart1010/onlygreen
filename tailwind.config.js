function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

const sansSerifFontFamilies = [
  "Segoe UI Variable Text",
  "-apple-system",
  "BlinkMacSystemFont",
  "Inter",
  "Segoe UI",
  "Cantarell",
  "Open Sans",
  "Noto Sans",
  "Piboto",
  "Ubuntu",
  "Roboto Flex",
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "Noto Color Emoji"
];

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeDilanMilea: {
          100: "#331705",
          300: "#66300C",
          500: "#994A15",
          700: "#CC6521",
          900: "#FF832E"
        },
        orangeGalihRatna: {
          100: "#331705",
          300: "#663414",
          500: "#99572E",
          700: "#CC8152",
          900: "#FFB080"
        },
        current: withOpacityValue('currentColor'),
      },
      fontFamily: {
        "sans": sansSerifFontFamilies,
        "serif": ["Lora", "ui-serif", "serif"]
      },
    },
  },
  plugins: [],
}
