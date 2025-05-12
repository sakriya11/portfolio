/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img: "url('src/assets/bg.jpg')",
        secImg: "url('src/assets/second.jpg')",
        thirdImg: "url('src/assets/third.jpg')",
      },
      colors: {
        customeBg: "#202329",
      },
    },
  },
  plugins: [],
};
