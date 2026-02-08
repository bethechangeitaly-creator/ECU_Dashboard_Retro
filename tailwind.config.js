/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ecu-bg': '#f3f4f6', // Light gray background
        'ecu-text': '#1f2937', // Dark gray text
        'ecu-accent': '#3b82f6', // Example accent
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
