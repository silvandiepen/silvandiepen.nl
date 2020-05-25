<template>
	<main class="page page--drawtype">
		<Heading>
			<h1>DrawType</h1>
		</Heading>
		<Content background="red">
			<h2>
				Draw your own fonttype on an iPad.
			</h2>
			<h4>
				Creating your own font can be a lot of work. Having to find out which
				glyphs to use, which software to use, kerning, everything.
			</h4>
			<p>
				All I wanted to do is use the power of my iPad and the stylus to create
				a simple font which looks like my handwriting. That shouldn't be that
				hard, should it?
			</p>

			<p>
				That's when I decided to build something which can just do this, and
				help me in the process. It's far from done, but the beginning is there.
				It's currently still running on dev, so you can follow all the latest
				changes.
			</p>
		</Content>
		<Content>
			<a class="large-link" href="https://dev.drawtype.nl"
				>https://dev.drawtype.nl</a
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
