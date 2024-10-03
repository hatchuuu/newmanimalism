/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // Add all variations with the same value
        'custom-webkit': 'inset -22px 10px 36px 53px rgba(29,35,42,1)',  // For Webkit-based browsers
        'custom-moz': 'inset -22px 10px 36px 53px rgba(29,35,42,1)',     // For Mozilla-based browsers
        'custom-default': 'inset -22px 10px 36px 53px rgba(29,35,42,1)', // Default box-shadow
      },
      fontFamily:{
        'neu' : ['Public Sans', 'sans-serif'],
        'outfit' : ['Outfit', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
