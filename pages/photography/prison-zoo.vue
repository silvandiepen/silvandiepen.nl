<template>
	<main class="page page--winter">
		<Heading title="Winter"> </Heading>
		<Content background="icelight">
			<img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/Macaca.png"
			/>
			<img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/lion2.jpg"
			/>
			<img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/lion1.jpg"
			/>
			<img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/hawk.jpg"
			/>
			<img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/blackwolf.jpg"
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
