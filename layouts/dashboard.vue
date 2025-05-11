<script setup lang="ts"></script>

<template lang="pug">
.body-outlet(class="flex flex-col min-h-screen")
	dashboard-header
	main(class="lg:grow")
		slot
</template>