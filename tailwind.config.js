const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: {"min": "0px", "max": "767px"},
      md: {"min": "768px", "max": "1399px"},
      lg: {"min": "1440px", "max": "1599px"},
      xl: {"min": "1600px"},  
    },
    extend: {
      colors: {
        "black+": "#333333",
        "gray+": "#D9D9D9",
        "grayL": "#D6CFCE",
        "with": "#FFFFFF",
      },
    },
    fontFamily: {
      default: ['Gabriela'],
      light: ['FuturaPT-Light'],
      cold: ['FuturaPT-BookCold'],
      book: ['FuturaPT-Book'],
      demi: ['FuturaPT-Demi'],
      med: ['FuturaPT-Medium'],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xs: ['8px', '12px'],
      base: ['12px', '16px'],
      md: ['18px', '20px'],
      lg: ['32px', '40px'],
      xl: ['36px', '46px'],
      sub: ['24px', '20px'],
      liBase: ['14px', '16px']
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
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
