import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          "1": "var(--primary-1)",
          "2": "var(--primary-2)",
          "3": "var(--primary-3)",
          "4": "var(--primary-4)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          "900": "var(--secondary-900)",
          "800": "var(--secondary-800)",
          "700": "var(--secondary-700)",
          "600": "var(--secondary-600)",
          "500": "var(--secondary-500)",
          "400": "var(--secondary-400)",
          "300": "var(--secondary-300)",
          "200": "var(--secondary-200)",
          "100": "var(--secondary-100)",
          foreground: "var(--secondary-foreground)",
        },
        black: {
          "900": "var(--black-900)",
          "800": "var(--black-800)",
          "700": "var(--black-700)",
          "600": "var(--black-600)",
          "500": "var(--black-500)",
          "400": "var(--black-400)",
          "300": "var(--black-300)",
          "200": "var(--black-200)",
          "100": "var(--black-100)",
          "00": "var(--black-00)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        states: {
          red: "var(--states-red)",
          orange: "var(--states-orange)",
          yellow: "var(--states-yellow)",
          blue: "var(--states-blue)",
          green: "var(--states-green)",
        },
        bg: {
          lnb: "var(--bg-lnb)",
          alert: "var(--bg-alert)",
          page: "var(--bg-page)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".gradient-grad": {
          background:
            "linear-gradient(84deg, rgba(11, 196, 9, 0.00) -99.58%, #0BC409 -70.18%, #06C8BB 110.41%)",
        },
        ".gradient-grad-dark": {
          background:
            "linear-gradient(84deg, rgba(0, 136, 0, 0.00) -99.58%, rgba(0, 136, 0, 0.25) -70.18%, #06877A 110.41%), linear-gradient(84deg, rgba(11, 196, 9, 0.00) -99.58%, #0BC409 -70.18%, #06C8BB 110.41%)",
        },
      });
    }),
  ],
} satisfies Config;
