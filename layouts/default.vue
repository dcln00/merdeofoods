<script setup lang="ts">
const { $lenis } = useNuxtApp() as any

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
	app-header(@toggle-show="toggleShow")
	Navigation(:show="show" @toggle-show="toggleShow")
	main(class="lg:grow")
		slot
	app-footer
</template>