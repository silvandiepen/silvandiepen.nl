import pkg from './package';
require('dotenv').config();

if (process.env.environment === 'development') {
	process.env.DEBUG = 'nuxt:*';
}

export default {
	mode: 'universal',
	env: {
		environment: process.env.environment || 'production'
	},

	/*
	 ** Classes for router-links.
	 */
	router: {
		linkPrefetchedClass: 'prefetched',
		linkExactActiveClass: 'active--exact',
		linkActiveClass: 'active'
	},
	/*
	 ** Headers of the page
	 */
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	/*
	 ** Customize the progress bar color
	 */
	loading: {
		color: '#000000'
	},

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ['~/plugins/composition-api'],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/stylelint-module',
		'@nuxtjs/dotenv'
	],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		'nuxt-favicons',
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/apollo'
		// 		'@nuxtjs/google-analytics',
	],

	/*
	 ** Apollo
	 */
	apollo: {
		clientConfigs: {
			default: '~/graphql/apollo/defaultClient.js'
		}
	},

	/*
	 ** GoogleAnalytics module configuration
	 */
	// 	'google-analytics': {
	// 		id: 'UA-XXXXXXXXX-XX',
	// 		disabled: false
	// 	},

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			// Define toolset shortcut
			config.resolve.alias['~tools'] = 'assets/scss/tools.scss';
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				});
			}
		}
	},
	/*
	 ** Global CSS
	 */
	css: [
		{
			src: '@/assets/scss/app.scss',
			lang: 'scss'
		}
	]
};
