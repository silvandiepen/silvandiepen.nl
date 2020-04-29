<template>
	<main class="page page--blog">
		<BlogDetail :article="article" />
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
		article() {
			return this.$store.getters['articles/getArticle'](
				this.$route.params.article
			);
		}
	}
};
</script>
