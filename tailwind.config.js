/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yancai-brown': '#8c4322',
        'yancai-dark': '#332c22',
        'yancai-bg': '#f4f1ea',
      },
      fontFamily: {
        serif: ['"Source Han Serif SC"', '"Source Han Serif"', 'serif'],
        sans: ['"Source Han Sans SC"', '"Source Han Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
