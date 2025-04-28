<script setup lang="ts">
import type { NuxtError } from '#app'

useHead({
	title: `Page Not Found - MerdeoFoods`,
})

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template lang="pug">
NuxtLayout
	section#error(class="lg:grow relative h-screen flex items-center justify-center")
		div(class="text-center")
			h2(class="text-9xl pb-8 font-extrabold tracking-tighter") #[span(class="sr-only") Error] {{ error.statusCode }}
			p(class="text-xl tracking-tight lg:text-2xl mb-8") {{ error.statusMessage }}
			button(rel="noopener noreferrer" class="mx-auto bg-brand-accent hover:bg-[#ac8d2a] duration-300 text-white py-4 px-6" @click="handleError")
				p Back to Homepage
</template>