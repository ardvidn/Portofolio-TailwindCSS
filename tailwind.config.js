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
      keyframes: {
        blob: {
          "0%": {
            "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
      },
      animation: {
        blob: "blob 3s ease-in-out infinite",
      },
      scale: {
        85: "0.85",
      },
    },
  },
  plugins: [],
};
