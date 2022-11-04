/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'rgb(15 23 30)',
        dark: 'rgb(8 8 8)',
      },
      backgroundImage: {
        'main-background': "url('/src/assets/background.svg')",
      },
    },
  },
  plugins: [],
};
