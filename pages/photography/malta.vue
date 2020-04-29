<template>
	<main class="page page--winter">
		<Heading title="Malta" class="background--icelight">
			<h3>
				Malta is a really diverse little island, eventhough it's small. From the
				very old architecture to the new and modern modern.
			</h3>
		</Heading>
		<Content>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/IMG_1381.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/IMG_1369.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/IMG_1357.jpg"
			/>
		</Content>
		<Content class="background--beige">
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/IMG_1326.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/IMG_1325.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/IMG_1320.jpg"
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
