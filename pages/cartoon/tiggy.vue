<template>
	<main class="page page--tiggy-fred">
		<Heading
			title="Tiggy & Fred"
			class="tiggy-fred-heading background--nightblue"
			style="background-image:url(https://s3-eu-central-1.amazonaws.com/api.silvandiepen.nl/wp-content/uploads/2020/03/23164211/tiggy-fred.png)"
		>
		</Heading>
		<Content class="background--armylight">
			<h2>Tiggy &amp; Fred are two little friends</h2>
			<h4>
				They have the smallest adventures and can be happy with little things.
				Tiggy and Fred love to go outside and play.
			</h4>
		</Content>
		<Content>
			<a class="large-link" href="https://instagram.com/tig.land"
				>https://instagram.com/tig.land</a
			>
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
