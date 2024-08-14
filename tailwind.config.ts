import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  darkMode: "media",
  content: ["./entrypoints/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
} as Config;
