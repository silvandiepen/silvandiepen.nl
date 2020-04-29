<template>
	<div class="content-item">
		<h3 v-if="title" class="content-row__item-title">
			{{ title }}
		</h3>
		<p><slot></slot></p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
	props: {
		title: String
	},
	setup(props) {
		return {
			props
		};
	}
});
</script>
<style lang="scss" src="./Item.style.scss" />
