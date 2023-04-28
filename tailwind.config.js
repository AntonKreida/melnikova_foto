/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
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
    },
    fontFamily: {
      default: ['Gabriela'],
      light: ['FuturaPT-Light'],
      cold: ['FuturaPT-BookCold'],
      book: ['FuturaPT-Book']
    },
    fontSize: {
      title: ['32px', '41px'],
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
