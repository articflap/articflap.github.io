import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'pastel-bg-start': '#E8E3FA',
  			'pastel-bg-end': '#CBD2FA',
  			'pastel-lime': '#C9E252',
  			'pastel-purple': '#7452E8',
  			'charcoal-purple': '#1E192B',
  			background: '#E8E3FA',
  			foreground: '#1E192B',
  			card: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#1E192B'
  			},
  			popover: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#1E192B'
  			},
  			primary: {
  				DEFAULT: '#7452E8',
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#C9E252',
  				foreground: '#1E192B'
  			},
  			muted: {
  				DEFAULT: '#F2EDFF',
  				foreground: '#685F7A'
  			},
  			accent: {
  				DEFAULT: '#C9E252',
  				foreground: '#1E192B'
  			},
  			destructive: {
  				DEFAULT: '#ef4444',
  				foreground: '#FFFFFF'
  			},
  			border: '#E4DCFC',
  			input: '#E4DCFC',
  			ring: '#7452E8',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			sans: ['var(--font-sans)'],
  			heading: ['var(--font-heading)']
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
