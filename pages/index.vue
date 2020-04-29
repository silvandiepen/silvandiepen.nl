<template>
	<main class="page page--home">
		<Content>
			<h3>
				Hi! My name is Sil van Diepen. I’m a dad, make images, code, talk
				bullshit, eat and sleep. And this… This is my website…
			</h3>
		</Content>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Content } from '@/components';

export default Vue.extend({
	components: {
		Content
	}
});
</script>

<style lang="scss">
@import '~tools';
.page {
	&--home {
		.page-content {
			padding-top: 6em;
		}
	}
}
</style>
