/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	important: '.games',
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			backgroundImage: {
				'roulette-wheel': "url('/src/assets/roulette/roulette.svg')",
				luro: "url('/src/assets/luro/luro.png')",
				'luro-sm': "url('/src/assets/luro/luro-sm.png')",
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: '#0F121D',
				primaryLight: '#131624',
				primaryLighter: '#151A2A',
				secondary: '#201C40',
				secondaryLight: '#292546',
				secondaryLighter: '#201C4080',
				purple: {
					box: '#6A6A9F',
					table: '#201C40',
				},
				red: {
					600: '#B80042',
					roulette: '#dd375f',
				},
				gray: {
					800: '#1E292E',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			fontFamily: {
				sans: ['Rounds', 'sans-serif'],
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			gridTemplateColumns: {
				14: 'repeat(14, minmax(0, 1fr))',
				29: 'repeat(29, minmax(0, 1fr))',
			},
			gridTemplateRows: {
				14: 'repeat(14, minmax(0, 1fr))',
				29: 'repeat(29, minmax(0, 1fr))',
			},
			gridRowStart: {
				8: '8',
				10: '10',
				12: '12',
				13: '13',
				14: '14',
			},
			gridColumnStart: {
				8: '8',
				10: '10',
				12: '12',
			},
			gridRow: {
				'span-8': 'span 8 / span 8',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
