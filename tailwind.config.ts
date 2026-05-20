import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",

        danger: "var(--color-danger)",
        accent: "var(--color-accent)",

        background: "var(--color-background)",
        surface: "var(--color-surface)",

        text: "var(--color-text)",
        heading: "var(--color-heading)",

        border: "var(--color-border)",
        highlight: "var(--color-highlight)",

        link: "var(--color-link)",
        "link-hover": "var(--color-link-hover)",
      },

      spacing: {
        sm: "var(--space-sm)",
        lg: "var(--space-lg)",
        section: "var(--section-gap)",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },

  plugins: [],
};

export default config;
