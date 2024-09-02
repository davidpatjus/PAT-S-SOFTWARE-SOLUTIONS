import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-purple-dark': '#4B0082',    // Morado oscuro, tipo índigo
        'luxury-purple': '#8A2BE2',         // Morado brillante, tipo azul violeta
      },
      container: {
        padding: '1rem', 
        center: true,
      }
    },
  },
  plugins: [],
};
export default config;
