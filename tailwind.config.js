/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-primary': 'var(--color-primary)',
        'theme-primary': 'var(--color-primary)',
        'theme-gold': 'var(--color-gold)',
        'theme-backgroundcolor': 'var(--background-color)',
      },
      textColor: {
        'theme-primary': 'var(--color-primary)',
        'theme-gold': 'var(--color-gold)',
      }
    },
  },
  plugins: [],
}

