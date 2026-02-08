/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro-black': '#000000',
        'retro-white': '#ffffff',
        'retro-gray': '#555555',
        'retro-light-gray': '#aaaaaa',
        'retro-red': '#ff5555',
        'retro-green': '#55ff55',
        'retro-blue': '#5555ff',
        'retro-yellow': '#ffff55',
        'retro-cyan': '#55ffff',
        'retro-magenta': '#ff55ff',
        'retro-orange': '#ffaa00',
        'retro-dark-blue': '#0000aa',
        'retro-dark-green': '#00aa00',
        'retro-dark-cyan': '#00aaaa',
        'retro-dark-red': '#aa0000',
        'retro-dark-magenta': '#aa00aa',
        'retro-brown': '#aa5500',
      },
      fontFamily: {
        'pixel-header': ['"Press Start 2P"', 'cursive'],
        'pixel-body': ['"VT323"', 'monospace'],
        'sans': ['"VT323"', 'monospace'], // Default to pixel-body for a true retro feel
      },
    },
  },
  plugins: [],
}
