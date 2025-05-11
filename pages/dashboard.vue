<script setup lang="ts">
const { $lenis } = useNuxtApp()

onMounted(() => {
  $lenis.options.lerp = 0.5
})

onUnmounted(() => {
  $lenis.options.lerp = 0.1
})

definePageMeta({
  layout: 'dashboard',
})
</script>

<template lang="pug">
div(v-if="$device.isMobile" class="h-dvh flex justify-center items-center")
	p Kindly access dashboard from desktop
div(v-if="$device.isDesktop")
	NuxtPage
</template>