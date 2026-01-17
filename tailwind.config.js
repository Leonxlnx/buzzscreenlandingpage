/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#181A1B',
          panel: '#18181B',
        },
        brand: {
          DEFAULT: '#F9772E',
          hover: '#FF6B35',
          dark: '#F9772E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'brand-sm': '0 4px 6px -1px rgba(249, 119, 46, 0.1), 0 2px 4px -1px rgba(249, 119, 46, 0.06)',
        'glow': '0 0 15px rgba(249, 119, 46, 0.3)',
        'glow-lg': '0 0 30px rgba(249, 119, 46, 0.4)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #F9772E, #FF6B35)',
      },
      animation: {
        'fade-in': 'navFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        navFadeIn: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      }
    },
  },
  plugins: [],
}
