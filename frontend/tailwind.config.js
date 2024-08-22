/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "color-spaces": "#f8f9f9",
        "color-white": "#ffffff",
        "color-grays": "#5b5b5b",
        "color-blue": "#3e92d1",
      },
    },
  },
  plugins: [],
}

