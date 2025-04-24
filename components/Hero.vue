<script setup lang="ts">
const { x, y } = useWindowScroll()
defineProps(['title', 'description'])

onNuxtReady(() => {
	const { height: h } = useElementSize(hero)
	height.value = h.value
})

const hero = ref()
const height = ref(0)
</script>

<template lang="pug">
section#hero(class="pt-40 pb-24 bg-zinc-100" ref="hero")
	.container
		div(class="text-center space-y-4")
			h1 {{ title }}
			p(class="lg:w-1/2 lg:mx-auto text-zinc-600") {{ description }}
			svgo-caret(class="text-2xl rotate-180 mx-auto cursor-pointer hover:translate-y-2 duration-300" @click="() => y = height")
</template>