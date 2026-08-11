import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F2EDE3",
        "ivory-dim": "#EAE1CD",
        "ivory-deep": "#E2D7BE",
        stone: "#D8CDB4",
        "stone-line": "#C9BCA0",
        ink: "#15130F",
        "ink-soft": "#413C33",
        rust: "#C1441E",
        "rust-deep": "#9B3416",
        "rust-tint": "#E7A889",
        blue: "#1F3A5A",
        "blue-tint": "#5A7793",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        edit: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
