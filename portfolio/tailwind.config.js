/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      borderWidth: {
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '20': '20px'
    },
    extend: {
  animation: {
    marquee: 'marquee 20s linear infinite',
  },
  keyframes: {
    marquee: {
      '0%': { transform: 'translateX(0%)' },
      '100%': { transform: 'translateX(calc(-100% / 2))' }, 
    },
  },
},
  },
  plugins: [],
};