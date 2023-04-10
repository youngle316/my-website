/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif']
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            a: {
              textDecoration: 'none'
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
