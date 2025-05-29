<script setup lang="ts">
useHead({
	title: 'Dashboard - MerdeoFoods',
})

const actions = ref([
	{
		id: 1,
		branch: 'Osu High Street',
		date: 'DD/MM/YYYY',
		total: '1200',
		requester: 'Solomon Agyeman',
	},
	{
		id: 2,
		branch: 'Amasaman',
		date: 'DD/MM/YYYY',
		total: '1500',
		requester: 'Kwame Agyeman',
	},
])

const data = [
  { month: 'January', sales: 6000},
  { month: 'February', sales: 4000},
  { month: 'March', sales: 12000},
  { month: 'April', sales: 8000},
  { month: 'May', sales: 10000},
  { month: 'June', sales: 7000},
  { month: 'July', sales: 12000},
]

const categories = {
  sales: {
    name: 'Sales',
    color: '#218921',
  },

}

const xFormatter = (i: number) => data[i].month
</script>

<template lang="pug">
section#dashboard-title(class="pt-12 pb-8")
	.container
		h1(class="text-2xl") Dashboard
section#statistics(class="pb-16")
	.container
		div(class="grid grid-cols-3 gap-6 items-start text-white")
			div(class="bg-neutral-700 col-span-full lg:col-span-1 p-8 space-y-2 rounded-md")
				p Branches
				h1 4
			div(class="bg-brand-green col-span-full lg:col-span-1 p-8 space-y-2 rounded-md")
				p Total Orders
				h1 200
			div(class="bg-brand-accent col-span-full lg:col-span-1 p-8 space-y-2 rounded-md")
				p Users
				h1 12
section#chart(class="pb-16")
	.container
		AreaChart(
				:data="data"
				:categories="categories"
				:height="300"
				:xFormatter="xFormatter"
				:x-grid-line="true"
				:y-grid-line="true"
				:hide-legend="true"
			)
section#frequency(class="pb-16")
	.container
		div(class="grid grid-cols-2 gap-6 items-start text-white")
			div(class="border-2 border-zinc-300 col-span-full lg:col-span-1 p-8 space-y-4 text-black rounded-md")
				h2(class="text-xl text-zinc-600") Restock Frequency
				div(class="space-y-2")
					div(class="flex items-center")
						p(class="whitespace-nowrap pr-4") Tomatoes
						hr(class="w-full border border-zinc-300")
						p(class="whitespace-nowrap ps-4 text-green-700") 10 days
					div(class="flex items-center")
						p(class="whitespace-nowrap pr-4") Lettuce
						hr(class="w-full border border-zinc-300")
						p(class="whitespace-nowrap ps-4 text-green-700") 7 days
					div(class="flex items-center")
						p(class="whitespace-nowrap pr-4") Rice
						hr(class="w-full border border-zinc-300")
						p(class="whitespace-nowrap ps-4 text-red-700") 30 days
					div(class="flex items-center")
						p(class="whitespace-nowrap pr-4") Bananas
						hr(class="w-full border border-zinc-300")
						p(class="whitespace-nowrap ps-4 text-green-700") 7 days
					div(class="flex items-center")
						p(class="whitespace-nowrap pr-4") Oranges
						hr(class="w-full border border-zinc-300")
						p(class="whitespace-nowrap ps-4 text-yellow-700") 12 days
			div(class="border-2 border-zinc-300 col-span-full lg:col-span-1 p-8 space-y-4 text-black rounded-md")
				h2(class="text-xl text-zinc-600") Order Frequency
				div(class="space-y-2")
					div(class="flex items-center")
						p(class="whitespace-nowrap pr-4") Osu High Street
						hr(class="w-full border border-zinc-300")
						p(class="whitespace-nowrap ps-4 text-green-700") 10 days
					div(class="flex items-center")
						p(class="whitespace-nowrap pr-4") Amasaman
						hr(class="w-full border border-zinc-300")
						p(class="whitespace-nowrap ps-4 text-green-700") 7 days
					div(class="flex items-center")
						p(class="whitespace-nowrap pr-4") Madina
						hr(class="w-full border border-zinc-300")
						p(class="whitespace-nowrap ps-4 text-red-700") 30 days
					div(class="flex items-center")
						p(class="whitespace-nowrap pr-4") Kwashieman
						hr(class="w-full border border-zinc-300")
						p(class="whitespace-nowrap ps-4 text-green-700") 7 days
					div(class="flex items-center")
						p(class="whitespace-nowrap pr-4") East Legon
						hr(class="w-full border border-zinc-300")
						p(class="whitespace-nowrap ps-4 text-yellow-700") 12 days
section#actions(class="pb-20")
	.container
		.heading(class="mb-6")
			h2(class="text-xl text-zinc-600") Pending Actions
		table(class="min-w-full table-fixed")
			thead
				tr(class="bg-gray-200 *:font-medium")
					th(class="w-4/12 px-4 py-3 text-left") Branch
					th(class="w-2/12 px-4 py-3 text-left") Total in GHS
					th(class="w-2/12 px-4 py-3 text-left") Requester
					th(class="w-2/12 px-4 py-3 text-left") Actions
					th(class="w-2/12 px-4 py-3 text-left")
			tbody
				tr(v-for="(action, idx) in actions" :key="idx" class="even:bg-gray-100")
					td(class="p-4") {{ action.branch }}
					td(class="p-4") {{ action.total }}
					td(class="p-4") {{ action.requester }}
					td(class="p-4") 
						button.btn(class="w-full bg-neutral-800 hover:bg-neutral-900" @click="") View Details
					td(class="p-4") 
						button.btn(class="w-full" @click="") Approve
</template>