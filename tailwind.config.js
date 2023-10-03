/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        first: "#ffffff",
        second: "#676f9d",
        third: "#424769",
        fourth: "#2d3250",
        fifth: "#f9b17a",
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      screen: {
        "2xl": "1320px",
      },
      scale: {
        85: "0.85",
      },
    },
  },
  plugins: [],
};
