/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'gray':'#D7D7D7',
        'gray-50':'#FAFAFA',
        'gray-400':'#c2c2c2',
        'gray-500': '#6B7280',
        'gray-700':'#374151',
        'gray-900':'#111827',
      }
    },
  },
  plugins: [],
}

