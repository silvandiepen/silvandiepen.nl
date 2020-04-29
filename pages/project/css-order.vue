<template>
	<main class="page page--passport">
		<Heading>
			<h1>CSS Order</h1>
		</Heading>
		<Content class="background--army">
			<h2>
				Neatly order your stylesheets in the right order.
			</h2>
			<h4>
				Css doesn't need a specific order for it's elements. Yet it's always
				nice to have, to have more overview and be sure where to find
				everywhere. Some say by alphabet is a logical, in my opinion.. it's not.
				Some element conflict with each other and things like width and height
				should stand together.
			</h4>
			<p>
				Thats why I created a plugin for stylelint to enforce a "logical order".
			</p>
			<p></p>
		</Content>
		<Content>
			<a class="large-link" href="https://css-order.svd.im/"
				>https://css-order.svd.im</a
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
