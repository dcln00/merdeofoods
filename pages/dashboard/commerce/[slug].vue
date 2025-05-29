<script lang="ts" setup>
const route = useRoute()

const { data: product, status, error } = await useLazyAsyncData(`${route.params.slug}`, () => {
  return queryCollection('products').path(`/products/${route.params.slug}`).first()
})
</script>

<template lang="pug">
section#product(class="pt-12 pb-12")
	.container
		div {{ route.params.slug }}
</template>