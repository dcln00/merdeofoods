<script setup lang="ts">
useHead({
	title: 'Login - MerdeoFoods',
})

definePageMeta({
  layout: false,
})

const input = reactive({
	email: '',
	password: '',
})

const signInWithOAuth = async () => {}

const logiin = async () => {}
</script>

<template lang="pug">
section#login(class="py-0 lg:py-20")
	div(class="h-screen flex items-center")
		.container(class="grid grid-cols-2 gap-2")
			div(class="hidden lg:block") hello
			div(class="col-span-full lg:col-span-1")
				ui-form(heading="Welcome back!" tagline="Log in to your account by completing the form below" :input="input" @handle-submit="login" @google-auth="signInWithOAuth")
</template>