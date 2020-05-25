<template>
	<main class="page page--frutas">
		<Heading title="Frutas" background="icelight">
			<h4>
				A series made on my kitchentable. Colorful fruits and vegetables in all
				its simplicity.
			</h4>
		</Heading>
		<Content>
			<img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/peer1.jpg"
			/>
			<img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/orange1.jpg"
			/>
			<img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/tomato1.jpg"
			/>
			<img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/ui1.jpg"
			/>
			<img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/kiwano1.jpg"
			/>
			<img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/apple1.jpg"
			/>
			<img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/kiwi1.jpg"
			/>
		</Content>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Content, Heading } from '@/components';

export default Vue.extend({
	components: {
		Content,
		Heading
	},
	data: () => ({
		hoi: true
	})
});
</script>
<style lang="scss">
@import '~tools';
.tiggy-fred-heading {
	background-repeat: no-repeat;
	background-position: center right;
	background-size: contain;
	@media #{$small-only} {
		background-position: center center;
		background-size: 200vw;
	}
}
</style>
