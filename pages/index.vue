<script setup lang="ts">
const process = [
	{
		heading: 'Farm Selection',
		description:
			'We partner with trusted smallholder farmers who employ sustainable growing practices. Each harvest is hand-selected at optimal ripeness by our agricultural experts.',
		photo: 'v1745368036/Merdeo%20Foods/4600_lsdiwt.jpg',
	},
	{
		heading: 'Solar-Powered Freshness',
		description:
			'Within hours of harvest, produce moves to our solar-powered cold storage facilities, where temperature-controlled environments maintain crispness and nutrients until delivery.',
		photo: 'v1745368035/Merdeo%20Foods/4813_ghjfyd.jpg',
	},
	{
		heading: 'Quality Assurance',
		description:
			'Every batch undergoes rigorous quality checks. We reject anything that doesn\'t meet our freshness standards - no compromises.',
		photo: 'v1745368034/Merdeo%20Foods/merdeo-process-3.jpg',
	},
]

const delivery = [
	{
		heading: 'Same-Day Dispatch',
		description: 'Orders placed by 8AM go out the same day',
		photo: 'v1745264759/Merdeo%20Foods/merdeo-1_ydk776.jpg',
	},
	{
		heading: 'Temperature-Controlled Transport',
		description: 'Our refrigerated vehicles ensure perfect condition upon arrival',
		photo: 'v1745264759/Merdeo%20Foods/merdeo-3_etf4kj.jpg',
	},
	{
		heading: 'Flexible Ordering',
		description: 'Schedule daily, weekly, or seasonal deliveries through our easy-to-use platform',
		photo: 'v1745264759/Merdeo%20Foods/merdeo-2_m534kt.jpg',
	},
]

const reason = [
	{
		heading: 'Consistent Quality',
		description:
			'98% freshness rating from our restaurant partners',
	},
	{
		heading: 'Fair Pricing',
		description:
			'Cutting out middlemen means better prices for you, better incomes for farmers',
	},
	{
		heading: 'Waste Reduction',
		description:
			'Our system prevents 3+ tons of food spoilage monthly.',
	},
]
const hover = ref(0)
const toggleHover = (idx: number) => {
	hover.value = idx
}
</script>

<template lang="pug">
section#hero(class="h-screen relative")
	.photo-wrapper(class="absolute top-0 left-0 w-full h-full -z-[1] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:bg-black/60 overflow-hidden")
		NuxtImg(src="v1745165997/Merdeo%20Foods/2149894730_l8pbhv.jpg" provider="cloudinary" class="w-full h-full object-cover object-center" placeholder)
	.container(class="flex flex-wrap h-full items-center")
		div(class="w-full lg:w-1/2 p-4 max-lg:px-0 space-y-4 text-white")
			h1(class="font-extrabold" v-motion-slide-visible-once-bottom) #[span(class="text-brand-green") Connecting] Food Businesses to Farm #[span(class="text-brand-green") Fresh Produce]
			p(v-motion-slide-visible-once-bottom :delay="200") At Merdeo Foods, we bridge the gap between Africa's hardworking smallholder farmers and food businesses that demand quality ingredients. Our end-to-end solution ensures every tomato, pepper, and leafy green reaches your kitchen at peak freshness.
			div(v-motion-slide-visible-once-bottom :delay="400")
				button(class="bg-brand-green hover:bg-[#155e15] duration-300 text-white px-4 py-2 rounded") Read More
		//- div(class="w-full lg:w-1/2 p-4 max-lg:px-0 space-y-4")
			NuxtImg(src="v1745269765/Merdeo%20Foods/2149894684_kgkksi.jpg" provider="cloudinary" class="w-full h-full object-cover object-center" v-motion-fade-visible-once)
section#process(class="py-20 max-lg:container overflow-x-hidden")
	.heading(class="text-center space-y-2 pb-8 lg:pb-12")
		h6(class="uppercase tracking-tight text-sm text-brand-green" v-motion-slide-visible-once-bottom) From Soil to Storage:
		h1(v-motion-slide-visible-once-bottom :delay="200") Our #[span(class="text-brand-green") Careful] #[br] #[span(class="text-brand-green") Curation] Process
	div(class="flex flex-wrap items-center")
		div(class="w-full lg:w-1/2 overflow-hidden group aspect-video" v-motion-fade-visible-once)
			div(v-for="(list, idx) in process" :key="idx" class="w-full h-full")
				Transition(name="nav")
					NuxtImg(v-if="idx === hover" :src="list.photo" provider="cloudinary" class="absolute top-0 left-0 w-full h-full object-cover object-center duration-300 group-hover:scale-105")
		div(class="w-full lg:w-1/2 p-4 ps-16 max-lg:px-0 space-y-4")
			ul(class="space-y-12")
				li(v-for="(list, idx) in process" :key="idx" class="space-y-4 group" v-motion-slide-visible-once-right :delay="100 * idx" @mouseenter="toggleHover(idx)" @click="toggleHover(idx)")
					h2(class="group-hover:text-brand-green duration-200") {{ idx + 1 }}. {{ list.heading }}
					p(class="lg:w-3/4 text-zinc-600") {{ list.description }}
section#delivery(class="py-20 bg-zinc-200")
	.container
		.heading(class="text-center space-y-2 pb-8 lg:pb-12" v-motion-slide-visible-once-bottom)
			h1 #[span(class="text-brand-green") Doorstep Delivery] #[br] You can rely on
		div(class="flex flex-wrap items-start")
			div(v-for="(list, idx) in delivery" :key="idx" class=" w-full lg:w-1/3 p-4 max-lg:px-0" v-motion-fade-visible-once :delay="100 * idx")
				div(class="group flex items-end relative p-8 rounded-md aspect-square")
					.photo-wrapper(class="absolute top-0 left-0 w-full h-full -z-[1] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:bg-black/70 overflow-hidden")
						NuxtImg(provider="cloudinary" :src="list.photo" sizes="640px md:1280px lg:1920px" class="group-hover:scale-110 duration-300 w-full h-full object-cover object-center")
					div(class="space-y-2")
						h2(class="text-white text-xl") {{ list.heading }}
						p(class="text-white text-sm") {{ list.description }}
section#why(class="py-20")
	.container
		.heading(class="text-center space-y-2 pb-8 lg:pb-12")
			h1(v-motion-slide-visible-once-bottom) Why food businesses #[br] #[span(class="text-brand-green") choose Merdeo]
		div(class="flex flex-wrap flex-row-reverse items-center" v-motion-fade-visible-once)
			div(class="w-full lg:w-1/2 flex justify-center gap-4")
				div(class="bg-zinc-300 h-[484.77px] w-[292.25px] overflow-hidden")
					NuxtImg(src="v1745319028/Merdeo%20Foods/47086_enjiaa.jpg" provider="cloudinary" class="w-full h-full object-cover object-center hover:scale-105 duration-300")
				div(class="bg-zinc-300 h-[484.77px] w-[292.25px] overflow-hidden lg:translate-y-8")
					NuxtImg(src="v1745319029/Merdeo%20Foods/2148127832_phoea9.jpg" provider="cloudinary" class="w-full h-full object-cover object-center hover:scale-105 duration-300")
			div(class="w-full lg:w-1/2 p-4 ps-24 max-lg:px-0 space-y-4")
				ul(class="space-y-12")
					li(v-for="(list, idx) in reason" :key="idx" class="space-y-4 group" v-motion-slide-visible-once-left :delay="100 * idx")
						h2(class="flex items-center gap-2 group-hover:text-brand-green duration-200")
							svgo-check(class="!mb-0")
							span {{ list.heading }}
						p(class="lg:w-3/4 text-zinc-600") {{ list.description }}
</template>

<style scoped>
.nav-enter-active, .nav-leave-active {
	transition: all 0.5s ease-in-out;
}

.nav-enter-from, .nav-leave-to {
	opacity: 0;
}
</style>