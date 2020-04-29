<template>
	<main class="page page--blog">
		<BlogDetail v-if="lastArticle" :article="lastArticle" />
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
	async asyncData({ store }) {
		await store.dispatch('articles/loadArticles');
	},
	computed: {
		lastArticle() {
			return this.$store.getters['articles/getArticles'][0];
		},
		articles() {
			return this.$store.getters['articles/getArticles'];
		}
	}
};
</script>
