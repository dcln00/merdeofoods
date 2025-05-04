<script setup lang="ts">
defineProps({
	heading: String,
	tagline: String,
	input: Object,
	disabled: Boolean,
	loading: Boolean,
	step: Number
})
</script>

<template lang="pug">
div(class="flex flex-col w-full lg:m-4 p-6 sm:p-10 bg-white/")
	div(class="flex space-x-3 mb-8")
		span(v-for="(number, idx) in 3" :key="idx" :class="['w-1/3 h-2 rounded-full', {'bg-brand-green': step, 'bg-gray-200': step < number}]")
	div(class="mb-8 text-center")
		.logo(class="w-[150px] h-[80px] overflow-hidden mx-auto")
			svgo-logo(class="!w-full !h-full")
		div(class="space-y-2")
			h1(class="text-2xl normal-case tracking-normal") {{ heading }}
			p(class="text-sm text-gray-600") {{ tagline }}
	form(novalidate @submit.prevent="$emit('handleSubmit')" class="group space-y-8")
		div(class="space-y-4" v-if="step === 1")
			div
				label(for="name" class="block mb-2 text-sm") Name of Business
				input(required :disabled="disabled" v-model="input.businessName" type="text" name="name" id="name" autocomplete="off" placeholder="Kanvas Restaurant" class="peer w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent")
			div
				label(for="email" class="block mb-2 text-sm") Business Email
				input(required :disabled="disabled" v-model="input.businessEmail" type="email" name="email" id="email" autocomplete="off" placeholder="name@domain.com" class="peer w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent")
			div
				label(for="phone" class="block mb-2 text-sm") Business Phone Number
				input(required :disabled="disabled" v-model="input.businessPhone" type="text" name="phone" id="phone" autocomplete="off" placeholder="020XXXXXXX" class="peer w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent")
			div
				label(for="location" class="block mb-2 text-sm") Business Location
				textarea(required :disabled="disabled" id="location" name="location" rows="5" v-model="input.businessLocation" placeholder="5th Circular Street, Cantonments, Accra." class="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent resize-none")
		div(class="space-y-4" v-if="step === 2")
			div
				label(for="person" class="block mb-2 text-sm") Name of Contact Person
				input(required :disabled="disabled" v-model="input.contactPerson" type="text" name="person" id="person" autocomplete="off" placeholder="Kwesi Altman" class="peer w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent")
			div
				label(for="email" class="block mb-2 text-sm") Email
				input(required :disabled="disabled" v-model="input.contactEmail" type="text" name="email" id="email" autocomplete="off" placeholder="name@domain.com" class="peer w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent")
			div
				label(for="phone" class="block mb-2 text-sm") Phone Number
				input(required :disabled="disabled" v-model="input.contactPhone" type="text" name="phone" id="phone" autocomplete="off" placeholder="020XXXXXXX" class="peer w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent")
			div
				label(for="position" class="block mb-2 text-sm") Position/Title
				select(id="category" v-model="input.contactPosition" name="category" class="peer w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent")
					option(selected value="") Managing Director
					option Chief Executive Officer
					option Chief Financial Officer
					option Chief Operating Officer
		//- SUBMIT
		div(class="space-y-4")
			div
				button(v-if="step > 1" type="button" class="w-full px-8 py-3 rounded-md bg-zinc-300 hover:bg-zinc-400 text-black" @click="$emit('prev')") Back
			div
				button(type="submit" class="w-full px-8 py-3 rounded-md bg-brand-green hover:bg-[#155e15] text-gray-50 group-invalid:pointer-events-none group-invalid:opacity-30")
					svgo-spinner(v-if="loading" class="mx-auto")
					p(v-else) {{ step < 3 ? 'Next' : 'Let\'s go!' }}
</template>