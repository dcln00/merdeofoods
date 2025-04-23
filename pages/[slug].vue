<script setup lang="ts">
const route = useRoute()
const nav = useNavigation()

const formatSlug = computed(() => {
  const slug = route.params.slug as string
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
})

useHead({
	title: () => `${formatSlug.value} - MerdeoFoods`,
})

definePageMeta({
	validate: async(route) => {
		const nav = useNavigation()
		const routes = nav.value.map(x => x.name)
		return routes.includes(`${route.params.slug}`)
	}
})
</script>

<template lang="pug">
section#hero(class="pt-40 pb-24 bg-zinc-100")
	.container
		div(class="text-center space-y-4")
			h1 {{ route.params.slug }}
			svgo-caret(class="text-2xl rotate-180 mx-auto")
</template>