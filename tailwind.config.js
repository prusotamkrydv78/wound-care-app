const { theme } = require('./src/styles/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: theme.colors,
    },
  },
  plugins: [],
}
