/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "black-50": "#f5f5f5",
        "black-100": "#1a1a1a",
        "black-200": "#0d0d0d",
        "white-50": "#fafafa",
      },
    },
  },
  plugins: [],
};
