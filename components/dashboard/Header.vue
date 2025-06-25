<script setup lang="ts">
const { $lenis } = useNuxtApp() as any
const route = useRoute()
const { cart, total, removeFromCart } = useCart() as any

const showCart = ref(false)

const toggleCart = () => {
	showCart.value = !showCart.value

	if(showCart.value) {
		$lenis.stop()
	} else {
		$lenis.start()
	}
}
</script>

<template lang="pug">
header(class="hidden lg:block")
	.sub-header(class="bg-neutral-800")
		.container
			ul(class="flex gap-4 text-white")
				li #[NuxtLink(to="/dashboard/commerce" exactActiveClass='active-link' class="block py-2 px-4") Commerce]
				li #[NuxtLink(to="/dashboard/inventory" exactActiveClass='active-link' class="block py-2 px-4") Inventory]
				li #[NuxtLink(to="/dashboard" exactActiveClass='active-link' class="block py-2 px-4") Dashboard]
				//- li(class="bg-zinc-200 text-zinc-800") Dashboard
	.header(class="relative bg-zinc-200 py-4")
		.container(class="flex justify-between items-center")
			NuxtLink(to="/")
				.logo(class="w-[120px] h-[50px]")
					svgo-logo(class="!w-full !h-full")
			.input(v-if="route.path.startsWith('/dashboard/commerce')" class="flex items-center gap-2 w-[500px] bg-white px-4 py-2 rounded-sm")
				svgo-dashboard-search(class="!mb-0")
				input(type="text" placeholder="Search for food items" class="w-full focus:outline-none")
			nav(v-if="route.path.startsWith('/dashboard/commerce')")
				ul(class="flex items-center gap-4 text-zinc-800")
					li(@click="toggleCart")
						NuxtLink(to="#" activeClass='active-header-link' class="flex items-center gap-1")
							svgo-dashboard-cart(class="text-xl !mb-0")
							p Cart
					li
						NuxtLink(to="#" activeClass='active-header-link' class="flex items-center gap-1")
							svgo-dashboard-bell(class="!mb-0")
							p Nofitications
					li
						NuxtLink(to="/dashboard/account" activeClass='active-header-link' class="flex items-center gap-1")
							svgo-dashboard-user(class="text-xl !mb-0")
							p Account
			nav(v-else class="ms-auto")
				ul(class="flex items-center gap-4 text-zinc-800")
					li #[NuxtLink(to="/dashboard/orders" activeClass='active-header-link' class="flex items-center gap-1") Orders]
					li
						NuxtLink(to="/dashboard/account" activeClass='active-header-link' class="flex items-center gap-1")
							svgo-dashboard-user(class="text-xl !mb-0")
							p Account
	Transition(name="cart")
		.cart(v-if="showCart" class="absolute right-0 w-[450px] h-full bg-zinc-200 z-10 p-8 overflow-scroll")
			.header(class="space-y-4")
				div(class="flex items-center justify-between")
					h2(class="text-xl") Subtotal
					p(class="text-brand-green font-bold text-xl") GHS {{ total }}
				button.btn(class="bg-neutral-800 hover:bg-neutral-900 w-full") Proceed to checkout
			hr(class="border-zinc-300 my-8")
			ul.cart-items(class="space-y-4")
				li(v-for="(item, idx) in cart" :key="idx" class="flex items-center gap-6 pb-4 border border-b-zinc-300 last:border-b-0")
					.photo(class="size-24 bg-zinc-400 rounded-md")
						NuxtImg(src="products/vegetables.png" class="w-full h-full object-contain object-center")
					.details(class="space-y-1")
						p(class="text-zinc-700 text-lg") {{ item.name}}
						p(class="text-brand-green text-lg font-bold") GHS {{ item.price }}/kg
						div(class="flex items-center gap-2")
							svgo-dashboard-minus(class="!mb-0" @click="() => quantity--")
							input(type="number" class="w-8 text-center border-none rounded-md bg-zinc-200" :value="item.quantity" readonly)
							svgo-dashboard-plus(class="!mb-0" @click="() => quantity++")
						button(class="text-red-500 hover:text-red-700 uppercase text-xs" @click="removeFromCart(idx)") Remove
</template>

<style scoped lang="postcss">
.active-link {
	@apply text-zinc-800 bg-zinc-200;
}

.active-header-link {
	@apply text-brand-green;
}

.cart-enter-active, .cart-leave-active {
	transition: all 0.5s ease-in-out;
}

.cart-enter-from, .cart-leave-to {
	transform: translateX(100%);
}
</style>

