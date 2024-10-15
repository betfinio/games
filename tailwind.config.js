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
		},
	},
	plugins: [require('tailwindcss-animate')],
};
