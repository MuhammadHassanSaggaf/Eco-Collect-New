/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				"eco-green": "#355E62",
				"eco-light": "#ECF1E6",
			},
			boxShadow: {
				custom: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
			},
			// Backdrop filters (for blur, brightness, etc.)
			backdropBlur: {
				xs: "2px",
				sm: "4px",
				md: "12px",
				lg: "16px",
				xl: "20px",
				"2xl": "25px",
			},
			backdropFilter: {
				none: "none",
				blur: "blur(10px)",
			},
			// Animation and transitions
			animation: {
				"fade-in": "fadeIn 0.3s ease-in-out",
				"slide-up": "slideUp 0.4s ease-out",
				"pulse-glow": "pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { transform: "translateY(10px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				pulseGlow: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: ".5" },
				},
			},
			// Spacing utilities (extend default)
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			// Border radius
			borderRadius: {
				xl: "1rem",
				"2xl": "1.5rem",
				"3xl": "2rem",
			},
			// Opacity
			opacity: {
				5: "0.05",
				10: "0.1",
				85: "0.85",
				90: "0.9",
				95: "0.95",
			},
			// Z-index
			zIndex: {
				0: "0",
				10: "10",
				20: "20",
				30: "30",
				40: "40",
				50: "50",
				60: "60",
				70: "70",
				80: "80",
				90: "90",
				100: "100",
				9999: "9999",
			},
			// Screen sizes (responsive breakpoints)
			screens: {
				xs: "320px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			// Transition timing
			transitionDuration: {
				0: "0ms",
				75: "75ms",
				100: "100ms",
				150: "150ms",
				200: "200ms",
				300: "300ms",
				500: "500ms",
				700: "700ms",
				1000: "1000ms",
			},
		},
	},
	plugins: [],
	safelist: [
		// Add any dynamic classes here that Tailwind might not detect
		// Example: 'bg-eco-green', 'text-eco-light'
	],
};
