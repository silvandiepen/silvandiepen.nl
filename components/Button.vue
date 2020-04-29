<template>
	<button class="button">
		<span class="button__text"><slot /></span>
	</button>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
	name: 'Button',
	props: {
		link: {
			type: String,
			default: null
		},
		color: {
			type: String,
			default: null
		},
		icon: {
			type: String,
			default: null
		}
	},
	data: () => ({
		buttonType: 'button',
		buttonColor: 'default'
	}),
	beforeCreate() {
		const isLink = new RegExp('^(https://|https://|tel:|mailto:)');
		// Determine type of link
		if (this.$props && this.$props.link && this.$props.link.match(isLink))
			this.buttonType = 'a';
		else if (this.$props && this.$props.link) this.buttonType = 'router-link';
		else this.buttonType = 'button';

		// Set the color
		if (this.$props && this.$props.color) this.buttonColor = this.$props.color;
	},
	methods: {
		buttonClasses() {
			return [
				'button',
				this.$props.color ? `button--${this.$props.color}` : null,
				this.$props.icon ? `button--icon` : null
			];
		}
	},

	render(h) {
		// If the link is a nuxt link, render will build it up with the NuxtLink component.
		if (this.buttonType === 'router-link') {
			return h(
				Vue.component('RouterLink'),
				{
					props: {
						to: this.$props.link
					},
					class: this.buttonClasses()
				},
				[
					h('span', { class: ['button__text'] }, this.$slots.default),
					this.$props.icon
						? h('span', {
								class: ['button__icon', `icon--${this.$props.icon}`]
						  })
						: null
				]
			);
		} else {
			// Otherwise it will be an 'a' or a button. these can just be passed regularly to the render.
			return h(
				this.buttonType,
				{
					attrs: {
						href: this.buttonType === 'a' ? this.$props.link : null
					},
					class: this.buttonClasses()
				},
				[
					h('span', { class: ['button__text'] }, this.$slots.default),
					this.$props.icon
						? h('span', { class: ['button__icon'] }, [
								h('span', { class: [`silicon-${this.$props.icon}`] })
						  ])
						: null
				]
			);
		}
	}
});
</script>

<style lang="scss">
@import '~tools';
// .button {
// 	position: relative;
// 	z-index: 1;
// 	display: inline-block;
// 	border: none;
// 	border-radius: 1.5em;
// 	color: var(--bg);
// 	font-weight: 600;
// 	font-size: 1rem;
// 	line-height: 1em;
// 	text-decoration: none;
// 	transition: $base-transition ease-in-out;
// 	padding: 1em 1.25em;
// 	&:focus,
// 	&:hover {
// 		transform: translateX(-0.75em);
// 		&:after {
// 			transform: translateX(2.5em);
// 		}
// 		.button__text:after {
// 			transform: scale(1) translateX(0em);
// 		}
// 	}
// 	&:before {
// 		content: '';
// 		position: absolute;
// 		top: 0;
// 		left: 0;
// 		z-index: -1;
// 		width: 100%;
// 		height: 100%;
// 		border-radius: inherit;
// 		background-color: var(--text);
// 		transition: 0.3s;
// 	}
// 	&:after {
// 		content: '';
// 		position: absolute;
// 		top: 0;
// 		left: 0;
// 		z-index: -2;
// 		width: 100%;
// 		height: 100%;

// 		border-radius: inherit;
// 		background-color: var(--text);
// 		opacity: 0.5;
// 		transition: $base-transition ease-in-out;
// 	}
// 	&__text {
// 		&:after {
// 			content: '→';
// 			position: absolute;
// 			left: 100%;
// 			transform: scale(0) translateX(-3em);
// 			transition: $base-transition ease-in-out;
// 			padding: 0 0.5em;
// 		}
// 	}
// }
</style>
