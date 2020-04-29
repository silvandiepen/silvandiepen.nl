<template>
	<main class="page page--guyn">
		<Heading title="BBB" class="background--nightbluelight">
			<h2>
				A Bike Accessory brand where I did quite a lot for.
			</h2>
			<h4>
				A while ago, I was working for Matise, a digital agency in Amsterdam. At
				Matise we were working for BBB Cycling. Where we created multiple new
				websites and did a lot design.
			</h4>
			<h4>
				Besides other things, It was my job to create a new iconset for BBB
				which could be used on the website and on their packaging.
			</h4>
		</Heading>
		<Content class="background--icelight">
			<h3>A few of the icons</h3>
			<div class="icon-list">
				<img
					v-for="(icon, idx) in icons"
					:key="idx"
					class="icon-list__icon"
					:src="`/svg/bbb/${icon}.svg`"
				/>
			</div>
			<Row><Item></Item></Row>
		</Content>
		<Content>
			<a class="large-link" href="https://www.bbbcycling.com"
				>https://www.bbbcycling.com</a
			>
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
		icons: [
			'anti-bacteria',
			'anti-insect',
			'battery-default',
			'biketype-mtb',
			'biketype-road',
			'biketype-urban',
			'connectivity_remote',
			'connectivity-wired',
			'connectivity-wireless',
			'gel',
			'glove-absorbingmaterial',
			'glove-easypull',
			'glove-grip',
			'touch',
			'material-memoryfoam',
			'position-4-midlow',
			'pressure',
			'material-leather',
			'valve_presta',
			'water-waterresistant',
			'water-waterresistant2'
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
