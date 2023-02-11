/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "info": "var(--info)",
        "white": "var(--white)",
      }
    },
  },
  plugins: [require("daisyui")],
}
