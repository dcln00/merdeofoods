<script lang="ts" setup>
const route = useRoute()
const { addToCart } = useCart() as any

const { data: product, status, error } = await useLazyAsyncData(`${route.params.slug}`, () => {
  return queryCollection('products')
	.where('slug', '=', route.params.slug)
	.first()
})

const quantity = ref(1)
</script>

<template lang="pug">
section#product(class="relative flex items-center min-h-screen")
	//- svgo-dashboard-left-petal(class="text-3xl")
	.container(class="grow")
		div(class="grid grid-cols-2 gap-6 items-center")
			div(class="col-span-full lg:col-span-1 p-8 py-4")
				div(class="rounded-md bg-zinc-200 p-16 mb-4")
					NuxtImg(:src="product?.image" class="w-full h-full object-contain")
				div(class="grid grid-cols-3 gap-4")
					div(v-for="i in 3" class="col-span-1 rounded-md bg-zinc-200 aspect-video")
						NuxtImg(:src="product?.image" class="w-full h-full object-contain")
			div(class="col-span-full lg:col-span-1 p-8 py-4 rounded-md space-y-6")
				h1(class="text-2xl capitalize text-zinc-600 font-normal") {{ product?.name }}
				.price
					p(class="text-3xl font-bold text-brand-green") GHS {{ product?.price }}
					small(class="text-zinc-500 text-xs") Price for each Kilogram
				p(class="text-sm text-zinc-500") {{ product?.description }}
				div(class="flex items-center gap-4 w-full")
					p Quantity
					div(class="flex items-center gap-2")
						svgo-dashboard-minus(class="!mb-0" @click="() => quantity--")
						input(type="number" class="w-16 text-center border-none rounded-md" :value="quantity")
						svgo-dashboard-plus(class="!mb-0" @click="() => quantity++")
					button.btn(class="bg-neutral-800 hover:bg-neutral-900 w-full" @click="addToCart({...product, quantity})") Add to Cart
</template>