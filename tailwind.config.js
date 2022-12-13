/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      brand: '#FF6600',
      primary: '#0062FF',
      secondary: '#6C757D',
      success: '#3DD598',
      warning: '#FFC542',
      error: '#FC5A5A',
      'secondary-o': '#FF974A',
      'secondary-b': '#50B5FF',
      'secondary-g': '#82C43C',
      'secondary-p': '#A461D8',
      'secondary-pk': '#FF9AD5',
      dark: {
        0: '#FFFFFF',
        20: '#FAFAFB',
        25: '#F5F8FA',
        30: '#F1F1F5',
        40: '#E2E2EA',
        50: '#D5D5DC',
        60: '#B5B5BE',
        70: '#92929D',
        80: '#696974',
        90: '#44444F',
        100: '#171725',
      },
    },
  },
  plugins: [],
};
