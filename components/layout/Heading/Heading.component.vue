<template>
	<div class="page-heading">
		<div class="row center">
			<div class="column small-full medium-two-third xlarge-half">
				<div class="content">
					<h1 v-if="title">
						<span v-for="(word, idx) in compiledTitle" :key="idx">
							{{ word }}
						</span>
					</h1>
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
	props: {
		title: String
	},
	setup(props) {
		const compiledTitle = () => {
			return props.title ? props.title.split(' ') : '';
		};

		return {
			compiledTitle
		};
	}
});
</script>
<style lang="scss" src="./Heading.style.scss" />
