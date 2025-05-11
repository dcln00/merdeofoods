<script setup lang="ts">
defineProps(['label', 'placeholder', 'user', 'branches', 'roles'])
const name = defineModel('name')
const email = defineModel('email')
const branch = defineModel('branch')
const role = defineModel('role')
</script>

<template lang="pug">
form(novalidate @submit.prevent="$emit('submit')" :class="[{ 'space-y-4' : user }]")
	div(class="space-y-2")
		label.layer-primary(for="name") {{ label }}
		input(required id="name" type="text" v-model="name" :placeholder="placeholder" class="w-full text-sm px-3 py-2 border rounded-md border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent")
	div(class="space-y-2" v-if="user")
		label.layer-primary(for="email") Email
		input(required id="email" type="email" v-model="email" placeholder="Enter your email" class="w-full text-sm px-3 py-2 border rounded-md border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent")
	div(class="space-y-2" v-if="user")
		label.layer-primary(for="branch") Branch
		select(id="branch" name="branch" v-model="branch" class="peer w-full text-sm px-3 py-2 border rounded-md border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent")
			option(selected disabled value="") Select branch
			option(v-for="(branch, idx) in branches" :key="branch") {{ branch }}
	div(class="space-y-2" v-if="user")
		label.layer-primary(for="role") Role
		select(id="role" name="role" v-model="role" class="peer w-full text-sm px-3 py-2 border rounded-md border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent")
			option(selected disabled value="") Select Role
			option(v-for="(role, idx) in roles" :key="role") {{ role.name }}
	.footer(class="flex items-center justify-end pt-4")
		button.btn(type="submit") Save
</template>