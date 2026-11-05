/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        // Single brand accent ("run green"), used sparingly for CTAs and highlights
        accent: {
          DEFAULT: "#34d399",
          strong: "#10b981",
          soft: "rgba(52, 211, 153, 0.12)",
        },
      },
    },
  },
  plugins: [],
}
