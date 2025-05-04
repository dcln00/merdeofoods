<script setup lang="ts">
useHead({
	title: 'Register - MerdeoFoods',
})

const input = useState('input', () => ({
	email: '',
	password: '',
	verifyPassword: '',
}))

const isLoading = ref(false)
const disabled = ref(false)

const signInWithOAuth = async () => {}

const signup = async () => {
	try {
		if(!input.value.email || !input.value.password ) return
		isLoading.value = true
		disabled.value = true
		await navigateTo('/auth/register/account-setup')
	} catch(e) {
		console.error(e)
	} finally {
		isLoading.value = false
		disabled.value = false
	}
}
</script>

<template lang="pug">
ui-form(heading="Create an account" tagline="Complete the form below to create an account" :input="input" @handle-submit="signup" @google-auth="signInWithOAuth" :disabled="disabled" :loading="isLoading")
</template>