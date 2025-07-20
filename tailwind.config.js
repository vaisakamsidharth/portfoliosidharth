
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sectionColor: "hsl(209, 100%, 97%)",
        darkBodycolor: "hsl(216, 100%, 4%)",
        darkSectionColor: "hsl(211, 100%, 12%)",
        primaryColorLight: "hsl(209, 74%, 45%)",
        whiteColor: "#fff",
        textColor: "#DDD",
        primaryColor: "#1F2937",
        secondaryColor: "red"
      },
      keyframes:{
        move:{
          "50%": {Transform: "scale(1.1)"}
        }
      },
      animation:{
        scaleAnimation:"move"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Londrina: ['Londrina Outline', 'sans-serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "10px",
          md: "30px"
        }
      }
    }
  },
  plugins: [],
}
