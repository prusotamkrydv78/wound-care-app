 
const { theme } = require('./src/styles/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'medical-blue': 'rgb(var(--medical-blue) / <alpha-value>)',
        'medical-green': 'rgb(var(--medical-green) / <alpha-value>)',
        'medical-light': 'rgb(var(--medical-light) / <alpha-value>)',
      },
      colors: theme.colors,
      fontFamily: theme.fonts,
      spacing: theme.spacing,
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes when using the 'form-' prefix
    }),
  ],
}
