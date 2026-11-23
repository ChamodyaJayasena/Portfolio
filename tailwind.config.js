/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B18', // Deepest background
          900: '#0B132B', // Main dark navy
          850: '#0F1A38', // Dark card background
          800: '#142147', // Card surface
          750: '#1B2B5C', // Hover card surface
          700: '#233877', // Borders & accents
          600: '#2F4B9E', // Sub-accents
          500: '#3D62CC', // Primary blue button
          400: '#5A7EE6', // Lighter interactive
          300: '#8AA4F5', // Soft blue text
        },
        accent: {
          cyan: '#38BDF8',
          blue: '#60A5FA',
          teal: '#2DD4BF',
          glow: 'rgba(56, 189, 248, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'navy-glow': '0 0 25px -5px rgba(56, 189, 248, 0.25)',
        'navy-card': '0 10px 30px -10px rgba(2, 6, 23, 0.7)',
        'navy-elevated': '0 20px 40px -15px rgba(6, 11, 24, 0.9)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #060B18 0%, #0B132B 50%, #0D1B3E 100%)',
        'radial-gradient': 'radial-gradient(ellipse at top, #142147 0%, #060B18 70%)',
        'grid-pattern': "radial-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
