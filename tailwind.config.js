/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        marine: "#1E293B", // couleur de marque
        nuit: "#0F172A", // footer, texte principal
        accent: {
          DEFAULT: "#F97316", // actions uniquement
          dark: "#EA580C", // survol
        },
        clair: "#F8FAFC", // fonds de sections
        acier: "#64748B", // textes secondaires
      },
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "76rem",
      },
    },
  },
  plugins: [],
};
