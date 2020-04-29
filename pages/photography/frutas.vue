<template>
	<main class="page page--frutas">
		<Heading title="Frutas" class="background--icelight">
			<h4>
				A series made on my kitchentable. Colorful fruits and vegetables in all
				its simplicity.
			</h4>
		</Heading>
		<Content>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/peer1.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/orange1.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/tomato1.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/ui1.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/kiwano1.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/apple1.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/kiwi1.jpg"
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
	}
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
