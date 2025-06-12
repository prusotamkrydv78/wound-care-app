const { theme } = require('./src/styles/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-blue': 'rgb(var(--medical-blue) / <alpha-value>)',
        'medical-green': 'rgb(var(--medical-green) / <alpha-value>)',
        'medical-light': 'rgb(var(--medical-light) / <alpha-value>)',
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
      },
      colors: theme.colors,
      fontFamily: theme.fonts,
      spacing: theme.spacing,
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
