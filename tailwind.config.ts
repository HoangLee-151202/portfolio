import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        heading: "var(--heading)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-slide-right": {
          "0%": { opacity: "0", transform: "translateX(-5rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-slide-left": {
          "0%": { opacity: "0", transform: "translateX(5rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-slide-top": {
          "0%": { opacity: "0", transform: "translateY(1.5rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-slide-bottom": {
          "0%": { opacity: "0", transform: "translateY(-0.5rem)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-slide-out-right": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(7.5rem)" },
        },
        "fade-slide-out-left": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-7.5rem)" },
        },
        "zoom-in": {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        "zoom-out": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-slide-right": "fade-slide-right 0.8s ease-out forwards",
        "fade-slide-left": "fade-slide-left 0.8s ease-out forwards",
        "fade-slide-top": "fade-slide-top 0.8s ease-out forwards",
        "fade-slide-bottom": "fade-slide-bottom 0.5s ease-out forwards",
        "fade-slide-out-right": "fade-slide-out-right 0.5s ease-in forwards",
        "fade-slide-out-left": "fade-slide-out-left 0.5s ease-in forwards",
        "zoom-in": "zoom-in 0.15s ease-in forwards",
        "zoom-out": "zoom-out 0.15s ease-out forwards",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
        pacifico: ["var(--font-pacifico)", "sans-serif"],
      },
    },
    borderRadius: {
      xl: "0rem",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
