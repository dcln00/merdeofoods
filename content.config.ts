import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		content: defineCollection({
			source: 'page/**.md',
			type: 'page',
		}),
		products: defineCollection({
			source: 'products/**.yml',
			type: 'data',
			schema: z.object({
				name: z.string(),
				slug: z.string(),
				description: z.string(),
				image: z.string(),
				price: z.number(),
			})
		})
	},
})
