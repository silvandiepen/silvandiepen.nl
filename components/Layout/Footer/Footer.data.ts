// import { NavigationType } from './footer.types';
export const FastNavigationData: any = [
	{
		title: 'About Me',
		link: '/me'
	},
	{
		title: 'Projects',
		link: '/project'
	},
	{
		title: 'Blog',
		link: '/blog'
	},
	{
		title: 'Snippets',
		link: '/snippets'
	}
];
export const NavigationData: any = [
	{
		title: 'About',
		children: [
			{
				name: 'About me',
				link: '/me',
				active: true
			},
			{
				name: 'What I use',
				link: '/uses',
				active: true
			},
			{
				name: 'This website',
				link: '/this',
				active: true
			},
			{
				name: 'Get in touch!',
				link: '/contact',
				active: true
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
				active: true
			},
			{
				name: 'Icon Components',
				link: '/project/icon-components',
				active: true
			},
			{
				name: 'DrawType',
				link: '/project/drawtype',
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
				active: true
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
					'https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1267.jpg',
				active: true
			},
			{
				name: 'Frutas',
				link: '/photography/frutas',
				image:
					'https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/tomato1.jpg',
				active: true
			},
			{
				name: 'Malta',
				link: '/photography/malta',
				image:
					'https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/IMG_1325.jpg',
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
					'https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/curacao_3.jpg',
				active: true
			},
			{
				name: 'Winter',
				link: '/photography/winter',
				image:
					'https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/winter02.jpg',
				active: true
			},
			{
				name: 'Prisoned Zoo',
				link: '/photography/prison-zoo',
				image:
					'https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/hawk.jpg',
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
