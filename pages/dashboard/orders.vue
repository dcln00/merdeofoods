<script setup lang="ts">
useHead({
	title: 'Orders - MerdeoFoods',
})

const orders = ref([
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
		h1(class="text-2xl") Orders
section#statistics(class="pb-16")
	.container
		div(class="grid grid-cols-3 gap-6 items-start text-white")
			div(class="bg-neutral-700 col-span-full lg:col-span-1 p-8 space-y-2 rounded-md")
				p Total Orders
				h1 200
			div(class="bg-brand-green col-span-full lg:col-span-1 p-8 space-y-2 rounded-md")
				p Total Spent
				h1 GHS 20,000
			div(class="bg-brand-accent col-span-full lg:col-span-1 p-8 space-y-2 rounded-md")
				p Average Order Frequency
				h1 7 days
section#orders(class="pb-20")
	.container
		.heading(class="flex items-center mb-6")
			h2(class="text-xl text-zinc-600") Total Month on Month Expenditure
			button(class="ms-auto flex items-center gap-2 border border-zinc-300 duration-300 text-sm text-zinc-600 px-4 py-2 rounded")
				svgo-dashboard-funnel(class="!mb-0")
				p All Branches
		.chart
			AreaChart(
				:data="data"
				:categories="categories"
				:height="300"
				:xFormatter="xFormatter"
				:x-grid-line="true"
				:y-grid-line="true"
				:hide-legend="true"
			)
section#orders(class="pb-20")
	.container
		.heading(class="mb-6")
			h2(class="text-xl text-zinc-600") Order History
		table(class="min-w-full table-fixed")
			thead
				tr(class="bg-gray-200 *:font-medium")
					th(class="w-3/12 px-4 py-3 text-left") Branch
					th(class="w-2/12 px-4 py-3 text-left") Date
					th(class="w-2/12 px-4 py-3 text-left") Total in GHS
					th(class="w-2/12 px-4 py-3 text-left") Requester
					th(class="w-2/12 px-4 py-3 text-left") Actions
			tbody
				tr(v-for="(order, idx) in orders" :key="idx" class="even:bg-gray-100")
					td(class="p-4") {{ order.branch }}
					td(class="p-4") {{ order.date }}
					td(class="p-4") {{ order.total }}
					td(class="p-4") {{ order.requester }}
					td(class="p-4") 
						button.btn(class="w-full bg-neutral-800 hover:bg-neutral-900" @click="") View Details
</template>