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
section#login(class="h-screen flex items-center")
	.container(class="grid grid-cols-2 gap-2")
		div hello
		div
			ui-form(heading="Welcome back!" tagline="Log in to your account by completing the form below" :input="input" @handle-submit="login" @google-auth="signInWithOAuth")
</template>