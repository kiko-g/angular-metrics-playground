/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d9488",
        secondary: "#3b82f6",
        navy: "#1a202c",
        dark: "#242936",
        darker: "#1e222c",
        darkest: "#1a1e28",
        darkish: "#333640",
        light: "#f2f4f7",
        lighter: "#f7f7f7",
        lightest: "#fcfcfc",
        lightish: "#ebedf0",
      },
      maxWidth: {
        screen: "100vw",
      },
      fontSize: {
        xxs: "0.6rem",
      },
      fontFamily: {
        prose: ["Inter", ...defaultTheme.fontFamily.sans],
        headings: ["Lexend", ...defaultTheme.fontFamily.sans],
        code: ["Fira Code", ...defaultTheme.fontFamily.mono],
        flow: "Flow",
      },
    },
  },
  plugins: [],
};
