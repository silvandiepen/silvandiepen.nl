<template>
	<main class="page page--passport">
		<Heading>
			<h1>Aybu</h1>
		</Heading>
		<Content class="background--army">
			<h2>
				A little website, doing things with special characters.
			</h2>
			<h4>
				Having to find that one special character every time. I got tired of it,
				just wanting to create a list of commonly used icons by me. Would make
				his so much easier.
			</h4>
			<p>
				Thats why I created a Aybu. A little website, just to do that for me.
				It's not finished (far from it) but it did save me a lot of time already
				in my search for special characters
			</p>
			<p></p>
		</Content>
		<Content>
			<a class="large-link" href="https://aybu.svd.im/">https://aybu.svd.im</a>
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
