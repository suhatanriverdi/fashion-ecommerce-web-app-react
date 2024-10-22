/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      tablet: "600px",
      // => @media (min-width: 576px) { ... }

      desktop: "1024px",
      // => @media (min-width: 960px) { ... }
    },
  },
  plugins: [],
};
