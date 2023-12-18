/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  safelist: [{
    pattern: /hljs+/,
  }],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('tailwind-highlightjs')],
}