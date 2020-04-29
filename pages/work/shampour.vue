<template>
	<main class="page page--brown">
		<Heading title="Shampour" class="background--brown">
			<h2>
				The shampour, is a stable in the Armenian kitchen.
			</h2>
			<h4>
				Or actually, more outside. Because a shampour is like a stick to put
				meat on for the barbeque.
			</h4>
		</Heading>
		<Content class="background--icelight">
			<h3>A few of the icons</h3>
			<div class="icon-list">
				<div v-for="(icon, idx) in icons" :key="idx" class="icon-list__item">
					<img class="icon-list__icon" :src="`/svg/shampour/${icon}.svg`" />
				</div>
			</div>
			<Row><Item></Item></Row>
		</Content>
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
		icons: ['vegetables', 'beef', 'chicken', 'fish', 'goat', 'lamb', 'pork']
	})
});
</script>

<style lang="scss" scoped>
.icon-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	&__item {
		display: block;
		width: 33.33%;
		padding: 2em;
	}
	&__icon {
		width: 100%;
	}
}
</style>
