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
        brand: {
          50: "#fdf8f0",
          100: "#faefd9",
          200: "#f3d9a8",
          300: "#e9bb6b",
          400: "#de993c",
          500: "#d4801f",
          600: "#b96518",
          700: "#984e18",
          800: "#7c401a",
          900: "#663619",
          950: "#3a1b0a",
        },
        sage: {
          50: "#f4f7f4",
          100: "#e5ece5",
          200: "#cad9ca",
          300: "#a2bda3",
          400: "#739b74",
          500: "#527f54",
          600: "#3f6540",
          700: "#345135",
          800: "#2b422c",
          900: "#243725",
          950: "#111e12",
        },
        cream: {
          50: "#fdfcf8",
          100: "#faf5ea",
          200: "#f3e8cc",
          300: "#e9d4a3",
          400: "#dcb96f",
          500: "#d0a04c",
          600: "#c18840",
          700: "#a06e38",
          800: "#825833",
          900: "#6b492d",
          950: "#392416",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        shimmer: "shimmer 1.5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
