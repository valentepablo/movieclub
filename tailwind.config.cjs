/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darker: 'rgb(17 17 17)',
      },
    },
  },
  plugins: [],
};
