/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        mammoth: "0.5rem",
      },
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "E2E2D5",
          200: "888883",
        },
      },
    },
  },
  plugins: [],
};
