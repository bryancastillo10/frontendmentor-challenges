/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
      "primary": "hsl(233,26%,24%)",
      "secondary": "hsl(136,65%,51%)",
      "tertiary": "hsl(192,70%,51%)",
      "neutral-dark": "hsl(233,8%,62%)",
      "neutral-light": "hsl(220,16%,96%)",
      "neutral-lg-light":"hsl(0,0%,98%)",
      "white":"hsl(0,0%,100%)"
    },
      fontFamily: {
        sans:['Public Sans,sans-serif']
      },
      fontSize: {
        base:"18px",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold:700
      }
    },
   
  },
  plugins: [],
}

