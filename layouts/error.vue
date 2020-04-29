<template>
	<main class="page page--guyn">
		<Heading v-if="error.statusCode === 404" title="404">
			<h2>Page not found</h2>
		</Heading>
		<Heading v-else title="Error">
			<h2>Woops, something went wrong...</h2>
		</Heading>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import Heading from '~/components/layout/heading';
export default Vue.extend({
	components: {
		// Content,
		Heading
	}
});
</script>

<script>
export default {
	props: ['error']
};
</script>
