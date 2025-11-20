/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-heading': ['Playfair Display', 'Georgia', 'serif'],
        'serif-body': ['Source Serif Pro', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'charcoal': '#2c2c2c',
        'off-white': '#fafafa',
        'accent': '#4a90e2',
        'accent-dark': '#357abd',
      },
      maxWidth: {
        'reading': '65ch',
      },
    },
  },
  plugins: [],
}

