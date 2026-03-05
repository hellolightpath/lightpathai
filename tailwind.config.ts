import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f0ff",
          100: "#e0e1ff",
          400: "#8A8EE5",
          500: "#7B7FD9",
          600: "#6B6FC9",
          900: "#8F82CD",
        },
        warm: {
          50: "#FFF8F0",
          100: "#FFEDD5",
          400: "#E59524",
          500: "#D97706",
        },
        success: {
          300: "#84F0B1",
          500: "#63D583",
        },
        foreground: "#1C1C1E",
        body: "#64748B",
        muted: "#94A3B8",
        surface: "#FDFCFB",
        "surface-alt": "#F5F5F7",
        border: "#E2E8F0",
        "border-light": "#F1F5F9",
      },
      fontFamily: {
        serif: ["Lora", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        body: ["1.125rem", { lineHeight: "1.75" }],
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        content: "42rem",
        wide: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
