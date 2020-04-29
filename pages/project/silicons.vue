<template>
	<main class="page page--silicons">
		<Heading>
			<h1>Silicons</h1>
		</Heading>
		<Content class="background--yellow">
			<h2>
				An icon set completely made using CSS
			</h2>
			<h4>
				It always itrigued me, icons are practically always made using vectors,
				which need to be exported, made into components or an icon font. And
				after that need to have their css classess to be used. They are not that
				flexible in terms of color, thickness and scalability. So why not make
				them just using css?
			</h4>
		</Content>
		<Content class="background--icelight">
			<Row>
				<Item title="The rules">
					In order to make something out of this, I gave myself a few rules.
					<ol>
						<li>Only one html element allowed</li>
						<li>
							Icons should all have the same thickness, which can be altered by
							custom properties.
						</li>
					</ol>
				</Item>
			</Row>
		</Content>
		<Content>
			<a class="large-link" href="https://www.silicons.nl"
				>https://www.silicons.nl</a
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
	}
});
</script>
