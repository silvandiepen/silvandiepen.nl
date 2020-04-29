<template>
	<main class="page page--me">
		<Heading class="background--orange" title="Open Source">
			<h2>SO</h2>
			<h4>YEAHH</h4>
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
		<Content class="content">
			<a class="large-link" href="https://github.com/silvandiepen">
				https://github.com/silvandiepen
			</a>
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
		pointer-events: none;
		margin: 0;
	}
}
</style>
