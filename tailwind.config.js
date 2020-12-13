const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js", "./flareact.config.js"],
  darkMode: "media",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      height: (theme) => ({
        "(screen-16)": `calc(100vh - ${theme("spacing.16")})`,
      }),
      maxHeight: (theme) => ({
        sm: "30rem",
        "(screen-16)": `calc(100vh - ${theme("spacing.16")})`,
      }),
      boxShadow: {
        px: "0 0 0 1px rgba(0, 0, 0, 0.5)",
        link:
          "inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.4)",
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
              code: { color: theme("colors.blue.400") },
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300"),
            },
            h1: { color: theme("colors.gray.100") },
            h2: { color: theme("colors.gray.100") },
            h3: { color: theme("colors.gray.100") },
            h4: { color: theme("colors.gray.100") },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            code: { color: theme("colors.gray.100") },
            strong: { color: theme("colors.gray.300") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
    typography: ["dark"],
  },
};
