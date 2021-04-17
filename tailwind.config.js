// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["bookmania","stratos", ...defaultTheme.fontFamily.sans],
        serif: ["chaparral-pro", "plantin", ...defaultTheme.fontFamily.serif],
        mono: [
          "fira-mono",
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
