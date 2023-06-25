/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const rotateY = plugin(function ({addUtilities}) {
  addUtilities ({
    ".rotate-y-180": {
      transform: "rotateY(180deg)"
    },
    ".-rotate-y-180": {
      transform: "rotateY(-180deg)"
    }
  });
})


module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["*"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "3.125rem"
      }
    },
    extend: {},
  },
  plugins: [rotateY],
}

