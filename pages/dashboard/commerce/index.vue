<script setup lang="ts">
useHead({
	title: 'Commerce - MerdeoFoods',
})

const categories = ref([
	{name: 'vegetables', photo: 'products/vegetables.png'},
	{name: 'fruits', photo: 'products/fruits.png'},
	{name: 'dairy products', photo: 'products/dairy.png'},
	{name: 'grains', photo: 'products/grain.png'},
	{name: 'spices', photo: 'products/spice.png'},
	{name: 'meat', photo: 'products/meat.png'},
])

const { data: products, status, error } = await useAsyncData(`products`, () => {
	return queryCollection('products')
			.all()
})
</script>

<template lang="pug">
section#cards(class="pt-12 pb-12")
	.container
		div(class="grid grid-cols-2 gap-6 text-white")
			div(class="bg-brand-green col-span-full p-8 py-16 text-white rounded-md")
				div(class="flex flex-wrap")
					div(class="w-full lg:w-1/2 p-4 max-lg:px-0 space-y-4")
						h1(class="text-4xl") Farm-fresh produce, #[br] Conveniently Delivered
						button.btn(class="bg-brand-accent hover:bg-[#a38729] duration-300 text-black") Start Shopping
			div(class="bg-[#1c1c1c] col-span-full lg:col-span-1 p-8 rounded-md")
				div(class="flex flex-wrap")
					div(class="w-full lg:w-1/2 p-4 max-lg:px-0 space-y-2")
						h1(class="text-4xl") 50%
						p(class="capitalize") off vegetables this month only
			div(class="bg-[#1c1c1c] col-span-full lg:col-span-1 p-8 rounded-md")
				div(class="flex flex-wrap")
						div(class="w-full lg:w-1/2 p-4 max-lg:px-0 space-y-2")
							h1(class="text-4xl") 48hr
							p(class="capitalize") deliveries within Accra
section#categories(class="pb-20")
	.container
		.heading(class="mb-6")
			h2(class="text-xl capitalize") product categories
		div(class="grid grid-cols-2 lg:grid-cols-6 gap-6")
			div(v-for="(category, idx) in categories" :key="idx" class="bg-zinc-100 col-span-1 py-8 px-4 rounded-md space-y-4")
				.photo(class="size-32 mx-auto pointer-events-none")
					NuxtImg(:src="category.photo" class="w-full h-full object-contain object-center")
				p(class="text-center capitalize") {{ category.name }}
section#products(class="pb-20")
	.container
		.heading(class="flex items-center mb-6")
			h2(class="text-xl capitalize") all products
			button(class="ms-auto flex items-center gap-2 border border-zinc-300 duration-300 text-sm text-zinc-600 px-4 py-2 rounded")
				svgo-dashboard-funnel(class="!mb-0")
				p Sort by
		div(class="grid grid-cols-2 lg:grid-cols-4 gap-6")
			div(v-for="(item, idx) in products" :key="idx" class="bg-zinc-100 col-span-1 p-4 rounded-md space-y-4")
				.photo(class="bg-white h-32 lg:h-60 mx-auto")
					NuxtImg(src="products/vegetables.png" class="w-full h-full object-contain object-center")
				.product-details
					h2(class="text-lg text-zinc-700") {{ item.name }}
					p(class="text-zinc-600") Price is calculated per kilogram
				.price(class="flex items-center gap-2")
					p(class="text-xl font-semibold text-brand-green tracking-tight") GHS {{ item.price }}
					p.discount(class="text-zinc-500 line-through") GHS 32
				div
					NuxtLink(:to="`commerce/${item.slug}`")
						button.btn(class="w-full bg-neutral-800 hover:bg-neutral-900") Add to Cart
</template>