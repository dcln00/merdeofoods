<script setup lang="ts">
useHead({
	title: 'Dashboard - MerdeoFoods',
})

definePageMeta({
	middleware: [async () => {
		const input = useState<{ email: string; password: string }>('login')

		if(!input.value) return navigateTo('/auth/login')
		
		if (input.value.email !== 'test@example.com' && input.value.password !== 'Testing123') return navigateTo('/auth/login')
	}]
})

// MODAL OPTIONS
const roleModalOpen = ref(false)
const branchModalOpen = ref(false)
const userModalOpen = ref(false)

const toggleRoleModal = () => {
	roleModalOpen.value = !roleModalOpen.value
}

const toggleBranchModal = () => {
	branchModalOpen.value = !branchModalOpen.value
}

const toggleUserModal = () => {
	userModalOpen.value = !userModalOpen.value
}

const roleName = ref('')
const branchName = ref('')
const userName = reactive({
	name: '',
	email: '',
	branch: '',
	role: '',
})


const roles = ref([
	{
		id: 1,
		name: 'Admin',
		permissions: [{
			id: 1,
			name: 'Inventory',
			value: 'inventory',
			checked: true,
		}, {
			id: 2,
			name: 'Commerce',
			value: 'commerce',
			checked: false,
		}, {
			id: 3,
			name: 'Order Approval',
			value: 'order',
			checked: false,
		}, {
			id: 4,
			name: 'Dashboard',
			value: 'dashboard',
			checked: false,
		}, {
			id: 5,
			name: 'Account Creation',
			value: 'account',
			checked: false,
		}],
	}
])

const branches = ref(['Osu High Street', 'Amasaman'])


const handleAddRole = async () => {
	try {
		if(!roleName.value) return

		roles.value.push({
			id: roles.value.length + 1,
			name: roleName.value || 'New Role',
			permissions: [{
				id: 1,
				name: 'Inventory',
				value: 'inventory',
				checked: false,
			}, {
				id: 2,
				name: 'Commerce',
				value: 'commerce',
				checked: false,
			}, {
				id: 3,
				name: 'Order Approval',
				value: 'order',
				checked: false,
			}, {
				id: 4,
				name: 'Dashboard',
				value: 'dashboard',
				checked: false,
			}, {
				id: 5,
				name: 'Account Creation',
				value: 'account',
				checked: false,
			}],
		})

		toggleRoleModal()
	} finally {
		roleName.value = ''
	}
}

const handleAddBranch = async () => {
	try {
		if(!branchName.value) return

		branches.value.push(branchName.value || 'New Branch')

		toggleBranchModal()
	} finally {
		branchName.value = ''
	}
}

const handleRemoveRole = async (idx: number) => {
	const confirm = window.confirm('Are you sure you want to delete this role?')
	if (confirm) {
		roles.value = roles.value.filter((role) => role.id !== idx)
	}
}

const handleRemoveBranch = async (idx: number) => {
	const confirm = window.confirm('Are you sure you want to delete this branch?')
	if (confirm) {
		branches.value = branches.value.filter((branch) => branch !== idx)
	}
}

const handleEditRole = async (idx: number) => {
	const roleName = prompt('Enter new role name')
	if (roleName) {
		roles.value[idx].name = roleName
	}
}

const handleEditBranch = async (idx: number) => {
	const branchName = prompt('Enter new branch name')
	if (branchName) {
		branches.value[idx] = branchName
	}
}

const users = ref([
	{
		id: 1,
		name: 'John Doe',
		email: 'name@domain.com',
		branch: 'Osu High Street',
		role: 'Admin',
	},
	{
		id: 2,
		name: 'Jane Doe',
		email: '',
		branch: 'Amasaman',
		role: 'Admin',
	},
])

const handleAddUser = async () => {
	try {
		if(!userName.name || !userName.email || !userName.branch || !userName.role) return

		users.value.push({
			id: users.value.length + 1,
			name: userName.name,
			email: userName.email,
			branch: userName.branch,
			role: userName.role,
		})

		toggleUserModal()
	} finally {
		userName.name = ''
		userName.email = ''
		userName.branch = ''
		userName.role = ''
	}
}

const handleRemoveUser = async (idx: number) => {
	const confirm = window.confirm('Are you sure you want to delete this user?')
	if (confirm) {
		users.value = users.value.filter((user) => user.id !== idx)
	}
}
</script>

<template lang="pug">
section#dashboard-title(class="pt-12 pb-8")
	.container
		h1(class="text-2xl") Account
section#permissions(class="pb-16")
	dashboard-modal(:open="roleModalOpen" title="Add Role" @close-modal="toggleRoleModal")
		template(#content)
			dashboard-modal-form(@submit="handleAddRole" v-model:name="roleName" label="Role Name" placeholder="Enter role. eg. Admin")
	.container
		.heading(class="flex items-center mb-6")
			h2(class="text-xl text-zinc-600") Roles & Permissions
			button.btn(class="ms-auto" @click="toggleRoleModal") Add Role
		.roles(class="space-y-6")
			.role(v-for="(role, idx) in roles" :key="idx" class="relative bg-zinc-200 p-6 rounded-md")
				.settings(class="absolute bottom-6 right-4 flex items-center gap-4 *:cursor-pointer")
					svgo-dashboard-edit(@click="handleEditRole(idx)")
					svgo-dashboard-delete(filled @click="handleRemoveRole(role.id)")
				div(class="space-y-4")
					.title(class="text-lg font-medium tracking-tight") {{ role.name }}
					ul(class="flex gap-4")
						li(v-for="(permission, index) in role.permissions" :key="index" class="space-x-2")
							input(type="checkbox" :id="permission.value" :value="permission.value" :checked="permission.checked")
							label(for="admin") {{ permission.name }}
section#branches(class="pb-20")
	dashboard-modal(:open="branchModalOpen" title="Add Branch" @close-modal="toggleBranchModal")
		template(#content)
			dashboard-modal-form(@submit="handleAddBranch" v-model:name="branchName" label="Branch Name" placeholder="Enter branch. eg. Cantonments")
	.container
		.heading(class="flex items-center mb-6")
			h2(class="text-xl text-zinc-600") Branches
			button.btn(class="ms-auto" @click="toggleBranchModal") Add Branch
		.branches(class="space-y-6")
			.branch(v-for="(branch, idx) in branches" :key="idx" class="relative bg-zinc-200 p-6 rounded-md")
				.settings(class="absolute bottom-6 right-4 flex items-center gap-4 *:cursor-pointer")
					svgo-dashboard-edit(@click="handleEditBranch(idx)")
					svgo-dashboard-delete(filled @click="handleRemoveBranch(branch)")
				div(class="space-y-4")
					.title(class="text-lg font-medium tracking-tight") {{ branch }}
section#users(class="pb-20")
	dashboard-modal(:open="userModalOpen" title="Add User" @close-modal="toggleUserModal")
		template(#content)
			//- HERE
			dashboard-modal-form(@submit="handleAddUser" v-model:name="userName.name" v-model:email="userName.email" v-model:branch="userName.branch" v-model:role="userName.role" label="First Name Last Name" placeholder="Enter user. eg. John Doe" :user="true" :branches="branches" :roles="roles")
	.container
		.heading(class="flex items-center mb-6")
			h2(class="text-xl text-zinc-600") Users
			button.btn(class="ms-auto" @click="toggleUserModal") Add User
		table(class="min-w-full table-fixed")
			thead
				tr(class="bg-gray-200 *:font-medium")
					th(class="w-3/12 p-4 text-left") Name
					th(class="w-2/12 p-4 text-left") Email
					th(class="w-2/12 p-4 text-left") Branch
					th(class="w-1/12 p-4 text-left") Role
					th(class="w-2/12 p-4 text-left") Actions
					th(class="w-2/12 p-4 text-left") -
			tbody
				tr(v-for="(user, idx) in users" :key="idx" class="even:bg-gray-100")
					td(class="p-4") {{ user.name }}
					td(class="p-4") {{ user.email }}
					td(class="p-4") {{ user.branch }}
					td(class="p-4") {{ user.role }}
					td(class="p-4") 
						button.btn(class="w-full bg-neutral-800 hover:bg-neutral-900" @click="") Reset Password
					td(class="p-4") 
						button.btn(class="w-full bg-red-600 hover:bg-red-800" @click="handleRemoveUser(user.id)") Delete
</template>