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
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				'1': 'hsl(var(--primary-1))',
  				'2': 'hsl(var(--primary-2))',
  				'3': 'hsl(var(--primary-3))',
  				'4': 'hsl(var(--primary-4))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'900': 'hsl(var(--secondary-900))',
  				'800': 'hsl(var(--secondary-800))',
  				'700': 'hsl(var(--secondary-700))',
  				'600': 'hsl(var(--secondary-600))',
  				'500': 'hsl(var(--secondary-500))',
  				'400': 'hsl(var(--secondary-400))',
  				'300': 'hsl(var(--secondary-300))',
  				'200': 'hsl(var(--secondary-200))',
  				'100': 'hsl(var(--secondary-100))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			black: {
  				'900': 'hsl(var(--black-900))',
  				'800': 'hsl(var(--black-800))',
  				'700': 'hsl(var(--black-700))',
  				'600': 'hsl(var(--black-600))',
  				'500': 'hsl(var(--black-500))',
  				'400': 'hsl(var(--black-400))',
  				'300': 'hsl(var(--black-300))',
  				'200': 'hsl(var(--black-200))',
  				'100': 'hsl(var(--black-100))',
  				'00': 'hsl(var(--black-00))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			states: {
  				red: 'hsl(var(--states-red))',
  				orange: 'hsl(var(--states-orange))',
  				yellow: 'hsl(var(--states-yellow))',
  				blue: 'hsl(var(--states-blue))',
  				green: 'hsl(var(--states-green))'
  			},
  			bg: {
  				lnb: 'hsl(var(--bg-lnb))',
  				alert: 'hsl(var(--bg-alert))',
  				page: 'hsl(var(--bg-page))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
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
