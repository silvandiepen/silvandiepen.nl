<template>
	<main class="page page--about">
		<Heading>
			<h1>Snippets</h1>
			<h4>
				Every time, I do the same. Every time, I'm like how was it? That's why..
				I'm trying to make a list of all those things which I keep looking up.
			</h4>
		</Heading>
		<SnippetList></SnippetList>
		<Content />
	</main>
</template>
<script lang="ts">
import Vue from 'vue';
import { Heading, SnippetList } from '@/components';

export default Vue.extend({
	components: {
		Heading,
		SnippetList
	}
});
</script>
