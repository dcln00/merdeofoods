<script setup lang="ts">
import type { NuxtError } from '#app'
const { $lenis } = useNuxtApp()

useHead({
	title: `Page Not Found - MerdeoFoods`,
})

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })

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
	section#error(class="lg:grow relative h-screen flex items-center justify-center")
		div(class="text-center")
			h2(class="text-9xl pb-8 font-extrabold tracking-tighter") #[span(class="sr-only") Error] {{ error.statusCode }}
			p(class="text-xl tracking-tight lg:text-2xl mb-8") {{ error.statusMessage }}
			button(rel="noopener noreferrer" class="mx-auto bg-brand-accent hover:bg-[#ac8d2a] duration-300 text-white py-4 px-6" @click="handleError")
				p Back to Homepage
	AppFooter
</template>