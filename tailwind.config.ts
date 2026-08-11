import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        sans: ["var(--font-body)", "Arial", "sans-serif"],
      },
      colors: { ink: "#0b0b0b", paper: "#f0eee8", ember: "#d86033" },
    },
  },
  plugins: [],
} satisfies Config;
