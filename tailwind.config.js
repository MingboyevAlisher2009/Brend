/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '10': "63px",
        '20': "140px",
        '50': "250px",
        '100': "1220px",
        'content-top': "1200px",
        '13': "110px",
        'one': "10px",
        'two': "9px",
        'cent':"7px",
      },
      colors: {
        primaryS: "#0D6EFD",
        primary: "#8CB7F5",
        secondary: "#0d6dfcff",
        red: "#EB001B",
        gray500: "#8B96A5",
        gray600: "#505050",
      },
      border: {
        borderStyle: "2px solid #0d6dfcff",
      },
      backgroundColor: {
        primary1: "#0d6dfcff",
        primary: "#E3F0FF",
        F38332: "#F38332",
        yellow: "#55BDC3",
        gray60: "#606060",
        red: "#FFE3E3",
        black: "#1C1C1C",
        gray100: "#F7FAFC",
      },
      backgroundImage: {
        "hero-pattern": "url('./img/image 102.png')",
        "gradient-radial":
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
      },
    },
  },
  plugins: [],
};
