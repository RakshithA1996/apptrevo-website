import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#12163A",
          light: "#1B2352",
          soft: "#2A3068",
        },
        teal: {
          DEFAULT: "#2DD4BF",
          dark: "#14B8A6",
        },
        paper: "#F5F6FA",
        line: "#E4E6ED",
        ink: {
          DEFAULT: "#12163A",
          muted: "#5B6178",
          soft: "#8A8FA6",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "node-grid":
          "radial-gradient(circle at 1px 1px, rgba(245,246,250,0.08) 1px, transparent 0)",
      },
      keyframes: {
        "pulse-line": {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-line": "pulse-line 1.1s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;
