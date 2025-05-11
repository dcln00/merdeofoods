<script setup lang="ts">
defineProps(['open', 'title'])
</script>

<template lang="pug">
Teleport(to="#teleports")
	Transition(name="overlay")
		.overlay(class="fixed top-0 left-0 w-full h-full bg-black/50 z-50 backdrop-blur-sm" @click="$emit('close-modal')" v-if="open")
	Transition(name="modal")
		#modal(class="fixed top-1/2 left-1/2 w-[90%] max-w-[500px] bg-white rounded-md z-50 -translate-x-1/2 -translate-y-1/2" v-if="open")
			.header(class="flex items-center justify-between px-4 py-4")
				h3(class="font-semibold tracking-tight") {{ title }}
				button.close(@click="$emit('close-modal')")
					svgo-close(filled class="w-6 h-6 text-zinc-800")
			.content(class="pb-4 px-4")
				slot(name="content")
</template>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
	transition: all .3s;
	  transition-timing-function: ease-in;
}

.overlay-leave-to, .ovlay-enter-from {
	  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
	transition: all .3s;
	  transition-timing-function: ease-in;
}

.modal-leave-to {
	  opacity: 0;
}

.modal-enter-from {
	opacity: 0;
}
</style>