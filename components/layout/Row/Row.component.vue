<template>
	<div class="content-row">
		<slot />
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
<style lang="scss" src="./Row.style.scss" />
