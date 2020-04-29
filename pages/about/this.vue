<template>
	<main class="page page--me">
		<Heading class="background--turquoise" title="This website">
			<h2>
				I create visual things using code and illustrations.
			</h2>
		</Heading>
		<Content class="background--icelight">
			<h3>And with "this".. I mean this website.</h3>
			<h4>
				Yeah… there is quite some to tell about this website. Which is iteration
				number 246462 of my own personal website. It started all on geocities,
				from there to frontpage, etc.. etc..
			</h4>
			<p>
				Now I’m a professional web developer and use all kinds of tools I
				couldn’t even think of in the early days. I’ve used quite some in here,
				but still try to keep it light. Although all the color madness here
				doesn’t really show what I mean with that.
			</p>
		</Content>
		<Content class="background--icelight">
			<h3>What it's build on..</h3>
			<Row>
				<Item title="Vue">
					<p>
						For most projects at the moment I’m using Vue + Nuxt. This because
						its easy, I really like Vue and I truely enjoy building things with
						it.
					</p>
				</Item>
				<Item title="Netlify">
					<p>
						Simplicity is the thing I love about Netlify, it just works and it’s
						so easy to set up. Love that!
					</p>
				</Item>
			</Row>
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

<style lang="scss">
.content-with-photo {
	min-height: 50vh;
	clip-path: inset(0 0 0 0);
	&,
	.content {
		padding-bottom: 0;
	}
	img {
		position: fixed;
		top: 0;

		left: 50%;
		height: 100vh;
		transform: translateX(-50%);
		object-fit: cover;
		pointer-events: none;
		margin: 0;
	}
}
</style>
