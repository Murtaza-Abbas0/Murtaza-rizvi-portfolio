/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka", "sans-serif"],
        Bellota: ["Bellota Text", "cursive"],
      },
      backgroundImage: {
        HeroImage: ' url("./assets/Images/heroImage.webp")',
      },
    },
  },
  plugins: [],
};
