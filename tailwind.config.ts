import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        orange: "#ffa800",
        lemon: "#adff29",
        ink: "#191919",
        cream: "#fffdf8"
      },
      boxShadow: {
        playful: "0 18px 50px rgba(25, 25, 25, 0.10)",
        button: "0 8px 0 rgba(25,25,25,0.95)"
      }
    }
  },
  plugins: []
};

export default config;
