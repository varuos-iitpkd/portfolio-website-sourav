/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      bobble: "bobble 7s infinite ease alternate",
    },
    keyframes: {
      bobble: {
        "0%, 100%": { borderRadius: "40% 60% 35% 65% / 58% 47% 53% 42%" },
        "20%": { borderRadius: "50% 50% 54% 46% / 51% 47% 53% 49%" },
        "40%": { borderRadius: "50% 50% 54% 46% / 40% 65% 35% 60%" },
        "60%": { borderRadius: "62% 38% 32% 68% / 60% 53% 47% 40%" },
        "80%": { borderRadius: "50% 50% 32% 68% / 56% 53% 47% 44%" },
      },
    },
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
    },
    fontFamily: {
      primary: "var(--font-nunito)",
      secondary: "var(--font-nunito)",
    },
    extend: {
      scrollbarGutter: {
        stable: "stable",
      },
      colors: {
        // primary: "#1c1c22",
        primary: "#eee",
        accent: {
          // DEFAULT: "#00FF99",
          DEFAULT: "#F93827",
          // hover: "#00e187",
          hover: "#e03223",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    require("tailwindcss-hero-patterns"),
  ],
};
