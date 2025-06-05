/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#591515',
        background: '#F7DCDC',
        'text-dark': '#591515',
        'text-text-light': '#FFFFFA',
        'form-box': '#42393F',
        'light-hover': '#994242',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
