/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      sansVar: ['"Inter var"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "pale-blue": "#edf2f7",
      },
    },
  },
  purge: ["./index.html", "./src/**/*.ts"],
  variants: {},
  plugins: [],
}
