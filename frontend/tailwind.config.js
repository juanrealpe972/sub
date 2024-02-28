/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-thin": ["Roboto Thin", "sans-serif"],
        "roboto-light": ["Roboto Light", "sans-serif"],
        "roboto-regular": ["Roboto", "sans-serif"],
        "roboto-medium": ["Roboto Medium", "sans-serif"],
        "roboto-bold": ["Roboto Bold", "sans-serif"],
        "roboto-black": ["Roboto Black", "sans-serif"],
        // variantes italic
        "roboto-thin-italic": ["Roboto Thin Italic", "sans-serif"],
        "roboto-light-italic": ["Roboto Light Italic", "sans-serif"],
        "roboto-regular-italic": ["Roboto Italic", "sans-serif"],
        "roboto-medium-italic": ["Roboto Medium Italic", "sans-serif"],
        "roboto-bold-italic": ["Roboto Bold Italic", "sans-serif"],
        "roboto-black-italic": ["Roboto Black Italic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
