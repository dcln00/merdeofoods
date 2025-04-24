<script setup lang="ts">
const { x, y } = useWindowScroll()

useHead({
	title: 'Support - MerdeoFoods',
})

const input = reactive({
	name: '',
	email: '',
	phone: '',
	subject: '',
	category: '',
	message: ''
})
</script>

<template lang="pug">
section#hero(class="pt-40 pb-24 bg-zinc-100")
	.container
		div(class="text-center space-y-4")
			h1 Support
			p(class="lg:w-1/2 lg:mx-auto text-zinc-600") Need help with something you didn’t find browsing the website? Reach out to us. Our teams is ready to help!
			svgo-caret(class="text-2xl rotate-180 mx-auto cursor-pointer hover:translate-y-2 duration-300" @click="() => y = 419.2")
section#form(class="py-20")
	.container(class="flex flex-wrap")
		.details(class="w-full lg:w-4/12 p-4 max-lg:px-0 space-y-8")
			div(class="space-y-6")
				h6(class="uppercase tracking-tight text-sm text-brand-green") Contact Us
				h2 Any questions or enquiries? Feel free to reach out to us.
			.contact-details(class="text-zinc-600")
				p #[span(class="font-medium") Address:] #[NuxtLink(to="#") Shalom Estates, Adenta]
				p #[span(class="font-medium") Email:] #[NuxtLink(to="mailto:info@merdeofoods.com") info@merdeofoods.com]
				p #[span(class="font-medium") Whatsapp:] #[NuxtLink(to="tel:+233(0)53 632 9815") +233(0)53 632 9815]
			.contact-photo(class="aspect-square overflow-hidden")
				NuxtImg(src="v1745455539/Merdeo%20Foods/merdeo-support.jpg" provider="cloudinary" class="w-full h-full object-cover object-top")
		.form(class="ms-auto w-full lg:w-6/12 p-4 max-lg:px-0")
			form(novalidate="" class="group")
				div(class="flex flex-wrap")
					div(class="space-y-4 w-full p-4 max-lg:px-0")
						label.layer-primary(for="name") Full name
						input(required id="name" type="text" v-model="input.name" placeholder="Enter your full name" class="peer w-full text-sm px-3 py-2 border rounded-md border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent [&:not(:placeholder-shown):not(:focus):invalid]:text-red-600 [&:not(:placeholder-shown):not(:focus):invalid]:border-red-600")
					div(class="space-y-4 w-full lg:w-1/2 p-4 max-lg:px-0")
						label.layer-primary(for="email") Email
						input(required id="email" type="email" v-model="input.email" placeholder="Enter your email" class="peer w-full text-sm px-3 py-2 border rounded-md border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent [&:not(:placeholder-shown):not(:focus):invalid]:text-red-600 [&:not(:placeholder-shown):not(:focus):invalid]:border-red-600")
					div(class="space-y-4 w-full lg:w-1/2 p-4 max-lg:px-0")
						label.layer-primary(for="phone") Phone
						input(required id="phone" type="tel" v-model="input.phone" placeholder="Enter your phone number" class="peer w-full text-sm px-3 py-2 border rounded-md border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent [&:not(:placeholder-shown):not(:focus):invalid]:text-red-600 [&:not(:placeholder-shown):not(:focus):invalid]:border-red-600")
					div(class="space-y-4 w-full p-4 max-lg:px-0")
						label.layer-primary(for="category") Customer Segment
						select(id="category" v-model="input.category" name="category" class="peer w-full text-sm px-3 py-2 border rounded-md border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent")
							option(selected disabled value="") Select a customer segment for your request
							option Food Business
							option Supplier
					div(class="space-y-4 w-full p-4 max-lg:px-0")
						label.layer-primary(for="message") Message
						textarea.form-input(id="message" name="message" rows="5" v-model="input.message" placeholder="Enter your message" class="w-full text-sm px-3 py-2 border rounded-md border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent resize-none")
					div(class="p-4 max-lg:px-0")
						button(class="bg-brand-green hover:bg-[#155e15] duration-300 text-white px-4 py-2 rounded" type="submit") Join Waitlist
</template>