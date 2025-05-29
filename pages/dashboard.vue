<script setup lang="ts">
const { $lenis } = useNuxtApp()

useHead({
	title: 'Dashboard - MerdeoFoods',
})

onMounted(() => {
  $lenis.options.lerp = 0.5
})

onUnmounted(() => {
  $lenis.options.lerp = 0.1
})

definePageMeta({
  layout: 'dashboard',
  middleware: [async () => {
		const input = useState<{ email: string; password: string }>('login')

		if(!input.value) return navigateTo('/auth/login')
		
		if (input.value.email !== 'test@example.com' && input.value.password !== 'Testing123') return navigateTo('/auth/login')
	}]
})
</script>

<template lang="pug">
div(v-if="$device.isMobile" class="h-dvh flex justify-center items-center")
	p Kindly access dashboard from desktop
div(v-if="$device.isDesktop")
	NuxtPage
</template>