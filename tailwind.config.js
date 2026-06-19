/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#080B11",        // Deep space background
          card: "#111622",      // Glass card background
          border: "#1E293B",    // Slate-800 border
          text: "#F8FAFC",      // Slate-50 primary text
          muted: "#94A3B8"      // Slate-400 secondary text
        },
        primary: {
          DEFAULT: "#06B6D4",   // Neon Cyan
          hover: "#0891B2"
        },
        secondary: {
          DEFAULT: "#8B5CF6",   // Electric Purple
          hover: "#7C3AED"
        },
        accent: {
          DEFAULT: "#EC4899",   // Vibrant Pink
          hover: "#DB2777"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"]
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
        "glow-pulse": "glow 4s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        glow: {
          "0%, 100%": { opacity: 0.8, filter: "drop-shadow(0 0 15px rgba(6, 182, 212, 0.4))" },
          "50%": { opacity: 1, filter: "drop-shadow(0 0 25px rgba(139, 92, 246, 0.8))" }
        }
      }
    },
  },
  plugins: [],
}
