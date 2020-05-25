<template>
	<main class="page page--blog">
		<BlogDetail v-if="lastArticle" :article-uri="lastArticle.uri" />
		<BlogList />
	</main>
</template>

<script>
import { BlogList, BlogDetail } from '@/components';

export default {
	components: {
		BlogList,
		BlogDetail
	},
	computed: {
		lastArticle() {
			return this.$store.getters['articles/lastArticle'];
		}
	}
};
</script>
