
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        "dark-blue": "#0A0F1F",
        "primary-blue": "#101629",
        "secondary-blue": "#112845",

      },
      fontSize: {
        'custom-3xl': '32px',
        "custom-4xl": "40px",
        "custom-md": "19px",

      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      lineHeight: {
        116: "116%",
        125: "125%",
        130: "130%",

      },
      screens: {
        "xs": "560px",
        "xxs": "410px"
      }

    },
  },
  plugins: [],
}

