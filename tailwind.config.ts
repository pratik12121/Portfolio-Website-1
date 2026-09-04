import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // Retro Arcade CRT Phosphor 6-Domain System
        domain: {
          software: {
            DEFAULT: "#00F0FF",
            glow: "rgba(0, 240, 255, 0.4)",
            dark: "#008B99",
          },
          design: {
            DEFAULT: "#FF007F",
            glow: "rgba(255, 0, 127, 0.4)",
            dark: "#A60053",
          },
          threed: {
            DEFAULT: "#FF8C00",
            glow: "rgba(255, 140, 0, 0.4)",
            dark: "#B36200",
          },
          video: {
            DEFAULT: "#FF2A55",
            glow: "rgba(255, 42, 85, 0.4)",
            dark: "#B31232",
          },
          photo: {
            DEFAULT: "#39FF14",
            glow: "rgba(57, 255, 20, 0.4)",
            dark: "#1A8C07",
          },
          blog: {
            DEFAULT: "#FFE600",
            glow: "rgba(255, 230, 0, 0.4)",
            dark: "#B3A100",
          },
        },
        arcade: {
          950: "#040407",
          900: "#070710",
          850: "#0D0C1D",
          800: "#14132B",
          700: "#1F1D40",
          cyan: "#00F0FF",
          green: "#39FF14",
          magenta: "#FF007F",
          gold: "#FFE600",
          amber: "#FF8C00",
          red: "#FF2A55",
        },
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "monospace"],
        terminal: ["var(--font-terminal)", "monospace"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-pixel)", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%": { opacity: "0.98" },
          "50%": { opacity: "1" },
          "52%": { opacity: "0.93" },
          "54%": { opacity: "1" },
          "80%": { opacity: "0.97" },
          "100%": { opacity: "0.99" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        scanline: "scanline 8s linear infinite",
        flicker: "flicker 0.25s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
