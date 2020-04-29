<template>
	<main class="page page--code">
		<Heading>
			<h1>Reusing and publishing that little piece of code..</h1>
		</Heading>
		<Content class="background--red">
			<h2>
				I don't like to do double work and why would others if it's already been
				done?
			</h2>
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
