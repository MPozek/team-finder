const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.tsx", "index.html"],
  theme: {
    extend: {
      borderWidth: {
        5: "5px",
      },
      width: {
        21: "5.25rem",
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        darkbg: colors.neutral["800"],
        lightbg: colors.gray["600"],
        'lightbg-highlight': colors.gray["500"],
        primary: "#60c2a5",
        'primary-highlight': "#60c2a5",
        accent1: "#60c2a5",
        accent2: "#60c2a5",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.white"),
          },
        },
      }),
      fill: (theme) => theme("colors"),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
