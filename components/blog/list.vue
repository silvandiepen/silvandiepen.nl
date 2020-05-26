<template>
	<Content background="black" class="article-list">
		<ul v-if="articleList" class="article-list__list">
			<li
				v-for="(article, idx) in articleList"
				:key="idx"
				class="article-list__item"
			>
				<span class="article-list__date">
					<span class="article-list__date-day">{{
						article.convertedDate.day
					}}</span>
					<span class="article-list__date-month">{{
						article.convertedDate.month
					}}</span>
					<span class="article-list__date-year">{{
						article.convertedDate.year
					}}</span></span
				>
				<NuxtLink :to="`/blog/${article.uri}`" class="article-list__link">
					<span class="article-list__text">{{ article.title }}</span>
				</NuxtLink>
			</li>
		</ul>
	</Content>
</template>

<script lang="ts">
import Vue from 'vue';
import { Article } from '@/types';
import { Content } from '@/components/Layout';
export default Vue.extend({
	name: 'BlogList',
	components: {
		Content
	},

	async asyncData({ store }) {
		await store.dispatch('articles/loadArticles');
	},
	computed: {
		articleList(): Article[] {
			return this.$store.getters['articles/getArticles'];
		}
	},
	created() {
		this.$store.dispatch('articles/loadArticles');
	},
	methods: {
		addZeros(number: number, length: number = 2): string {
			let str = '' + number;
			while (str.length < length) {
				str = '0' + str;
			}
			return str;
		}
	}
});
</script>

<style lang="scss">
.article-list {
	&__list {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	&__item {
		display: flex;
		* {
			line-height: 1em;
		}
		& + & {
			margin-top: 1rem;
		}
	}
	&__link {
		padding: 1rem;
		text-decoration: none;
	}
	&__text {
		font-size: 1.25rem;
		line-height: 1.25rem;
	}
	&__date {
		line-height: 1.25rem;
		opacity: 0.5;
		padding: 1rem;
		* {
			font-variant-numeric: tabular-nums;
		}
	}
}
</style>
