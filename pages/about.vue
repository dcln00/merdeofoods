<script setup lang="ts">
const teams = [
	{
		name: 'Nana Kofi Sarpong (Hendrix)',
		role: 'Founder and CEO',
		photo: 'v1745537056/Merdeo%20Foods/team/team-1.jpg',
	},
	{
		name: 'Roxanne Oduro',
		role: 'Co-Founder and COO',
		photo: 'v1745537056/Merdeo%20Foods/team/team-2.jpg',
	},
	{
		name: 'Nii Ayite Aryeh',
		role: 'Co-Founder and CTO',
		photo: 'v1745537056/Merdeo%20Foods/team/team-3.jpg',
	},
]
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
		h1(class="text-white lg:w-1/2 text-center mx-auto") Building a future-ready agricultural ecosystem in Africa with technology
section#about-team(class="py-20")
	.container
		.heading(class="text-center space-y-2 pb-8 lg:pb-12")
			h6(class="uppercase tracking-tight text-sm text-brand-green") Driven by Passion
			h1 The #[span(class="text-brand-green") Merdeo Team]
		div(class="flex flex-wrap")
			div(v-for="(team, idx) in teams" :key="idx" class="w-full lg:w-1/3 p-4 max-lg:px-0 space-y-4")
				div(class=" aspect-[4/5] overflow-hidden bg-zinc-300")
					NuxtImg(:src="team.photo" provider="cloudinary" class="w-full h-full object-cover object-center")
				.team-details(class="tracking-tight")
					h2.name {{ team.name }}
					p.role(class="text-zinc-600") {{ team.role }}
</template>