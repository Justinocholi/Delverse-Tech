/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0A0B',
          secondary: '#111113',
          card: '#151518',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.16)',
        },
        electric: {
          blue: '#0066FF',
          blueHover: '#0052CC',
          cyan: '#00F0FF',
          glow: 'rgba(0, 102, 255, 0.4)',
        },
        brand: {
          navy: '#0A0A0B',
          surface: '#111113',
          card: '#151518',
          border: 'rgba(255, 255, 255, 0.08)',
          blue: '#0066FF',
          blueHover: '#0052CC',
          teal: '#00D2D3',
          violet: '#7C3AED',
          cyan: '#06B6D4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.03em',
        widest: '0.25em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'float': 'float 7s ease-in-out infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 24s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
        'glow-electric': '0 0 35px -5px rgba(0, 102, 255, 0.45)',
        'glow-cyan': '0 0 35px -5px rgba(0, 240, 255, 0.35)',
        'pill-cta': '0 0 25px -4px rgba(0, 102, 255, 0.55)',
      },
    },
  },
  plugins: [],
};
