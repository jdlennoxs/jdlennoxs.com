// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["stratos", "roc-grotesk", ...defaultTheme.fontFamily.sans],
        serif: ["plantin", ...defaultTheme.fontFamily.serif],
        mono: [
          "franklin-gothic-urw",
          "source-code-pro",
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
