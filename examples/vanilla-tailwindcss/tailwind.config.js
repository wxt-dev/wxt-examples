import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./entrypoints/**/*.{html,ts}', './components/**/*.ts'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
