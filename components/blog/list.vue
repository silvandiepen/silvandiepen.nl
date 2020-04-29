<template>
	<Content class="background--black article-list">
		<ul v-if="articleList" class="article-list__list">
			<li
				v-for="(article, idx) in articleList"
				:key="idx"
				class="article-list__item"
			>
				<span class="article-list__date">
					<span class="article-list__date-day">{{ article.date.day }}</span>
					<span class="article-list__date-month">{{ article.date.month }}</span>
					<span class="article-list__date-year">{{
						article.date.year
					}}</span></span
				>
				<NuxtLink :to="`/blog/${article.uri}`" class="article-list__link">
					<span class="article-list__text">{{ article.title }}</span>
				</NuxtLink>
			</li>
		</ul>
		<!-- <ul v-if="articleList" class="article-list__list">
			<li
				v-for="(article, idx) in articleList"
				:key="idx"
				class="article-list__item"
			>
				{{ article }}
				<span v-if="article.date_obj" class="article-list__date">
					{{ article.date_obj.y }}.{{ addZeros(article.date_obj.m) }}.{{
						addZeros(article.date_obj.d)
					}}
				</span>
				<NuxtLink :to="`/blog/${article.uri}`" class="article-list__link">
					<span class="article-list__text">{{ article.title }}</span>
				</NuxtLink>
			</li>
		</ul> -->
	</Content>
</template>

<script lang="ts">
import Vue from 'vue';
import { format } from 'date-fns';
import { Content } from '@/components';
export default Vue.extend({
	name: 'BlogList',
	components: {
		Content
	},
	computed: {
		articleList() {
			return this.$store.getters['articles/getArticles'].map((article) => {
				return {
					...article,
					date: {
						day: format(article.date, 'DD'),
						month: format(article.date, 'MM'),
						year: format(article.date, 'YY')
					}
				};
			});
		}
	},
	created() {
		this.$store.dispatch('articles/loadArticles');
	},
	methods: {
		addZeros(number, length = 2) {
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
