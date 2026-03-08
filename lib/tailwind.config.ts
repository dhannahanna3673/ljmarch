import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fcfaf7",
        foreground: "#1f1a17",
        soft: "#f5efe9",
        soft2: "#f9f5f1",
        muted: "#6a625b",
        border: "#e7ddd4",
        primary: "#8f6f5b",
        primaryDark: "#755847",
        secondary: "#d8c1af",
        accent: "#efe4db",
        lajWhite: "#ffffff",
      },
      boxShadow: {
        soft: "0 16px 40px rgba(42, 29, 21, 0.08)",
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
