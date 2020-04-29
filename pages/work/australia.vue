<template>
	<main class="page page--guyn">
		<Heading class="background--browndark" title="Australia">
			<h2>
				Creating an experience
			</h2>
			<h4>
				For the Tourism organisation of Melbourne and Victoria we created
				several projects.
			</h4>
			<p>
				From a UK focused website and blog;
				<a href="https://www.australiaroadtrip.co.uk">Australia Road Trip</a> to
				facebook apps.
			</p>
			<p>
				Besides other things, It was my job to create a new iconset and several
				illustrations which were used in the websites and apps.
			</p>
		</Heading>
		<Content class="background--icelight">
			<h3>A few of the icons</h3>
			<div class="icon-list">
				<img
					v-for="(icon, idx) in icons"
					:key="idx"
					class="icon-list__icon"
					:src="
						`/svg/australia
					/${icon}.svg`
					"
				/>
			</div>
		</Content>
		<Content class="background--white">
			<img class="full-width" src="/svg/australia/footer_landscape.svg" />
		</Content>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Content, Heading } from '@/components';

export default Vue.extend({
	components: {
		Content,
		Heading
		// Row,
		// Item
	},
	data: () => ({
		icons: [
			'landscape',
			'adventure',
			'coastal-aquatic',
			'food-wine',
			'getting-there',
			'inspiration',
			'itinerary',
			'melbourne',
			'photography',
			'tips',
			'wildlife'
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
