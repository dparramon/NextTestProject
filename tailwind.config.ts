import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extend: {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",

      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#f0f9ff",
          200: "#e0f2fe",
          300: "#bae6fd",
          400: "#7dd3fc",
          500: "#38bdf8",
          600: "#0ea5e9",
          700: "#0284c7",
          800: "#0369a1",
          900: "#075985",
        },
        secondary: {
          100: "#f7f0f5",
          200: "#e8d4e8",
          300: "#d4a9d6",
          400: "#c285c3",
          500: "#a855a8",
          600: "#933389",
          700: "#7e1f6f",
          800: "#6b1c5c",
          900: "#4d1639",
        },
        neutral: {
          100: "#f5f7fa",
          200: "#e4e7eb",
          300: "#cbd2d9",
          400: "#9aa5b1",
          500: "#7b8794",
          600: "#616e7c",
          700: "#52606d",
          800: "#3e4c59",
          900: "#323f4b",
        },
        success: {
          100: "#f0fdf4",
          200: "#dcfce7",
          300: "#bbf7d0",
          400: "#86efac",
          500: "#4ade80",
          600: "#22c55e",
          700: "#16a34a",
          800: "#15803d",
          900: "#166534",
        },
        warning: {
          100: "#fffdf0",
          200: "#fefcbf",
          300: "#faf089",
          400: "#f6e05e",
          500: "#ecc94b",
          600: "#d69e2e",
          700: "#b7791f",
          800: "#975a16",
          900: "#744210",
        },
        danger: {
          100: "#fff5f5",
        },
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        }
      },
      plugins: [],
    }
  }
};

export default config;
