module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brown-900': '#291515',
        'teal-200': '#30d5c8',
        'brown-100': '#baa3a3',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}