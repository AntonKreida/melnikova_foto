const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui-kit/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: {"min": "0px", "max": "767px"},
      md: {"min": "768px", "max": "1279px"},
      lg: {"min": "1280px", "max": "1599px"},
      xl: {"min": "1600px"},    
    },
    colors: {
      "black+": "#333333",
      "gray+": "#D9D9D9",
      "grayL": "#D6CFCE",
      ...defaultTheme.colors,
    },
    fontFamily: {
      default: ['Gabriela'],
      light: ['FuturaPT-Light'],
      cold: ['FuturaPT-BookCold'],
      book: ['FuturaPT-Book'],
      demi: ['FuturaPT-Demi'],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xs: ['8px', '12px'],
      base: ['12px', '16px'],
      md: ['20px', '28px'],
      lg: ['32px', '40px'],
      xl: ['36px', '46px'],
      sub: ['24px', '20px'],
    },
    letterSpacing: {
      subtitle: ".7em"
    },
    boxShadow: {
      custom: "0px 0px 10px 10px rgba(0, 0, 0, 0.03)",
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide::-webkit-scrollbar': {
          'display': 'none'
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', 
          'scrollbar-width': 'none'
        }
      })
    })
  ],
};
