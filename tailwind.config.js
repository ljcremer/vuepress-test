module.exports = {
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Nunito: "Nunito",
        OpenSans: "OpenSans",
        Montserrat: "Montserrat",
      },
      colors: {
        teslaGray: "#333337",
      },
      width: {
        84: "21rem", // tab selector width
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/line-clamp"),
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    // require("tt-ui-comp-lib/themes/default"),
  ],
};
