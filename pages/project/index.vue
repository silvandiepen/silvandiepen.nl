<template>
	<main class="page page--projects">
		<Heading title="Projects which keep me from the street.." />
		<Content>
			<h2>Guyn</h2>
			<h3>The Pretty Developer Toolkit Toolbelt</h3>
			<p>
				A toolset with all kinds of things, from a SCSS framework to colorsets,
				icons, functions and a Design System. A big work in progress.
			</p>
			<Button color="skybluelight" link="https://www.guyn.nl/"
				>Visit Guyn</Button
			>
		</Content>
		<Content background="black">
			<h2>DrawType</h2>
			<h3>Drawing your own fonts</h3>
			<p>
				Using the iPad Pro with pencil to the max to create your own self drawn
				fonts. (dev, because its a wip)
			</p>
			<Button color="black" link="https://dev.drawtype.nl/"
				>Visit DrawType</Button
			>
		</Content>
		<Content background="beige" class="column">
			<h2>Aybu</h2>
			<h3>
				Keeping looking for those special characters. I made it a little
				easier..
			</h3>
			<p>
				So I created this overview of icons which we all have already. Easy to
				copy or make your favorite list.
			</p>
			<Button icon="→" color="black" link="https://aybu.svd.im/"
				>Visit Aybu</Button
			>
		</Content>
		<Content background="yellow" class="column">
			<h2>Silicons</h2>
			<h3>
				Icons are everywhere and i’m working with icons a lot in the websites
				and projects I build.
			</h3>
			<p>
				Usually, icons are made into a font, as images of preferably as SVG. But
				I thought, why not just use css? So I created this icon set which only
				uses CSS.
			</p>
			<Button icon="→" color="blue" link="https://www.silicons.nl/">
				Visit Silicons
			</Button>
		</Content>
		<Content background="plum" class="column">
			<h2>Passport</h2>
			<h3>
				Compare and combine the strenght of passports.
			</h3>
			<p>
				It came from a colleague who said his passport combination of Dutch and
				Canadian was stronger than my prefered combo. So I made a tool to check
				this out :)
			</p>
			<Button icon="→" color="white" link="https://passport.svd.im">
				Visit Passport
			</Button>
		</Content>
		<Content background="black" class="column">
			<h2>Overlay</h2>
			<h3>
				Load a website and add an image to overlay it.
			</h3>
			<p>
				Sometimes, you just wanna pixelperfect your app or website. So I created
				a little tool to load a page in a certain size and put your image over
				it as an overlay.
			</p>
			<Button icon="→" color="white" link="https://overlay.svd.im">
				Visit Overlay
			</Button>
		</Content>
		<Content background="plumdark" class="column">
			<h2>Grid Tool</h2>
			<h3>
				Figuring out the grid made, can be a hassle. Especially when you don't
				have a design app.
			</h3>
			<p>
				Thats why, there is Grid Tool. Just to check the grid, nothing more,
				nothing less. Add the image and show the grid.
			</p>
			<Button icon="→" color="white" link="https://grid-tool.svd.im">
				Visit Grid
			</Button>
		</Content>
		<Content background="yellow" class="column">
			<h2>CSS Order</h2>
			<h3>
				To clean up the CSS a specified order is in order.
			</h3>
			<p>
				Alphabetically isn't logical. So I created a "logical" order for CSS and
				the set to enforce this using stylelint.
			</p>
			<Button icon="→" color="black" link="https://css-order.svd.im">
				Visit CSS Order
			</Button>
		</Content>
	</main>
</template>
<script lang="ts">
import Vue from 'vue';
import { Heading, Button, Content } from '@/components';

export default Vue.extend({
	components: {
		Heading,
		Button,
		Content
	}
});
</script>
