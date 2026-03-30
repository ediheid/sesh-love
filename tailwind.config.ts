import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],

  theme: {
    extend: {
      colors: {
        background: "#f8f8f8",
        text: "#222222",
        heading: "#181818",

        link: "rgb(213, 55, 105)",
        "link-hover": "rgba(213, 55, 105, 0.2)",
      },

      spacing: {
        sm: "8px",
        lg: "32px",
        section: "160px",
      },

      fontSize: {
        base: "15px",
      },

      lineHeight: {
        base: "1.6",
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        heading: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },

  plugins: [],
};

export default config;
