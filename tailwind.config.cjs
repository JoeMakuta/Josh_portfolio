/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans serif'],
    },
    extend: {
      colors: {
        'main_color': '#E15286',
      },
      backgroundImage: {
        'left_bg': "url('/src/assets/object-5-1-300x274.png')",
        'right_bg': "url('/src/assets/color-1-133x150.png')",
        'main_bg': "url('/src/assets/Back_Portfolio1.png')",
      }
    },
  },
  plugins: [],
}
