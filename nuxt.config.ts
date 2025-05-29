export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },
	modules: [
		'@nuxt/content',
		'@nuxt/fonts',
		'@nuxt/image',
		'@nuxtjs/tailwindcss',
		'nuxt-svgo',
		'@vueuse/nuxt',
		'@vueuse/motion/nuxt',
		'nuxt-easy-lightbox',
		'@nuxtjs/device',
		'nuxt-charts',
	],
	tailwindcss: {
		viewer: false,
		cssPath: ['~/assets/tailwind.css', { injectPosition: 'first' }],
	},
	image: {
		cloudinary: {
			baseURL: 'https://res.cloudinary.com/dyr6sb7gn/image/upload/',
		},
	},
	nitro: {
		preset: 'vercel',
	},
})