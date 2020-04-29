<template>
	<main class="page page--guyn">
		<Heading class="background--armylight" title="Gelderse Streken">
			<h2>
				At Matise we once made a campaign voor "Gelderse Streken".
			</h2>
			<h4>
				The campaign was around people who walked a lot and.. well, not sure
				anymore. But I made a little iconset for the thing we made :)
			</h4>
		</Heading>
		<Content class="background--icelight">
			<h3>A few of the icons</h3>
			<div class="icon-list">
				<img
					v-for="(icon, idx) in icons"
					:key="idx"
					class="icon-list__icon"
					:src="`/svg/gelderse-streken/${icon}.svg`"
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
			'icon_restaurant',
			'icon_history',
			'icon_hotel',
			'icon_location',
			'icon_party',
			'icon_gps',
			'icon_hike'
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
