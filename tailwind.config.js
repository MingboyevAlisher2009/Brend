/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8CB7F5",
        secondary: "#0d6dfcff",
      },
      border: {
        borderStyle: "2px solid #0d6dfcff",
      },
      backgroundColor: {
        primary1: "#0d6dfcff",
        primary: "#E3F0FF",
        F38332: "#F38332",
        yellow: "#55BDC3",
      },
    },
  },
  plugins: [],
};
