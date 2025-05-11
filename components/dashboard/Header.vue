<script setup lang="ts"></script>

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
		.container(class="flex items-center")
			NuxtLink(to="/")
				.logo(class="w-[120px] h-[50px]")
					svgo-logo(class="!w-full !h-full")
			nav(class="ms-auto")
				ul(class="flex gap-4 text-zinc-800")
					li Orders
					li(class="flex items-center gap-1")
						svgo-dashboard-user(class="text-xl !mb-0")
						p Account
</template>

<style scoped lang="postcss">
.active-link {
	@apply text-zinc-800 bg-zinc-200;
}
</style>