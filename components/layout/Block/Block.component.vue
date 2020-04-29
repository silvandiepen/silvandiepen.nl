<template>
	<div class="block" :class="sizeClasses">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import { Container } from '@/components';
export default {
	name: 'Block',
	props: {
		size: {
			type: String,
			default: 'default'
		}
	},
	data: () => ({
		sizeClasses: []
	}),
	component: { Container },
	created() {
		this.sizeClasses = [`block--${this.$props.size}`];
	}
};
</script>

<style lang="scss" src="./Block.style.scss" />
