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
        sans: ['var(--font-inter)']
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            a: {
              textDecoration: 'none'
            },
            h1: {
              fontWeight: '400'
            },
            h2: {
              fontWeight: '400'
            },
            h3: {
              fontWeight: '400'
            },
            ul: {
              '> li': {
                '*': {
                  marginTop: 0,
                  marginBottom: 0
                }
              }
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class'
};
