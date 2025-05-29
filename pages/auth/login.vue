<script setup lang="ts">
useHead({
	title: 'Login - MerdeoFoods',
})

definePageMeta({
  layout: false,
})

const input = useState('login', () => ({
	email: 'test@example.com',
	password: 'Testing123',
}))

const isLoading = ref(false)
const disabled = ref(false)

const signInWithOAuth = async () => {}

const login = async () => {
	try {
		if(!input.value.email || !input.value.password ) return
		isLoading.value = true
		disabled.value = true
		await navigateTo('/dashboard')
	} catch(e) {
		console.error(e)
	} finally {
		isLoading.value = false
		disabled.value = false
	}
}
</script>

<template lang="pug">
section#login(class="py-0 lg:py-8/")
	svgo-auth-bg(class="hidden lg:block fixed top-0 -right-20 !w-screen !h-screen -z-[2]" filled)
	div(class="flex items-center")
		.container(class="grid grid-cols-2 gap-2")
			div(class="hidden h-screen lg:flex bg-zinc-200/ items-center justify-center col-span-1 sticky top-0")
				div(class="w-[360px] h-[400px] bg-zinc-400/ relative rounded-md flex items-end p-4")
					.photo(class="absolute top-0 left-0 w-full h-full")
						NuxtImg(src="v1746035626/Merdeo%20Foods/auth.jpg" provider="cloudinary" class="w-full h-full object-cover object-center rounded-md pointer-events-none" placeholder)
					div(class="bg-white w-full p-2 rounded-md flex gap-3 items-center relative z-10")
						.icon(class="aspect-square bg-brand-accent size-12 p-1 rounded-md")
							svgo-auth-green(class="!w-full !h-full" filled)
						.details
							p(class="font-bold text-zinc-800") 2 items on their way to you
							p(class="text-sm text-zinc-600") Est delivery in 10 mins
					div(class="flex items-center gap-2 bg-white px-4 py-2 absolute -top-4 -left-20 rounded-md border border-zinc-300 shadow-lg")
						svgo-auth-cart(class="text-xl !mb-0")
						p 24 items in cart
					div(class="flex items-center gap-2 bg-white px-4 py-2 absolute top-[40%] -right-20 rounded-md border border-zinc-300 shadow-lg")
						svgo-auth-check(class="text-xl !mb-0")
						p Delivery Complete
					svgo-auth-yellow(class="absolute -bottom-[30%] -left-[15%] !w-full !h-full -z-[1]" filled)
					svgo-auth-green(class="absolute -top-[30%] -right-[30%] !w-full !h-full -z-[1]" filled)
			div(class="col-span-full lg:col-span-1 flex items-center")
				ui-form(heading="Welcome back!" tagline="Log in to your account by completing the form below" :input="input" @handle-submit="login" @google-auth="signInWithOAuth" :loading="isLoading" :disabled="disabled")
</template>