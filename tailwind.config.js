/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1C1A31',
        secondary: '#9263D9',
        accent: '#C0E021',
      },
    },
  },
  plugins: [],
};