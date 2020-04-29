<template>
	<main class="page page--henris">
		<Heading>
			<h1>Henri's</h1>
		</Heading>
		<Content class="background--nightblue">
			<h2>
				The Sass toolbelt
			</h2>
			<h4>
				A project which I have been working on for many years already and which
				became the toolset of many websites.
			</h4>
			<p></p>
		</Content>
		<Content class="background--icelight">
			<Row>
				<Item title="Colors">
					A full colorset of all basic colors. In different formats, from json,
					to scss and css custom properties. In that way easy implementable in
					any kind of project and easy to use the same colorset.
				</Item>
				<Item title="Design System">
					I'm making Design Systems for a while, and wanted to make one for
					myself. For my own use. Since I'm using Vue for most projects, I made
					this design System using Vue as a framework.
				</Item>
				<Item title="Tools">
					Converting colors and icons to components. Guyn also includes those
					little tools.
				</Item>
				<Item title="Icons">
					A full set of icons in any kind of format. Original SVG files, a font
					and ofcourse components in Vue, React and Web Components which can
					directly be used.
				</Item>
			</Row>
		</Content>
		<Content>
			<a class="large-link" href="https://www.henris.style"
				>https://www.henris.style</a
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
