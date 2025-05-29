<script setup lang="ts">
const route = useRoute()
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
	.header(class="bg-zinc-200 py-4")
		.container(class="flex justify-between items-center")
			NuxtLink(to="/")
				.logo(class="w-[120px] h-[50px]")
					svgo-logo(class="!w-full !h-full")
			.input(v-if="route.path === '/dashboard/commerce'" class="flex items-center gap-2 w-[500px] bg-white px-4 py-2 rounded-sm")
				svgo-dashboard-search(class="!mb-0")
				input(type="text" placeholder="Search for food items" class="w-full focus:outline-none")
			nav(v-if="route.path === '/dashboard/commerce'" )
				ul(class="flex items-center gap-4 text-zinc-800")
					li
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
</template>

<style scoped lang="postcss">
.active-link {
	@apply text-zinc-800 bg-zinc-200;
}

.active-header-link {
	@apply text-brand-green;
}
</style>

