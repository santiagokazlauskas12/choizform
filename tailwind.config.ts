import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-in": "slideIn 0.9s ease-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      fontFamily: {
        larsseitRegular: ["larsseitregular", "sans-serif"],
        larsseitThin: ["Larsseit Thin", "sans-serif"],
        larsseitThinItalic: ["Larsseit Thin Italic", "sans-serif"],
        larsseitLight: ["Larsseit Light", "sans-serif"],
        larsseitLightItalic: ["Larsseit Light Italic", "sans-serif"],
        larsseitMedium: ["Larsseit Medium", "sans-serif"],
        larsseitMediumItalic: ["Larsseit Medium Italic", "sans-serif"],
        larsseitBold: ["Larsseit Bold", "sans-serif"],
        larsseitBoldItalic: ["Larsseit Bold Italic", "sans-serif"],
        larsseitExtraBold: ["Larsseit ExtraBold", "sans-serif"],
        larsseitExtraBoldItalic: ["Larsseit ExtraBold Italic", "sans-serif"],
      },
      colors: {
        primary: "#6042AA",
        secondary: "#9F7CF7",
        customGray: "#D3D3D3",
        lightGray: "#E0E0E0",
        textGray: "#666768",
        background: "var(--background)",
        foreground: "var(--foreground)",
        imageSubtitle: "#7D7D7D",
        textHeavyGray: "#424B54",
        stepTitle: "#3B3345",
        button: "#292929",
      },
    },
  },
  plugins: [],
} satisfies Config;
