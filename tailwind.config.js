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
