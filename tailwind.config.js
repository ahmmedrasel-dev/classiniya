/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#292929',
          secondary: '#05264e',
          accent: '#FBBF24',
          text: '#FFFFFF',
          background: '#181818'
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#05264e',
          accent: '#FBBF24',
          text: '#292929',
          background: '#F3F4F6'
        },
      },

      primary: '#3c65f5',
      secondary: '#05264e'
    },
  },
  plugins: [require("daisyui")],
}
