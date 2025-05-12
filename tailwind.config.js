/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img: "url('./assets/bg.jpg')",
        secImg: "url('./assets/second.jpg')",
        thirdImg: "url('./assets/third.jpg')",
      },
      colors: {
        customeBg: "#202329",
      },
    },
  },
  plugins: [],
};
