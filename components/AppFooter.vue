<script setup lang="ts">
const { x, y } = useWindowScroll()
</script>

<template lang="pug">
footer(class="w-full py-8 lg:pt-20 bg-black text-white")
	.container
		div(class="border-b border-zinc-600 pb-20 mb-8")
			div(class="flex flex-wrap")
				div(class="w-full lg:w-1/2 p-4 space-y-6")
					NuxtLink(to="/" class="inline-block")
						.logo(class="w-[140px] h-[60px]")
							svgo-logo-white(class="!w-full !h-full")
					.address(class="hidden lg:block")
						p Shalom Estates, Adenta
						a(href="tel:+233(0)53 632 9815" class="block") +233(0)53 632 9815
						a(href="mailto:info@merdeofoods.com" class="block") info@merdeofoods.com
				div(class="block lg:hidden w-1/2 lg:w-2/12 p-4 space-y-8")
					.title(class="uppercase text-xs tracking-normal") Address
					.address(class="text-zinc-400 space-y-2")
						p Shalom Estates, Adenta
						a(href="tel:+233(0)53 632 9815" class="block") +233(0)53 632 9815
						a(href="mailto:info@merdeofoods.com" class="block") info@merdeofoods.com
				div(class="w-1/2 lg:w-2/12 p-4 space-y-8")
					.title(class="uppercase text-xs tracking-normal") Merdeo Foods
					ul(class="space-y-2 text-zinc-400")
						li
							NuxtLink(href="#") Tech
						li
							NuxtLink(href="#") Company
						li
							NuxtLink(href="#") Support
						li
							NuxtLink(href="#") Join Us
				div(class="w-1/2 lg:w-2/12 p-4 space-y-8")
					.title(class="uppercase text-xs tracking-normal") Company
					ul(class="space-y-2 text-zinc-400")
						li
							NuxtLink(href="#") About Us
						li
							NuxtLink(href="#") Help Center
				div(class="w-1/2 lg:w-2/12 p-4 space-y-8")
					.title(class="uppercase text-xs tracking-normal") Get In Touch
					ul(class="space-y-2 text-zinc-400")
						li

							NuxtLink(href="#" class="flex items-center gap-2")
								svgo-facebook
								p Facebook
						li
							NuxtLink(href="#" class="flex items-center gap-2")
								svgo-instagram
								p Instagram
						li
							NuxtLink(href="#" class="flex items-center gap-2")
								svgo-x
								p X
						li
							NuxtLink(href="#" class="flex items-center gap-2")
								svgo-youtube
								p Youtube
		div(class="flex")
			.copyright(class="text-zinc-300 max-lg:text-sm") © 2025 Merdeo Foods, Inc. All rights reserved.
			.top(@click="() => y = 0" class="ms-auto hidden lg:flex items-center gap-2 cursor-pointer text-zinc-400 hover:text-white duration-200")
				p Back To Top
				svgo-caret
</template>

<style scoped>
li {
	width: fit-content;
}

li:hover {
	color: white;
}

ul li {
	position: relative;
	transition: 0.3s;
}

ul li:after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 1px;
	bottom: -3px;
	left: 0;
	background-color: white;
	transform-origin: bottom right;
	transition: transform 0.25s ease-out;
}

ul li:hover:after {
	transform: scaleX(1);
	transform-origin: bottom left;
}
</style>