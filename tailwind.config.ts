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
        background: "#ffffff",
        foreground: "#0a0a0a",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0a0a0a",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0a0a0a",
        },
        primary: {
          cyanLight: "#e7faf6",
          cyan: "#06c8bb",
          cyanDark: "#00b59f",
          green: "##0bc409",
          foreground: "#fafafa",
        },
        secondary: {
          "900": "#1a233b",
          "800": "#20325a",
          "700": "#334a6c",
          "600": "#60799a",
          "500": "#70839e",
          "400": "#a9b7c9",
          "300": "#b0bccc",
          "200": "#d4dbe4",
          "100": "#e7ecf3",
          foreground: "#191f31",
        },
        black: {
          "900": "#171b1e",
          "800": "#35393c",
          "700": "#53575a",
          "600": "#717578",
          "500": "#8f9396",
          "400": "#adb1b4",
          "300": "#cbcfd2",
          "200": "#dadee1",
          "100": "#e9edf0",
          "00": "#f6f7f8",
        },
        muted: {
          DEFAULT: "#f4f4f4",
          foreground: "#767676",
        },
        accent: {
          DEFAULT: "#f4f4f4",
          foreground: "#1a1a1a",
        },
        destructive: {
          DEFAULT: "#eb4d4b",
          foreground: "#fafafa",
        },
        border: "#e6e6e6",
        input: {
          DEFAULT: "#DADEE1",
          background: "#ffffff",
        },
        ring: "#0a0a0a",
        states: {
          red: "#f75741",
          orange: "#e7871e",
          yellow: "#ffc45b",
          blue: "#0560fd",
          green: "#0bc274",
        },
        bg: {
          lnb: "#1c2025",
          alert: "rgba(28, 32, 37, 0.5)",
          pageDark: "#E8EBEE",
          page: "#f2f4f5",
        },
        sidebar: {
          DEFAULT: "#fafafa",
          foreground: "#464646",
          primary: "#1a1a1a",
          "primary-foreground": "#fafafa",
          accent: "#f4f4f4",
          "accent-foreground": "#1a1a1a",
          border: "#dae1ec",
          ring: "#2e85d6",
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
