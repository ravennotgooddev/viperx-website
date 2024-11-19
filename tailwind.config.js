/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        blacktransparent: "rgba(0,0,0, 0.5)",
        blackhover: "rgba(0,0,0, 0.75)",
      },
      colors: {
        brand: "#5686D2"
      },
      boxShadow: {
        button: "0px 0px 10px #5686D2",
        feature: "0px 0px 20px -5px #464242"
      },
      fontSize: {
        dynamictitle: "clamp(2rem, 1.6rem + 2vw, 3rem)",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
