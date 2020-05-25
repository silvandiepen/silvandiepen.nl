<template>
	<main class="page page--about">
		<Heading v-if="snippet">
			<h1>{{ snippet.title }}</h1>
			<Markdown :source="snippet.content"></Markdown>
		</Heading>
		<SnippetList />
		<Content />
	</main>
</template>
<script lang="ts">
import Vue from 'vue';
import { Heading, Content, Markdown, SnippetList } from '@/components';

export default Vue.extend({
	components: {
		Heading,
		Markdown,
		Content,
		SnippetList
	},
	computed: {
		snippet: {
			get(): string {
				return this.$store.getters['snippets/getSnippet'](
					this.$route.params.article
				);
			}
		}
	}
});
</script>
