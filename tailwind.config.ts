import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "var(--zenml-primary-500)",
          700: "var(--zenml-primary-700)",
        },
        lightGradient: "var(--zenml-light-gradient)",
        background: "var(--background)",
      },
    },
  },
  plugins: [],
};
export default config;
