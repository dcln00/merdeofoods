<script setup lang="ts">
useHead({
	title: 'Our Products - MerdeoFoods',
})

const operations = [
	{
		heading: 'Inventory Tracking',
		description: 'Real-time inventory tracking ensures accurate stock levels, minimizing waste and spoilage. The system also provides alerts for perishable items nearing their expiration dates.',
		photo: 'v1745601246/Merdeo%20Foods/inventory-tracking.png',
	},
	{
		heading: 'Automated Ordering',
		description: 'The platform automates the ordering process by tracking inventory levels in real-time and placing orders with suppliers automatically when stock is low, reducing the risk of overstocking or shortages...',
		photo: 'v1745601248/Merdeo%20Foods/automated-ordering.png',
	},
	{
		heading: 'Supplier Management',
		description: 'The platform maintains a centralized database of suppliers, enabling easy comparison of prices and terms. It also facilitates direct communication and negotiation with vendors, ensuring the best deals...',
		photo: 'v1745601247/Merdeo%20Foods/supplier-mgt.png',
	},
]
</script>

<template lang="pug">
section#hero(class="h-[80vh] lg:h-screen")
	div(class="flex flex-wrap flex-row-reverse h-full items-center")
		div(class="hidden lg:flex w-full lg:w-1/2 p-12 max-lg:px-0  h-full bg-zinc-200 items-center")
			div(class="space-y-4 text-black")
				h1(class="font-extrabold") The #[span(class="text-brand-green") Procurement] platform #[span(class="text-brand-green") for food businesses] in africa.
				p(class="text-zinc-600") Our platform streamlines your business by helping you process orders, accept payments, and connect directly with suppliers giving you all the tools you need to thrive effortlessly!
				div
					button(class="bg-brand-green hover:bg-[#155e15] duration-300 text-white px-4 py-2 rounded") Sign Up
		div(class="w-full lg:w-1/2 p-4 max-lg:px-0 h-full space-y-4 relative flex items-center")
			.photo-wrapper(class="absolute top-0 left-0 w-full h-full -z-[1] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:bg-black/60 overflow-hidden")
				NuxtImg(src="v1745600309/Merdeo%20Foods/merdeo-products.jpg" provider="cloudinary" class="w-full h-full object-cover object-center" placeholder)
			div(class="block lg:hidden px-4 text-white space-y-4")
				h1(class="font-extrabold") The #[span(class="text-brand-green") Procurement] platform #[span(class="text-brand-green") for food businesses] in africa.
				p Our platform streamlines your business by helping you process orders, accept payments, and connect directly with suppliers giving you all the tools you need to thrive effortlessly!
				div
					button(class="bg-brand-green hover:bg-[#155e15] duration-300 text-white px-4 py-2 rounded") Sign Up
section#delivery(class="py-20")
	.container
		.heading(class="text-center space-y-3 pb-8 lg:pb-12")
			h6(class="uppercase tracking-tight text-sm text-brand-green") The Merdeo Solution
			h1 Easy, Simple, Affordable
			p(class="text-zinc-500 lg:w-1/2 mx-auto") Our platform efficiently integrates with your restaurant management system, bringing powerful features that simplify procurement and take your operations to the next level! Key benefits include:
		div(class="flex flex-wrap items-start")
			div(v-for="(list, idx) in operations" :key="idx" class=" w-full lg:w-1/3 p-4 max-lg:px-0")
				div(class="group flex items-end relative p-8 aspect-square overflow-hidden cursor-pointer")
					.photo-wrapper(class="absolute top-0 left-0 w-full h-full -z-[1] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:bg-black/70 overflow-hidden")
						NuxtImg(provider="cloudinary" :src="list.photo" sizes="640px md:1280px lg:1920px" class="group-hover:scale-110 duration-300 w-full h-full object-cover object-center")
					div(class="space-y-2 translate-y-24 group-hover:translate-y-0 duration-300")
						h2(class="text-white text-xl") {{ list.heading }}
						p(class="text-white text-sm opacity-0 group-hover:opacity-100 duration-300") {{ list.description }}
</template>