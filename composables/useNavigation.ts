export const useNavigation = () => {
	return useState('navigation', () => [
		{
			slug: '/',
			name: 'home',
			display: 'Home',
		},
		{
			slug: '/about',
			name: 'about',
			display: 'About',
		},
		{
			slug: '/products',
			name: 'products',
			display: 'Our Products',
		},
		{
			slug: '/support',
			name: 'support',
			display: 'Support',
		},
		{
			slug: 'https://merdeofoods.odoo.com/shop',
			name: 'shop',
			display: 'Shop',
		},
	])
}