<template>
	<component
		:is="buttonType"
		class="button"
		:class="[color ? `button--${color}` : undefined]"
		:href="[buttonType == 'a' ? link : undefined]"
		:to="[buttontype == 'route-link' ? link : undefined]"
	>
		<span class="button__background"></span>
		<span class="button__text"><slot /></span>
		<span v-if="icon" class="button__icon">
			<span class="icon" :class="[`icon--${icon}`]"></span>
		</span>
	</component>
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
		buttonColor: 'default'
	}),
	computed: {
		buttonType() {
			const isLink = new RegExp('^(https://|https://|tel:|mailto:)');
			let buttonType = 'button'; // Determine type of link
			if (this.$props && this.$props.link && this.$props.link.match(isLink))
				buttonType = 'a';
			else if (this.$props && this.$props.link) buttonType = 'router-link';
			console.log(buttonType);
			return buttonType;
		}
	},
	beforeCreate() {
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
	}
});
</script>
