/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "25px": "25px",
      },
      borderWidth: {
        5: "5px",
      },
      colors: {
        "light-grey": "#f0f0f0", // Very light grey
        "gray-300": "#aea9bb",
      },
    },
  },
  plugins: [],
};
