<template>
	<main class="page page--passport">
		<Heading>
			<h1>Icon Components</h1>
		</Heading>
		<Content class="background--orange">
			<h2>
				Generate Components from your set of SVG icons.
			</h2>
			<h4>
				Every time you make a website, or design system, it will need some
				icons. When using any framework, will it be Vue, React or Web Components
				using Stencil, it's nice to have those icons as components, so you can
				just give em the props you want.
			</h4>
			<p>
				That's very feasable if you have a few icons, having to copy and paste
				the logic is doable. But what if you want to change any prop for all
				components, or just want to easily add a component. That was a lot
				harder. Thats why I created this.
			</p>
			<p>
				All it does, is take all your svg icons, strips them and puts them in a
				predefined or by you defined template for components. So, to create your
				icon set in components, all you do is keep you SVG set up to date and
				run the command.
			</p>

			<p></p>
		</Content>
		<Content>
			<a
				class="large-link"
				href="https://github.com/silvandiepen/icon-components"
				>https://github.com/silvandiepen/icon-components</a
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
