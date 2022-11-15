

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'whitesmoke': '#F8FBFF',
        'primary': '#0172B5',
        'text-dark': '#070707',
        'text-light': '#5C5C5C',
        'accent': '#F15B24',
        'accent-dark': '#868c68',
      },
      backgroundImage: {
        'mara-bg': "url('assets/mara.jpg')",
      },
    },
  },
  plugins: [],
}
