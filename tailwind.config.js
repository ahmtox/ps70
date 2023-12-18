/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [{
    pattern: /hljs+/,
  }],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('tailwind-highlightjs')],
}