/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "900px",
      // => @media (min-width: 900px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        primary: "#1f3e72",
        secondary: "#ffffffc7",
        textsecondary: "#8c8b8b",
        bordercolor: "rgba(255, 255, 255, 0.12)",
        linear100: "rgba(255,255,255,0)",
        linear200: "rgba(136, 160, 255, 0.26)",
        black: "#131110",
        white: "#ffffff",
        bluegradient: "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
        gradients: "bg-gradient-to-r from-#4066ff-500 to-#2949c6-500",
        orangegradient: "linear-gradient(270deg, #ffb978 0%, #ff922d 100%)",
        blue: "#4066ff",
        moreblue: "#2949c6",
        footerblue: "#4161df",
        footerborder: "#5d77d6",
        footerbtn: "#5a73d7",
        footersec: "rgba(255, 255, 255, 0.587)",
        orange: "#ffb978",
        oranger: "#ff922d",
        lightBlue: "#eeeeff",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
