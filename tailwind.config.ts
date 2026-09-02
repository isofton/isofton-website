import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1a1d26",
          soft: "#4a5163",
          muted: "#6b7288",
        },
        lavender: {
          DEFAULT: "#9b86bd",
          deep: "#7c68ad",
          soft: "#c9b8e6",
          mist: "#f4f0fb",
        },
        coral: {
          DEFAULT: "#f0a08c",
          deep: "#e57a6a",
          soft: "#f8cfc4",
        },
        cyan: {
          DEFAULT: "#7ec8e8",
          deep: "#4aa8d4",
          soft: "#c9ebf7",
        },
      },
      fontFamily: {
        sans: ["var(--font-exo)", "Exo", "sans-serif"],
        display: ["var(--font-exo)", "Exo", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 50px -24px rgba(124, 104, 173, 0.35)",
        lift: "0 24px 60px -20px rgba(26, 29, 38, 0.18)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #c9b8e6 0%, #f0a08c 48%, #7ec8e8 100%)",
        "hero-wash":
          "radial-gradient(900px 480px at 12% -10%, rgba(201,184,230,0.55), transparent 60%), radial-gradient(720px 420px at 92% 8%, rgba(126,200,232,0.42), transparent 55%), radial-gradient(640px 380px at 55% 100%, rgba(240,160,140,0.28), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
