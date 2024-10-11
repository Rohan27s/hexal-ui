import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',  // Dark background color
        secondary: '#34D399',  // Accent color for buttons, links
        light: '#F3F4F6',  // Light background or text color
        highlight: '#38BDF8',  // A bright color for text highlights
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '30rem', // Added new spacing units for larger elements
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'horizontal-move': 'horizontalMove 15s linear infinite',
        'diagonal-move': 'diagonalMove 10s linear infinite',
        'vertical-move': 'verticalMove 10s linear infinite',
        'gradient-move': 'gradientMove 5s ease infinite',
        'slow-spin': 'spin 10s linear infinite',  // Added slow spin for subtle background animations
        floating: "floating 6s ease-in-out infinite",
        pulse: "pulse 2s infinite",  // Custom slow pulse effect
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floating: {
         '0%, 100%': { transform: 'translateY(0)' },
         '50%': { transform: 'translateY(-10px)' }
        },
        horizontalMove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        diagonalMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(100vw, 100vh)' },
        },
        verticalMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
