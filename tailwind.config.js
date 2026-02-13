/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",   // Scans all files in src/ including your Components folder
  ],
  darkMode: 'class',                 // Supports your theme toggle (light/dark)
  theme: {
    extend: {
     
    },
  },
  plugins: [],
}