<script setup lang="ts">
useHead({
	title: 'Account Setup - MerdeoFoods',
})

definePageMeta({
	middleware: [async () => {
		const input = useState<{ email: string; password: string }>('register')

		if(!input.value) return navigateTo('/auth/register')
		
		if (input.value.email !== 'test@example.com' && input.value.password !== 'Testing123') return navigateTo('/auth/register')
	}]
})

const input = reactive({
	businessName: '',
	businessEmail: '',
	businessPhone: '',
	businessLocation: '',
	contactPerson: '',
	contactEmail: '',
	contactPhone: '',
	contactPosition: '',
})
const isLoading = ref(false)
const disabled = ref(false)

const currentStep = ref(1)

const nextStep = () => {
  if (currentStep.value < 3) currentStep.value++
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}

const submit = async () => {
	try {
		if (currentStep.value < 3) {
		nextStep()
	} else {
		isLoading.value = true
		alert('Form Submitted. Navigating to dashboard...')
	}
	} finally {
		isLoading.value = false
	}
}
</script>

<template lang="pug">
ui-setup-form(:heading="currentStep === 1 ? 'Setup your account' : currentStep === 2 ? 'Contact Person Information' : 'All done!' " :tagline="currentStep === 1 ? 'Complete your business information below' : currentStep === 2 ? 'Complete your information below' : 'Thank you for signing up to Merdeo, enjoy superior foodstock management with excellent customer service.' " :input="input" @handle-submit="submit" :disabled="disabled" :loading="isLoading" :step="currentStep" @prev="prevStep")
</template>