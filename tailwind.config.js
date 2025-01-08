/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        getInTouchActive: '#007CBC',
        getInTouchInActive: '#BFBFBF',
        primaryColor: '#b51f86'
      }
    }
  },
  plugins: []
}
