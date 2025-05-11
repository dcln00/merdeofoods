import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
			},
		},
		extend: {
			fontFamily: {
				custom: ['Outfit'],
			},
			colors: {
				brand: {
					green: '#218921',
					accent: '#d1ac36',
					dark: '#11170f',
				},
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				float: 'float 3s ease-in-out infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}