import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFDF2",
        ink: "#111111",
        accent: "#2B7A78", // muted teal
        muted: "#8C8C8C",
        neutral: {
          100: "#f5f5f5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl2: "1rem",
      },
      maxWidth: {
        '6xl': '72rem',
      },
    },
  },
  plugins: [],
};
export default config;
