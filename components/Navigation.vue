<script setup lang="ts">
defineProps({
	show: Boolean,
})

const nav = useNavigation()
</script>

<template lang="pug">
div
	Transition(name="overlay")
		.overlay(v-if="show" @click="$emit('toggleShow')" class="fixed top-0 left-0 z-10 w-full h-dvh bg-black/70")
	Transition(name="nav")
		nav(class="fixed top-0 right-0 z-50 bg-white w-2/3 h-screen p-8" v-if="show")
			div(class="mb-8")
				.nav-header(class="flex items-center mb-12")
					svgo-close(class="text-brand-green ms-auto cursor-pointer text-xl" @click="$emit('toggleShow')")
				ul(class="*:tracking-tight *:capitalize space-y-4")
					li(v-for="(item, index) in nav" :key="index") #[NuxtLink(:to="item.slug" activeClass='active-link' @click="$emit('toggleShow')") {{ item.display }}]
			div(@click="$emit('toggleShow')")
				NuxtLink(to="/auth/register")
					button(class="bg-brand-green hover:bg-[#155e15] duration-300 text-white px-4 py-2 rounded w-full") Get Started
</template>

<style scoped>
.nav-enter-active, .nav-leave-active {
	transition: all 0.3s ease-in-out;
}

.nav-enter-from, .nav-leave-to {
	transform: translateX(100%);
}


.overlay-enter-active,
.overlay-leave-active {
	transition: all .4s;
	  transition-timing-function: ease-in;
}

.overlay-leave-to, .overlay-enter-from {
	  opacity: 0;
}

.active-link {
		position: relative;
		@apply text-brand-green;
}
</style>