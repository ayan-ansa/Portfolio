/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        media1000: "1000px",
        media668: "668px",
        media460: "460px",
        media372: "372px",
      },
      transitionTimingFunction: {
        "jump": "cubic-bezier(0.68, -0.55, 0.265, 1.55)", 
      },
    },
  },
  plugins: [],
};
