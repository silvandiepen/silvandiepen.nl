<template>
	<main class="page page--projects">
		<Heading title="Projects which keep me from the street.." />
		<div class="row small-full medium-half">
			<Block class="column background--blue">
				<h2>Henri's</h2>
				<h3>The Sass Toolbelt</h3>
				<p>
					Henri’s is a simple to install Sass toolbelt which gives you the
					freedom and joy of building things yourself, with a set of handy tools
					to speed it up.
				</p>
				<!--
			<div class="content-row row">
				<div class="column small-full large-third">
					<h4>But what does it actually do?</h4>
					<p>
						Well a lot, it gives you a shitload of functions, mixins and other
						tools, to speed up your styling. But also keeps it fun to actually
						style the things you want. It doesn’t have any out put by default,
						so its very lightweight, but give you full control over what to
						output and how much. So the default is 0kb.
					</p>
				</div>

				<div class="column small-full large-third">
					<h4>
						Work with everything because it doesn’t do stuff you don’t need.
					</h4>
					<p>
						Wow, that sounds vague! But it’s not. Many Sass frameworks give you
						also a lot of javascript to make stuff work. Henri’s doesn’t. Which
						makes it possible to use Henri’s in every kind of project. The only
						dependency is Sass. Either Node Sass, Sass or Ruby Sass. It doesn’t
						have any out put by default, so its very lightweight, but give you
						full control over what to output and how much. So the default is
						0kb.
					</p>
				</div>
				<div class="column small-full large-third">
					<h4>Find out more…</h4>

					<p>More information about Henri’s and the docs.</p>
					<Button href="https://www.henris.style/">Visit Henri's</Button>
				</div>
			</div> -->
				<Button href="https://www.henris.style/">Visit Henri's</Button>
			</Block>

			<Block class="column background--purpledark">
				<h2>Aybu</h2>
				<h3>
					Keeping looking for those special characters. I made it a little
					easier..
				</h3>
				<p>
					So I created this overview of icons which we all have already. Easy to
					copy or make your favorite list.
				</p>
				<Button icon="→" href="https://aybu.svd.im/">Visit Aybu</Button>
			</Block>

			<Block class="column background--magenta">
				<h2>Guyn</h2>
				<h3>
					Colorsets are everywhere, for every project and every theme for even a
					code editor I like to create a colorset which fits.
				</h3>
				<p>
					Also all colors you are seeing here, are straight from Guyn. I've made
					this website/tool/package just to have a colorset which can be used in
					any situation. To have colors which fit and can be used easily.
				</p>
				<Button icon="→" href="https://guyn.nl/">Visit Guyn</Button>
			</Block>

			<Block class="column background--blue">
				<h2>Silicons</h2>
				<h3>
					Icons are everywhere and i’m working with icons a lot in the websites
					and projects I build.
				</h3>
				<p>
					Usually, icons are made into a font, as images of preferably as SVG.
					But I thought, why not just use css? So I created this icon set which
					only uses CSS.
				</p>
				<Button icon="→" href="https://www.silicons.nl/">
					Visit Silicons
				</Button>
			</Block>
			<Block class="column background--plum">
				<h2>Passport</h2>
				<h3>
					Compare and combine the strenght of passports.
				</h3>
				<p>
					It came from a colleague who said his passport combination of Dutch
					and Canadian was stronger than my prefered combo. So I made a tool to
					check this out :)
				</p>
				<Button icon="→" href="https://passport.svd.im">
					Visit Passport
				</Button>
			</Block>
			<Block class="column background--greendark">
				<h2>Overlay</h2>
				<h3>
					Load a website and add an image to overlay it.
				</h3>
				<p>
					Sometimes, you just wanna pixelperfect your app or website. So I
					created a little tool to load a page in a certain size and put your
					image over it as an overlay.
				</p>
				<Button icon="→" href="https://overlay.svd.im">
					Visit Overlay
				</Button>
			</Block>
			<Block class="column background--turquoisedark">
				<h2>Grid Tool</h2>
				<h3>
					Figuring out the grid made, can be a hassle. Especially when you don't
					have a design app.
				</h3>
				<p>
					Thats why, there is Grid Tool. Just to check the grid, nothing more,
					nothing less. Add the image and show the grid.
				</p>
				<Button icon="→" href="https://grid-tool.svd.im">
					Visit Grid
				</Button>
			</Block>
			<Block class="column background--red">
				<h2>CSS Order</h2>
				<h3>
					To clean up the CSS a specified order is in order.
				</h3>
				<p>
					Alphabetically isn't logical. So I created a "logical" order for CSS
					and the set to enforce this using stylelint.
				</p>
				<Button icon="→" href="https://css-order.svd.im">
					Visit CSS Order
				</Button>
			</Block>
		</div>
	</main>
</template>
<script lang="ts">
import Vue from 'vue';
import { Block, Heading, Button } from '@/components';

export default Vue.extend({
	components: {
		Block,
		Heading,
		Button
	}
});
</script>
