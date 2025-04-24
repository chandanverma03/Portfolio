/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: {
          dark: '#0f0f0f',
          light: '#1a1a1a',
        },
        primary: {
          50: '#e6fbff',
          100: '#ccf7fe',
          200: '#99effd',
          300: '#66e7fc',
          400: '#33dffb',
          500: '#00d7fa',
          600: '#00acc8',
          700: '#008196',
          800: '#005664',
          900: '#002b32',
        },
        accent: {
          50: '#eafff3',
          100: '#d5ffe7',
          200: '#abffcf',
          300: '#80ffb7',
          400: '#56ff9f',
          500: '#2cff87',
          600: '#23cc6c',
          700: '#1a9951',
          800: '#116637',
          900: '#09331c',
        },
        success: {
          100: '#d1fae5',
          500: '#10b981',
          900: '#064e3b',
        },
        warning: {
          100: '#fef3c7',
          500: '#f59e0b',
          900: '#78350f',
        },
        error: {
          100: '#fee2e2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      boxShadow: {
        glow: '0 0 15px rgba(0, 215, 250, 0.5)',
        card: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};