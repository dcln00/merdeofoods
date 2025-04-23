export const useNavigation = () => {
	return useState('navigation', () => [
		{
			href: '/',
			name: 'home',
		},
		{
			href: '/about',
			name: 'about',
		},
		{
			href: '/products',
			name: 'our products',
		},
		{
			href: '/support',
			name: 'support',
		},
		{
			href: '/shop',
			name: 'shop',
		},
	])
}