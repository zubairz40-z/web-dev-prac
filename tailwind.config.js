/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Futuristic color palette
        primary: {
          orange: "#FF6B35",
          violet: "#8B5CF6", 
          blue: "#00D4FF",
        },
        dark: {
          bg: "#0A0A0F",
          card: "#1A1A2E", 
          border: "#2D2D44",
          text: "#A0A0B8"
        },
        accent: {
          orange: "#FF8C42",
          violet: "#A855F7",
          blue: "#38BDF8",
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '50%': { transform: 'translateY(-20px) rotate(0deg)' },
          '75%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 107, 53, 0.3), 0 0 40px rgba(255, 107, 53, 0.1)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(255, 107, 53, 0.5), 0 0 60px rgba(255, 107, 53, 0.2)',
            transform: 'scale(1.02)'
          },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        },
        bounceIn: {
          '0%': { 
            transform: 'scale(0) rotate(-180deg)',
            opacity: 0
          },
          '50%': { 
            transform: 'scale(1.2) rotate(-90deg)',
            opacity: 0.8
          },
          '100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: 1
          },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        slideInUp: "slideInUp 0.8s ease-out",
        fadeInUp: "fadeInUp 0.6s ease-out",
        shimmer: "shimmer 2s ease-in-out infinite",
        bounceIn: "bounceIn 0.6s ease-out",
        gradientShift: "gradientShift 8s ease infinite",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #2D2D44 1px, transparent 1px), linear-gradient(to bottom, #2D2D44 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}