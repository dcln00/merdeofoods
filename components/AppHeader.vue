<script setup lang="ts">
const nav = useNavigation()
const { x, y } = useWindowScroll()
const route = useRoute()
const auth = useState<{ email: string; password: string }>('login')
const isNotScrolled = computed(() => y.value < 500)
</script>

<template lang="pug">
div
	//- desktop header
	header(class="py-8 w-full hidden lg:block absolute z-10")
		.container(class="flex items-center")
			NuxtLink(to="/")
				.logo(class="w-[100px] h-[40px]")
					svgo-logo(class="!w-full !h-full")
			nav(:class="['ms-auto', {'text-white/': route.path === '/'}]")
				ul(class="flex gap-8 tracking-tight")
					li(v-for="(item, index) in nav" :key="index" class="capitalize hover:text-brand-green duration-300") #[NuxtLink(:to="item.slug" activeClass='active-link' :class="[{'after:bg-black': route.path === '/'}, {'after:bg-black': route.path !== '/'}]") {{ item.display }}]
					li(v-if="!auth" class="capitalize hover:text-brand-green duration-300") #[NuxtLink(to="/auth/login" activeClass='active-link' :class="[{'after:bg-black': route.path === '/'}, {'after:bg-black': route.path !== '/'}]") Login]
			div(class="ms-8")
				NuxtLink(:to="auth ? '/dashboard' : '/auth/register'")
					button(class="bg-brand-green hover:bg-[#155e15] duration-300 text-white px-4 py-2 rounded") {{ auth ? 'Dashboard' : 'Get Started' }}
	Transition(name="nav")
		header(v-if="!isNotScrolled" class="py-4 w-full bg-white/70 backdrop-blur-md hidden lg:block /border-b border-zinc-200 fixed top-0 z-10")
			.container(class="flex items-center")
				NuxtLink(to="/")
					.logo(class="w-[100px] h-[40px]")
						svgo-logo(class="!w-full !h-full")
				nav(class="ms-auto")
					ul(class="flex gap-8 tracking-tight")
						li(v-for="(item, index) in nav" :key="index" class="capitalize hover:text-brand-green duration-300") #[NuxtLink(:to="item.slug" activeClass='active-dash-link') {{ item.display }}]
						li(v-if="!auth" class="capitalize hover:text-brand-green duration-300") #[NuxtLink(to="/auth/login" activeClass='active-link' :class="[{'after:bg-black': route.path === '/'}, {'after:bg-black': route.path !== '/'}]") Login]
				div(class="ms-8")
					NuxtLink(:to="auth ? '/dashboard' : '/auth/register'")
						button(class="bg-brand-green hover:bg-[#155e15] duration-300 text-white px-4 py-2 rounded") {{ auth ? 'Dashboard' : 'Get Started' }}

	//- mobile header
	header(class="bg-white w-full block lg:hidden z-40 fixed")
		.container(class="flex items-center")
			NuxtLink(to="/")
				.logo(class="w-[90px] h-[60px] overflow-hidden me-12")
					svgo-logo(class="!w-full !h-full")
			.hamburger(class="ms-auto cursor-pointer" @click="$emit('toggleShow')")
				svgo-hamburger(class="text-2xl")
</template>

<style scoped lang="postcss">
.nav-enter-active, .nav-leave-active {
	transition: all 0.5s ease-in-out;
}

.nav-enter-from, .nav-leave-to {
	transform: translateY(-100%);
}

.active-link {
		position: relative;
}

.active-link:after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(1);
	height: 1px;
	bottom: -3px;
	left: 0;
	transform-origin: bottom right;
	transition: transform 0.25s ease-out;
}

.active-dash-link {
		position: relative;
		@apply text-brand-green;
}

nav li {
	position: relative;
	transition: 0.3s;
}

nav li:after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 1px;
	bottom: -3px;
	left: 0;
	background-color: #218921;
	transform-origin: bottom right;
	transition: transform 0.25s ease-out;
}

nav li:hover:after {
	transform: scaleX(1);
	transform-origin: bottom left;
}
</style>