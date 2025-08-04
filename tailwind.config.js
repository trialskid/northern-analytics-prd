/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'na-primary': '#0A2540',
        'na-accent': '#1E90FF',
        'na-bg-light': '#F5F6F9',
        'na-highlight': '#FFB703',
      },
      borderRadius: {
        'na': '12px',
      },
      boxShadow: {
        'na': '0 4px 12px rgba(0,0,0,0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}