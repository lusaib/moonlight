/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        "xs-s": "371px",
        "xs-m": "471px",
        "xs-m-500": "500px",
        sm: "640px",
        md: "768px",
        "md-s": "865px",
        "md-m": "926px",
        lg: "1024px",
        "lg-m": "1238px",
        xl: "1280px",
        "xl-m": "1400px",
      },
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        tertiary: "#27AE60",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
