import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#141414",
      offBlack: "#1f1f1f",
      grey: "#333333",
      white: "#ffffff",
      green: "#c4f82a",
    },
    fontSize: {
      base: "0.875rem",
      lg: "1.5rem",
    },
    fontFamily: {
      inter: "Inter",
    },
    borderRadius: {
      "rounded-0": "0rem",
      "rounded-1": "0.5714285714285714rem",
      "rounded-2": "0.8571428571428571rem",
      "rounded-3": "71.35714285714286rem",
    },
    screens: {
      m: "375px",
      d: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
