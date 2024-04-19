/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        "light-blue": " hsl(206, 94%, 87%)",
        mag: "hsl(217, 100%, 97%)",
        "light-gray": " hsl(229, 24%, 87%)",
        "marin-blue": "hsl(213, 96%, 18%)",
        "cool-gray": "hsl(231, 11%, 63%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        alabaster: "hsl(231, 100%, 99%)",
      },
    },
  },
  plugins: [],
};
