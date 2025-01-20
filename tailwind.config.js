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
      backgroundColor: {
        pattern: "#background-color: #DFDBE5",
      },
      backgroundImage: {
        patternImage:
          "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%239C92AC' fill-opacity='0.46'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    require("tailwindcss-hero-patterns"),
  ],
};
