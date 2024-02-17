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
        primary: "#0d6dfcff",
      },
    },
  },
  plugins: [],
};
