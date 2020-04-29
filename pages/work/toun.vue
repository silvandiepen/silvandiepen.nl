<template>
	<main class="page page--guyn">
		<Heading class="background--yellow" title="Toun">
			<h2>
				A little real estate website project.
			</h2>
			<h4>
				Which also needed an iconset!
			</h4>
		</Heading>

		<Content class="background--icelight">
			<h3>A few of the icons</h3>
			<div class="icon-list">
				<img
					v-for="(icon, idx) in icons"
					:key="idx"
					class="icon-list__icon"
					:src="`/svg/toun/${icon}.svg`"
				/>
			</div>
			<Row><Item></Item></Row>
		</Content>
		<!-- <Content>
			<a class="large-link" href="https://www.toun.am">https://www.toun.am</a>
		</Content> -->
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Content, Heading, Row, Item } from '@/components';

export default Vue.extend({
	components: {
		Content,
		Heading,
		Row,
		Item
	},
	data: () => ({
		icons: [
			'swimmingpool',
			'balcony',
			'basement',
			'bathroom',
			'bedroom',
			'build',
			'cleaningroom',
			'floor',
			'garden',
			'gym',
			'livingroom',
			'playground',
			'room',
			'size',
			'storage'
		]
	})
});
</script>

<style lang="scss" scoped>
.icon-list {
	display: flex;
	flex-wrap: wrap;
	&__icon {
		display: block;
		width: 33.33%;
	}
}
</style>
