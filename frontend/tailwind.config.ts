import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0F1E",
        accent: "#10B981",
        surface: "#111827",
        "surface-hover": "#1F2937",
      },
    },
  },
  plugins: [],
};
export default config;
