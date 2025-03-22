/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom fonts here
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [  function ({ addUtilities }) {
    const newUtilities = {
      ".text-shadow": {
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.45)",
      },
      ".text-shadow-md": {
        textShadow: "3px 3px 6px rgba(0, 0, 0, 0.45)",
      },
    };
    addUtilities(newUtilities, ["responsive", "hover"]);
  },],
}
