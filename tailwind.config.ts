import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cesca: {
          dark: "#020916",
          primary: "#1b407f",
          mid: "#4070c8",
          light: "#7ba0e1",
          yellow: "#FFE23C",
          white: "#FFFFFF",
          offwhite: "#F8FAFC",
          textgray: "#64748B",
          lightgray: "#E2E8F0",
          cta: "#E8700A",
          whatsapp: "#25D366",
        },
      },
      fontFamily: {
        sans: ["Satoshi", "system-ui", "sans-serif"],
      },
      boxShadow: {
        navbar: "0 6px 20px rgba(2, 9, 22, 0.08)",
      },
      animation: {
        pulseSoft: "pulseSoft 2.5s ease-in-out infinite",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.55)" },
          "70%": { transform: "scale(1.04)", boxShadow: "0 0 0 12px rgba(37, 211, 102, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
