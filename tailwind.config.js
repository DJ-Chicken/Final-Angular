/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#097a80",
        dark: "#173c3e",
        gray: "#24282C",
        notGray: "#818181",
        lightGray: "#d7d8d7",
        notWhite: "#f7f8fa",
        crop: "#097a8070",
      },
    },
  },
  plugins: [],
};
