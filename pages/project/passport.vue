<template>
	<main class="page page--passport">
		<Heading>
			<h1>Passport</h1>
		</Heading>
		<Content class="background--plum">
			<h2>
				Which passport combination is the strongest?
			</h2>
			<h4>
				It started as a simple set of colors. A set I was using for all my
				little projects. Defining a new colorset every time became a pain in the
				ass and to make all projects look a little alike, it was nice to have a
				colorset which was used everywhere.
			</h4>
			<p></p>
		</Content>
		<Content>
			<a class="large-link" href="https://passport.svd.im"
				>https://passport.svd.im</a
			>
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
