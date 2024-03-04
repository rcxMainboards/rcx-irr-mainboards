import { nextui } from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: { newBase: ['Inter', 'sans-serif'] },
      colors: { 'blue-start': '#244a65', 'blue-end': '#7cb4df' },
      backgroundImage: (theme) => ({
        'gradient-l': `linear-gradient(270deg, ${theme('colors.blue-start')} 0%, ${theme('colors.blue-end')} 100%)`
      })
    }
  },
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'light', // default theme from the themes object
      defaultExtendTheme: 'light', // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            text: {
              50: '#f0f3f4',
              100: '#e1e7ea',
              200: '#c3cfd5',
              300: '#a5b7c0',
              400: '#889faa',
              500: '#6a8795',
              600: '#556c77',
              700: '#3f515a',
              800: '#2a363c',
              900: '#151b1e',
              950: '#0b0d0f'
            },
            background: {
              50: '#eef3f6',
              100: '#dee7ed',
              200: '#bcd0dc',
              300: '#9bb8ca',
              400: '#79a0b9',
              500: '#5889a7',
              600: '#466d86',
              700: '#355264',
              800: '#233743',
              900: '#121b21',
              950: '#090e11'
            },
            primary: {
              50: '#ecf3f8',
              100: '#dae7f1',
              200: '#b4d0e4',
              300: '#8fb8d6',
              400: '#69a1c9',
              500: '#4489bb',
              600: '#366e96',
              700: '#295270',
              800: '#1b374b',
              900: '#0e1b25',
              950: '#070e13'
            },
            secondary: {
              50: '#eaf3fa',
              100: '#d6e8f5',
              200: '#add0eb',
              300: '#84b9e1',
              400: '#5ba1d7',
              500: '#328acd',
              600: '#286ea4',
              700: '#1e537b',
              800: '#143752',
              900: '#0a1c29',
              950: '#050e15'
            },
            accent: {
              50: '#e9f4fc',
              100: '#d2e8f9',
              200: '#a5d1f3',
              300: '#78baed',
              400: '#4ba3e7',
              500: '#1f8ce0',
              600: '#1870b4',
              700: '#125487',
              800: '#0c385a',
              900: '#061c2d',
              950: '#030e16'
            }
          } // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {} // dark theme colors
        }
        // ... custom themes
      }
    })
  ]
}
