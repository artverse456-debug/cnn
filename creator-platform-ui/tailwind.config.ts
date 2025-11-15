import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './store/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f7ff',
          100: '#ebe8ff',
          200: '#d6d0ff',
          300: '#b3a5ff',
          400: '#8b6bff',
          500: '#6e41ff',
          600: '#5a27db',
          700: '#4b1fad',
          800: '#3d1c85',
          900: '#2f1560'
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(135deg, rgba(255,255,255,0.08) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.08) 25%, transparent 25%), linear-gradient(45deg, rgba(255,255,255,0.08) 25%, transparent 25%), linear-gradient(315deg, rgba(255,255,255,0.08) 25%, transparent 25%)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};

export default config;
