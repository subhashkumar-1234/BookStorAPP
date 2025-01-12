/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  // theme: {
  //   extend: [],
  // },
  plugins: [require("daisyui")],
};
