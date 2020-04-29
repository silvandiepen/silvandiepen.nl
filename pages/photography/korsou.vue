<template>
	<main class="page page--tiggy-fred">
		<Heading title="Korsou" class="tiggy-fred-heading background--turquoise">
			<h4>
				Having lived several years on this caribbean gem called Curaçao, I
				haven't take many pictures. I wish I did..
			</h4>
		</Heading>
		<Content>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/curacao_8.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/curacao_7.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/curacao_6.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/curacao_5.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/curacao_4.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/curacao_3.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/curacao_2.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/curacao_1.jpg"
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
