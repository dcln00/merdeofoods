<script setup lang="ts">
defineProps({
	heading: String,
	tagline: String,
	input: Object,
	disabled: Boolean,
})

const passwordBind = {
	pattern: '.{7,}'
}

// render inputs on route change
const route = useRoute()
</script>

<template lang="pug">
div(class="flex flex-col m-4 p-6 rounded-md sm:p-10 bg-white text-gray-800")
	div(class="mb-8 text-center")
		NuxtLink(to="/" class="inline-block")
			.logo(class="w-[150px] h-[80px] overflow-hidden mx-auto")
				svgo-logo(class="!w-full !h-full")
		div(class="space-y-2")
			h1(class="text-2xl normal-case tracking-normal") {{ heading }}
			p(class="text-sm text-gray-600") {{ tagline }}
	div(class="space-y-12 pb-4")
		button(v-if="route.path === '/auth/login'" aria-label="Login with Google" type="button" class="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-300 focus:ring-brand-green" @click="$emit('googleAuth')")
			<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 256 262"><!-- Icon from SVG Logos by Gil Barbara - https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt --><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
			p(class="text-gray-600") Login with Google
		button(v-if="route.path === '/auth/register'" aria-label="Signup with Google" type="button" class="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-300 focus:ring-brand-green" @click="$emit('googleAuth')")
			svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current")
				path(d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z")
			p(class="text-gray-600") Signup with Google
	div(class="flex items-center my-4")
		hr(class="w-full text-gray-600")
		p(class="px-4 text-gray-600 whitespace-nowrap") or Login with Email
		hr(class="w-full text-gray-600")
	form(novalidate @submit.prevent="$emit('handleSubmit')" class="group space-y-12")
		div(class="space-y-4")
			//- FULL NAME
			div(v-if="route.path === '/auth/register'")
				label(for="name" class="block mb-2 text-sm") Full Name
				input(required v-model="input.name" name="name" id="name" placeholder="enter your full name" autocomplete="off" class="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent")
			//- EMAIL
			div
				label(for="email" class="block mb-2 text-sm") Email address
				input(required :disabled="disabled" v-model="input.email" type="email" name="email" id="email" autocomplete="off" :placeholder="route.path === '/auth/login' ? 'name@domain.com' : 'enter an email'" class="peer w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent [&:not(:placeholder-shown):not(:focus):invalid]:text-red-600 [&:not(:placeholder-shown):not(:focus):invalid]:border-red-600" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
				p(class="mt-2 hidden peer-[&:not(:placeholder-shown):not(:focus):invalid]:block text-red-600 text-sm") please provide a valid email address
			//- PASSWORD
			div
				div(v-if="route.path === '/auth/login'" class="flex justify-between mb-2")
					label(for="password" class="text-sm") Password
					a(rel="noopener noreferrer" href="#" class="text-xs hover:underline text-brand-accent") Forgot password?
				label(v-if="route.path === '/auth/register'" for="email" class="block mb-2 text-sm") Password
				input(required :disabled="disabled" v-model="input.password" type="password" name="password" id="password" :placeholder="route.path === '/auth/login' ? '**********' : 'set a password'" :class="`peer w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent ${route.path === '/auth/register' && '[&:not(:placeholder-shown):not(:focus):invalid]:text-red-600 [&:not(:placeholder-shown):not(:focus):invalid]:border-red-600'}`" v-bind="route.path === '/auth/register' && passwordBind")
				p(v-if="route.path === '/auth/register'" class="mt-2 hidden peer-[&:not(:placeholder-shown):not(:focus):invalid]:block text-red-600 text-sm") your password must be at least 7 characters long
		//- SUBMIT
		div(class="space-y-4")
			div
				button(v-if="route.path === '/auth/login'" type="submit" class="w-full px-8 py-3 rounded-md bg-brand-green text-gray-50 group-invalid:pointer-events-none group-invalid:opacity-30") Sign in
				button(v-if="route.path === '/auth/register'" type="submit" class="w-full px-8 py-3 rounded-md bg-brand-green text-gray-50 group-invalid:pointer-events-none group-invalid:opacity-30") Register
			p(v-if="route.path === '/auth/register'" class="text-xs text-center text-gray-600") By proceeding, you agree to the #[NuxtLink(to="/" class="hover:underline text-brand-green") Privacy] and #[NuxtLink(to="/" class="hover:underline text-brand-green") Terms and conditions].
			p(v-if="route.path === '/auth/login'" class="px-6 text-sm text-center text-gray-600") Don't have an account yet? 
				NuxtLink(to="/auth/register" rel="noopener noreferrer" class="hover:underline text-brand-accent") Register
			p(v-if="route.path === '/auth/register'" class="px-6 text-sm text-center text-gray-600") Already have an account? 
				NuxtLink(to="/auth/login" rel="noopener noreferrer" class="hover:underline text-brand-green") Login
</template>