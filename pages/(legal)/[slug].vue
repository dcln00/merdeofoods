<script setup lang="ts">
const route = useRoute()

const formatSlug = computed(() => {
  const slug = route.params.slug as string
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
})

useHead({
	title: () => `${formatSlug.value} - MerdeoFoods`,
})

definePageMeta({
	validate: async(route) => {
		const legalRoutes = ['terms', 'privacy-policy']
		return legalRoutes.includes(`${route.params.slug}`)
	}
})

const { data: page } = await useAsyncData(`${route.params.slug}`, () => {
  return queryCollection('content').path(`/page/${route.params.slug}`).first()
})
</script>

<template lang="pug">
Hero(v-if="route.params.slug === 'terms'" title="Terms and Conditions")
Hero(v-if="route.params.slug === 'privacy-policy'" title="Privacy Policy")

section#content(class="py-20")
	.container(class="lg:w-2/3")
		ContentRenderer(:value="page" class="prose max-w-none prose-a:no-underline prose-h2:pb-4 prose-h1:font-normal prose-p:text-zinc-600 prose-strong:text-black prose-headings:text-black")
</template>