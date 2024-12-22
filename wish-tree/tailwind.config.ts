import type { Config } from "tailwindcss";

export default {
  content: [
    "./shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myRed : "#D85B59",
        myYellow: "#FEE500",
      },
      screens: {
        'mobile': '200px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '760px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
  important : true,
} satisfies Config;
