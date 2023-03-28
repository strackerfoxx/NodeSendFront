/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html", "./pages/**/*.{js,ts,jsx,tsx}",
    "index.html", "./components/**/*.{js,ts,jsx,tsx}",
    "index.html", "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};