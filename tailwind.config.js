/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree"],
      },
      boxShadow: {
        'custom': '8px 8px 0px 0px #000',
      }
    },
  },
  plugins: [],
};
