import scrollbarHide from "tailwind-scrollbar-hide";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customeBg: "#202329",
      },
      keyframes: {
        scrolling13: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(20px)",
          },
        },
      },
      animation: {
        scrolling13: "scrolling13 1s linear infinite",
      },
    },
  },
  plugins: [scrollbarHide],
};
