/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        scheme: {
          greenOne: '#8fff6a',
          pink: '#e29ecd',
          white: '#ffffff',
          bgBlack: '#111112',
          darkerGrey: '#1c1c1e',
          darkGrey: '#262628',
          grey: '#888888'
        },
        gradients: {
          greenOne: '#fdfc47',
          greenTwo: '#8dfd44',
          greenThree: '#24fe41'
        }
      }
    },
  },
  plugins: [],
}
