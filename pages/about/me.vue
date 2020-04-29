<template>
	<main class="page page--me">
		<Heading class="background--orange" title="My name is Sil van Diepen">
			<h2>
				I create visual things using code and illustrations.
			</h2>
			<h4>
				I love creating visual styles using code, illustrations or any way which
				fits. I can help you with logo, identities, digital design,
				illustrations and code. I sometimes post my stuff on platforms like
				GitHub, Codepen, Dribbble and Behance. Are you interested? Just contact
				me 🙂
			</h4>
		</Heading>
		<Content class="background--icelight">
			<h3>More about me…</h3>
			<p>
				I was born in a small village called Limmen the Netherlands, but grew up
				in Heiloo, the next village. Always had a passion for drawing, computers
				and technology. From building my own computers to starting a website on
				Geocities.
			</p>
			<p>
				Moved to Curaçao in 2010 to see and experience living abroad, came back
				to Holland to work in a more professional environment and be able to
				work on projects for bigger clients. I Currently live in Alkmaar with my
				wife Yeva and son Tig. We love to travel and enjoy life.
			</p>
		</Content>
		<Content class="content-with-photo">
			<h3>And this is me…</h3>
			<img
				src="https://s3-eu-central-1.amazonaws.com/api.silvandiepen.nl/wp-content/uploads/2020/03/20105423/me.png"
			/>
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
