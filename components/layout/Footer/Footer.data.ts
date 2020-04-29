// import { NavigationType } from './footer.types';
export const NavigationData: any = [
	{
		title: 'About',
		children: [
			{
				name: 'About me',
				link: '/about/me',
				active: true
			},
			{
				name: 'What I use',
				link: '/uses',
				active: true
			},
			{
				name: 'This website',
				link: '/about/this',
				active: true
			},
			{
				name: 'Get in touch!',
				link: '/about/contact',
				active: false
			}
		]
	},
	{
		title: 'Code',
		children: [
			{
				name: 'Projects',
				link: '/project',
				active: true
			},
			{
				name: 'Open Source',
				link: '/open-source',
				active: false
			},
			{
				name: 'Packages',
				link: '/code/packages',
				active: false
			},
			{
				name: 'Preferences',
				link: '/code/prefs',
				active: false
			}
		]
	},
	{
		title: 'Projects',
		link: '/project',
		children: [
			{
				name: 'Guyn',
				link: '/project/guyn',
				active: true
			},
			{
				name: "Henri's",
				link: '/project/henris',
				active: true
			},
			{
				name: 'Silicons',
				link: '/project/silicons',
				active: true
			},
			{
				name: 'Passport',
				link: '/project/passport',
				active: true
			},
			{
				name: 'CSS Order',
				link: '/project/css-order',
				active: true
			},
			{
				name: 'Aybu',
				link: '/project/aybu',
				active: false
			},
			{
				name: 'Icon Components',
				link: '/project/icon-components',
				active: true
			}
		]
	},
	{
		title: 'Illustration',
		children: [
			{
				name: 'Tiggy & Fred',
				link: '/cartoon/tiggy',
				active: true
			},
			{
				name: 'Miles Brothers',
				link: '/cartoon/milesbrothers',
				active: true
			}
		]
	},
	{
		title: 'Branding',
		children: [
			{
				name: "Logo's",
				link: '/logos',
				active: false
			}
		]
	},
	{
		title: 'Typography',
		children: [
			{
				name: 'Vagrik',
				link: '/typography/vagrik',
				active: false
			},
			{
				name: 'Fifty',
				link: '/typography/fifty',
				active: false
			}
		]
	},
	{
		title: 'Iconography',
		children: [
			{
				name: 'Guyn',
				link: '/project/guyn',
				active: true
			},
			{
				name: 'BBB',
				link: '/work/bbb',
				active: true
			},
			{
				name: 'Australia',
				link: '/work/australia',
				active: true
			},
			{
				name: 'Toun',
				link: '/work/toun',
				active: true
			},
			{
				name: 'Shampour',
				link: '/work/shampour',
				active: true
			},
			{
				name: 'Gelderse Streken',
				link: '/work/gelderse-streken',
				active: true
			}
		]
	},

	{
		title: 'Photography',
		children: [
			{
				name: 'Armenia',
				link: '/photography/armenia',
				active: false
			},
			{
				name: 'Beach',
				link: '/photography/beach',
				active: false
			},
			{
				name: 'Chernobyl',
				link: '/photography/chernobyl',
				image:
					'https://api.silvandiepen.nl/wp-content/uploads/2019/09/1267.jpg',
				active: true
			},
			{
				name: 'Frutas',
				link: '/photography/frutas',
				image:
					'https://api.silvandiepen.nl/wp-content/uploads/2019/09/tomato1.jpg',
				active: true
			},
			{
				name: 'Malta',
				link: '/photography/malta',
				image:
					'https://api.silvandiepen.nl/wp-content/uploads/2019/09/IMG_1325.jpg',
				active: true
			},
			{
				name: 'Panamá',
				link: '/photography/panama',
				active: false
			},
			{
				name: 'Korsou',
				link: '/photography/korsou',
				image:
					'https://api.silvandiepen.nl/wp-content/uploads/2019/09/curacao_3.jpg',
				active: true
			},
			{
				name: 'Winter',
				link: '/photography/winter',
				image:
					'https://api.silvandiepen.nl/wp-content/uploads/2019/09/winter02.jpg',
				active: true
			},
			{
				name: 'Prisoned Zoo',
				link: '/photography/prison-zoo',
				image:
					'https://api.silvandiepen.nl/wp-content/uploads/2019/09/hawk.jpg',
				active: true
			}
		]
	},
	{
		title: 'Blog',
		link: '/blog',
		children: []
	},
	{
		title: 'More',
		children: [
			{
				name: 'Github',
				url: 'https://www.github.com/silvandiepen',
				active: true
			},
			{
				name: 'Dribbbble',
				url: 'https://www.dribbble.com/silvandiepen',
				active: true
			},
			{
				name: 'Twitter',
				url: 'https://www.twitter.com/silvandiepen',
				active: true
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/silvandiepen/',
				active: true
			},
			{
				name: 'Patreon',
				url: 'https://patreon.com/silvandiepen',
				active: true
			},
			{
				name: 'Behance',
				url: 'https://www.behance.net/silvandiepen',
				active: true
			}
		]
	}
];
