<template>
	<main class="page page--winter">
		<Heading title="Winter"> </Heading>
		<Content class="background--icelight">
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/Macaca.png"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/lion2.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/lion1.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/hawk.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/blackwolf.jpg"
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
