<template>
	<div class="content-item">
		<h3 v-if="title" class="content-row__item-title">
			{{ title }}
		</h3>
		<p><slot></slot></p>
		<Button v-if="link" :link="link">{{
			linkTitle ? linkTitle : title
		}}</Button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Button } from '@/components';
export default Vue.extend({
	components: {
		Button
	},
	props: {
		title: {
			type: String,
			default: null
		},
		link: {
			type: String,
			default: null
		},
		linkTitle: {
			type: String,
			default: null
		}
	}
});
</script>
<style lang="scss" src="./Item.style.scss" />
