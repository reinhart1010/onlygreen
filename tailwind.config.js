function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        current: withOpacityValue('currentColor'),
      },
      fontFamily: {
        "sans": ["Segoe UI Variable Text", "-apple-system", "BlinkMacSystemFont", "Inter", "Cantarell", "Open Sans", "Noto Sans", "Ubuntu", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        "serif": ["Lora", "ui-serif", "serif"]
      },
    },
  },
  plugins: [],
}
