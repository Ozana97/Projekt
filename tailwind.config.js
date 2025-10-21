/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Platform-specific system fonts
        roboto: ['Roboto', 'system-ui', 'sans-serif'], // Android default
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'], // iOS default
        
        // Custom fonts for both platforms
        // For Android, use the exact font file name without extension
        // For iOS, you can use the PostScript name or font family name
        playfair: ['PlayfairDisplay-Regular', 'serif'],
        'playfair-medium': ['PlayfairDisplay-Medium', 'serif'],
        'playfair-bold': ['PlayfairDisplay-Bold', 'serif'],
      },
    },
  },
  plugins: [],
};