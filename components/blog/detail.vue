<template>
	<div>
		<Heading v-if="article">
			<h1>{{ article.title }}</h1>
		</Heading>
		<Content v-if="article">
			<Markdown :source="article.content" />
		</Content>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { articleType } from '@/types';
import { Heading, Content } from '@/components/Layout';
import { Markdown } from '@/components';
export default Vue.extend({
	name: 'BlogDetail',
	components: {
		Heading,
		Markdown,
		Content
	},
	props: {
		articleUri: {
			type: String,
			default: null
		}
	},

	computed: {
		article(): articleType {
			return this.$store.getters['articles/getArticle'](
				this.$props.articleUri
					? this.$props.articleUri
					: this.$route.params.article
			);
		}
	}
});
</script>
