/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/tw-elements/dist/js/**/*.js"],
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
  theme: {
    container: {
      center: true,
      padding: "32px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",

        dark: "#0f172a",
        secondary: "#64748b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
