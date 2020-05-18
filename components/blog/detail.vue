<template>
	<div>
		<Heading v-if="article" class="background--white">
			<h1>{{ article.title }}</h1>
		</Heading>
		<Content v-if="article" class="background--beige">
			<!-- <Markdown :source="article.content" /> -->
			{{ article.content }}
		</Content>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { articleType } from '@/types';
import { Heading, Content } from '@/components';

export default Vue.extend({
	components: {
		Heading,
		// Markdown,
		Content
	},
	computed: {
		article(): articleType {
			return this.$store.getters['articles/getArticle'](
				this.$route.params.article
			);
		}
	}
});
</script>
