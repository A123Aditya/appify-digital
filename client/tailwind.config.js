/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0F2027',
        darkBlue: '#2C5364',
        purple: '#4A00E0',
        purpleLight: '#8E2DE2',
        cyan: '#00C6FF',
        purpleDark: '#6A11CB',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0F2027 0%, #2C5364 50%, #4A00E0 100%)',
        'gradient-premium': 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 50%, #00C6FF 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(74, 0, 224, 0.1) 0%, rgba(142, 45, 226, 0.1) 100%)',
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'premium': '0 20px 60px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(74, 0, 224, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(74, 0, 224, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};
