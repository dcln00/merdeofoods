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
		},
	},
}
