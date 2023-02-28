/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-sidenav": "url('./src/assets/bg-sidenav.png')",
      },
      fontFamily: {
        poppins: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
