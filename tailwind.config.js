/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d1c7',
          300: '#a3b3a3',
          400: '#7e917e',
          500: '#607460',
          600: '#4c5d4c',
          700: '#3f4d3f',
          800: '#354035',
          900: '#2d362d',
          950: '#1a201a',
        },
      },
    },
  },
  plugins: [],
};