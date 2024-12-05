/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      white: '#ffffff',
      danger: '#e3342f',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),

    extend: {
      colors: {
        neongreen: '#39FF14',
        neonpurple: '#B026FF',
        neonblue: '#1B03A3',
        neonpink: '#FF00FF',
        neonred: '#FF0000',
        neonorange: '#FFA500',
        // Add other custom colors here
      },
      backgroundColor: {
        //DEFAULT: '#1F2937', // gray-800
        DEFAULT: '1F2937',
        default: '#1F2937', // gray-800
        light: '#F3F4F6', // gray-100
        dark: '#111827', // gray-900
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
      textColor: {
        DEFAULT: '#D1D5DB', // gray-300
      },
      borderWidth: {
        3: '3px',
        4: '4px',
        5: '5px',
        // Add as many as you need...
      },
    },
  },
  plugins: [],
};
