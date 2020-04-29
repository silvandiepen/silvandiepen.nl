<template>
	<main class="page page--winter">
		<Heading title="Winter">
			<h4>
				The winters in the Netherlands can be cold, wet and dark. The dark and
				wet part I'm not particullary a fan of. The cold neither, but it can
				result in amazing landscapes.
			</h4>
		</Heading>
		<Content class="background--icelight">
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/winter08.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/winter07.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/winter06.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/winter05.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/winter04.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/winter03.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/winter02.jpg"
			/>
			<img
				src="https://api.silvandiepen.nl/wp-content/uploads/2019/09/winter01.jpg"
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
