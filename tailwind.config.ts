import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        court: {
          orange: "#F97316",
          peach: "#FDBA74",
          cream: "#FFF7ED",
          navy: "#172554",
          slate: "#1E293B",
          mint: "#D1FAE5",
          gold: "#FDE68A"
        }
      },
      boxShadow: {
        card: "0 24px 70px rgba(15, 23, 42, 0.14)",
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 50px rgba(249,115,22,0.18)"
      },
      backgroundImage: {
        "court-grid":
          "radial-gradient(circle at top, rgba(255,255,255,0.28), transparent 30%), linear-gradient(135deg, rgba(249,115,22,0.13), transparent 35%), linear-gradient(180deg, rgba(255,255,255,0.45), rgba(255,247,237,0.95))"
      }
    },
  },
  plugins: [],
};

export default config;
