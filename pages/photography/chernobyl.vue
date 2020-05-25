<template>
	<main class="page page--tiggy-fred">
		<Heading title="Chernobyl">
			<h4>
				It was the beginning of 2008 when Sjoerd and I decided it would be a
				good idea to go to Chernobyl. Because why not? At the time Chernobyl
				wasn't that touristic yet and we would be seen as totally crazy. So
				let's go.
			</h4>
			<p>
				We rented an appartment in the center of Kiev and two trips to
				Chernobyl. This is the result of that trip.
			</p>
		</Heading>
		<Content background="nightbluedark">
			<img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1683.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1564.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1526.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1522.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1461.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1415.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1276.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1267.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1230.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1112.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1079.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1069.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1062.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1058.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1055.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1040.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1039.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1019.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/1000.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/0998.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/0954.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/0944.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/0870.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/0817.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/0808.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/0779.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/0737.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/0704.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/0665.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/0661.jpg"
			/><img
				src="https://s3-eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/0586.jpg"
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
