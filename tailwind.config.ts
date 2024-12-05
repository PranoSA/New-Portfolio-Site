import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    textColor: {
      default: '#D1D5DB',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
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
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        // Add as many as you need...
      },
    },
  },
  plugins: [],
};
export default config;
