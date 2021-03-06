<template>
	<Content class="snippet-list" background="blue">
		<ul class="snippet-list__list">
			<li
				v-for="(snippet, idx) in snippets"
				:key="idx"
				class="snippet-list__item"
			>
				<span
					v-if="snippet.meta.category"
					class="snippet-list__category"
					:class="{
						'snippet-list__category--active': category === snippet.meta.category
					}"
					@click="
						category === snippet.meta.category
							? (category = '')
							: (category = snippet.meta.category)
					"
					>{{ snippet.meta.category }}</span
				>

				<NuxtLink class="snippet-list__title" :to="`/snippets/${snippet.uri}`">
					<span class="snippet-list__text">{{ snippet.title }}</span>
				</NuxtLink>

				<ul
					v-if="snippet.meta.tags && snippet.meta.tags.length > 0"
					class="snippet-list__tags"
				>
					<li
						v-for="(tagitem, idt) in snippet.meta.tags"
						:key="idt"
						class="snippet-list__tag"
						:class="{ 'snippet-list__tag--active': tag === tagitem }"
					>
						<button
							class="snippet-list__tag-button"
							@click="tag === tagitem ? (tag = '') : (tag = tagitem)"
						>
							{{ tagitem }}
						</button>
					</li>
				</ul>
			</li>
		</ul>
	</Content>
</template>

<script lang="ts">
import Vue from 'vue';
import { Content } from '@/components/Layout/Content';
import { Article } from '@/types';

export default Vue.extend({
	components: {
		Content
	},
	data: () => ({
		tag: '',
		category: ''
	}),
	computed: {
		snippets: {
			get(): Article[] {
				return this.$store.getters['snippets/getSnippets']({
					tag: this.tag,
					category: this.category
				});
			}
		}
	}
});
</script>

<style lang="scss">
@import '~tools';
.snippet-list {
	$el: &;
	&__item {
		position: relative;
		& + & {
			margin-top: 1em;
		}
	}
	&__category {
		position: absolute;
		right: 100%;
		display: block;
		font-weight: bold;
		line-height: 1em;
		text-transform: uppercase;
		opacity: 0.5;
		padding: 0.5em 1em;
		&--active {
			opacity: 1;
		}
	}
	&__title {
		font-size: 1.25em;
		text-decoration: none;
		margin-top: 0.25em;
	}
	&__tags {
		display: flex;
		margin: 0;
		padding: 0.5em;
		margin-top: 0.5em;
	}
	&__tag {
		display: block;
		& + & {
			margin-left: 0.5em;
		}
		&--active {
			#{$el}__tag-button {
				background-color: white;
				color: color(BlueDark);
			}
		}
	}
	&__tag-button {
		border: none;
		border-radius: 0.25em;
		background-color: color(BlueDark, 0.25);
		color: color(White);
		font-size: 0.85em;
		font-family: inherit;
		-webkit-appearance: none;
		padding: 0.5em 1em;
		&::before {
			content: '#';
			opacity: 0.5;
		}
		&:focus {
			outline: none;
			transform: scale(1.05);
		}
		&:hover {
			background-color: color(BlueDark, 0.5);
		}
	}
	&__content {
		border: 1px solid red;
		padding: 2em;
		background-color: white;
		color: black;
		margin: 0 -2em;
	}
}
</style>
