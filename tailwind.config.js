/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tt-hoves-medium': ['TT Hover Pro Trial Medium', "sans-serif", "monospace", "system-ui", "ui-sans-serif", "ui-serif", "sans-serif", "apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        'tt-hoves-regular': ['TT Hover Pro Trial Regular', "sans-serif", "monospace", "system-ui", "ui-sans-serif", "ui-serif", "sans-serif", "apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      colors: {
        'soft-white': '#F3F5F7',
        'primary-blue': '#1D387F',
        'primary-black': '#252A2E'
      },
      fontSize: {
        'base': '18px',
      },
      screens: {
        '2xl': {'max': '1660px'},
        'xl': {'max': '1280px'},
        'lg': {'max': '1024px'},
        'md': {'max': '768px'},
        'sm': {'max': '640px'},
        'xs': {'max': '320px'},
      }
    },
  },
  plugins: [],
}

