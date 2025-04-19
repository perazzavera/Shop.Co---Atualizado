/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/**/*.js",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require("preline/plugin"), // <- Isso também
  ],
};
