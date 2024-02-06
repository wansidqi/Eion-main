/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom:
          '0 0 0 1px rgba(0, 0, 0, 1), 0 1px 2px 0 rgba(1, 133, 255, 1), 0 3px 4px 0 rgba(7, 40, 71, 1), 0 0 0 2px rgba(25, 27, 30, 1), 0 2px 4px 2px rgba(255, 54, 10, 1), 0 0 0 3px rgba(255, 255, 255, 1), 0 2px 6px 4px rgba(246, 206, 83, 1)',
      },
      transitionDuration: {
        15000: '15000ms', // Custom duration for the 'duration-10000' class (10 seconds)
      },
    },
    screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'sxl': '1900px',
      '4k': '4000px',
    },
  },
  plugins: [],
};
