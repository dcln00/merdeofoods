<script setup lang="ts">
useHead({
	title: 'About - MerdeoFoods',
})

const teams = [
	{
		name: 'Nana Kofi Sarpong (Hendrix)',
		role: 'Founder and CEO',
		photo: 'v1745537056/Merdeo%20Foods/team/team-1.jpg',
		socials: {
			linkedin: '#',
			x: '#',
		},
	},
	{
		name: 'Roxanne Oduro',
		role: 'Co-Founder and COO',
		photo: 'v1745537056/Merdeo%20Foods/team/team-2.jpg',
		socials: {
			linkedin: '#',
			x: '#',
		},
	},
	{
		name: 'Nii Ayite Aryeh',
		role: 'Co-Founder and CTO',
		photo: 'v1745537056/Merdeo%20Foods/team/team-3.jpg',
		socials: {
			linkedin: '#',
			x: '#',
		},
	},
]

const gallery = [
	'v1745589476/Merdeo%20Foods/gallery/action-1.png',
	'v1745589479/Merdeo%20Foods/gallery/action-2.png',
	'v1745589479/Merdeo%20Foods/gallery/action-3.png',
	'v1745589477/Merdeo%20Foods/gallery/action-4.png',
	'v1745589476/Merdeo%20Foods/gallery/action-1.png',
	'v1745589479/Merdeo%20Foods/gallery/action-2.png',
]

const visibleRef = ref(false)
const indexRef = ref(0)

const showImg = (index: number) => {
	indexRef.value = index
	visibleRef.value = true
}
const onHide = () => (visibleRef.value = false)
</script>

<template lang="pug">
Hero(title="About Merdeo" description="We are reinventing Africa's food system together")
section#about-intro(class="py-20")
	.container
		p(class="text-zinc-600") Merdeo's solution is to connect small restaurants and food businesses directly to local farmers through our e-commerce platform and cold solar storage facilities. Merdeo is committed to revolutionizing the way small and medium-sized restaurants procure ingredients. Our mission is to provide food businesses with direct access to fresh farm produce while saving them time, money and resources.
section#about-hero(class="py-28 lg:py-40 relative")
	.photo-wrapper(class="absolute top-0 left-0 w-full h-full -z-[1] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:bg-black/60 overflow-hidden")
		NuxtImg(src="v1745505522/Merdeo%20Foods/merdeo-about-hero.jpg" provider="cloudinary" class="w-full h-full object-cover object-center")
	.container
		h1(class="text-white lg:w-1/2 text-center mx-auto font-light") Building a future-ready agricultural ecosystem in Africa with technology
section#about-team(class="py-20")
	.container
		.heading(class="text-center space-y-2 pb-8 lg:pb-12")
			h6(class="uppercase tracking-tight text-sm text-brand-green") Driven by Passion
			h1 The #[span(class="text-brand-green") Merdeo Team]
		div(class="flex flex-wrap")
			div(v-for="(team, idx) in teams" :key="idx" class="w-full lg:w-1/3 p-4 max-lg:px-0 space-y-4")
				div(class=" aspect-[4/5] overflow-hidden bg-zinc-300 group relative")
					.overlay(class="absolute z-[1] top-0 left-0 w-full h-full bg-black/70 opacity-0 duration-300 group-hover:opacity-100")
					.socials(class="flex gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 z-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 duration-300 text-white *:text-2xl")
						NuxtLink(:to="team.socials.x" target="_blank" class="cursor-pointer")
							svgo-x
						NuxtLink(:to="team.socials.linkedin" target="_blank" class="cursor-pointer")
							svgo-linkedin
					NuxtImg(:src="team.photo" provider="cloudinary" class="w-full h-full object-cover object-center duration-300 group-hover:scale-105")
				.team-details(class="tracking-tight")
					h2.name {{ team.name }}
					p.role(class="text-zinc-600") {{ team.role }}
section#about-gallery(class="pb-20")
	.container
		.heading(class="text-center space-y-2 pb-8 lg:pb-12")
			h6(class="uppercase tracking-tight text-sm text-brand-green") Gallery
			h1 #[span(class="text-brand-green") Merdeo] in Action
		div(class="flex flex-wrap")
			div(v-for="(photo, idx) in gallery" :key="idx" class="w-full lg:w-1/3 p-4 max-lg:px-0 space-y-4")
				div(class="aspect-video overflow-hidden bg-zinc-300 group relative cursor-pointer" @click="() => showImg(idx)")
					svgo-eye(class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 duration-300 text-white text-3xl")
					NuxtImg(:src="photo" provider="cloudinary" class="w-full h-full object-cover object-center duration-300 group-hover:scale-105")
			VueEasyLightbox(:visible="visibleRef" :imgs="gallery.map(x => `https://res.cloudinary.com/dyr6sb7gn/image/upload/f_auto,q_auto,w_1280/${x}`) " :index="indexRef" @hide="onHide" rotateDisabled pinchDisabled loop moveDisabled)
</template>