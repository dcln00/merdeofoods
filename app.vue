<script setup lang="ts">
const { $lenis } = useNuxtApp()

useHead({
	title: 'MerdeoFoods',
})

useSeoMeta({
	title: 'MerdeoFoods',
	ogTitle: 'MerdeoFoods',
	description: `Accelerating digital financial services for smallholder farmers in Africa`,
	ogDescription: `Accelerating digital financial services for smallholder farmers in Africa`,
	ogType: 'website',
	ogImage: 'https://res.cloudinary.com/dyr6sb7gn/image/upload/v1745355879/Merdeo%20Foods/merdeo-og.png',
	ogImageAlt: 'MerdeoFoods',
	ogUrl: 'https://merdeofoods.com/',
	twitterTitle: 'MerdeoFoods',
	twitterDescription: 'Accelerating digital financial services for smallholder farmers in Africa',
	twitterCard: 'summary_large_image',
})

const show = ref(false)

const toggleShow = () => {
	show.value = !show.value

	if(show.value) {
		$lenis.stop()
	} else {
		$lenis.start()
	}
}
</script>

<template lang="pug">
.body-outlet(class="flex flex-col min-h-screen")
	AppHeader(@toggle-show="toggleShow")
	Navigation(:show="show" @toggle-show="toggleShow")
	main(class="lg:grow")
		NuxtPage
	AppFooter
</template>