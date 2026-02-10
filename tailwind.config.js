/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',    // iPhone SE, small androids
      'sm': '375px',    // Standard Mobile (iPhone X/11/12/13/14)
      'md': '428px',    // Large Phones (Pro Max, Plus)
      'lg': '768px',    // Tablets
      'xl': '1024px',   // Desktop
      '2xl': '1280px'   // Large desktop
    },
    extend: {
      fontSize: {
        'xs': ['0.85rem', { lineHeight: '1.25rem' }],   // ~13.6px -> Increased from 12px
        'sm': ['1rem', { lineHeight: '1.5rem' }],       // 16px -> Increased from 14px
        'base': ['1.125rem', { lineHeight: '1.75rem' }], // 18px -> Increased from 16px
      },
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
        'retro-dark-gray': '#444444',
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
