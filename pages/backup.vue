<template>
	<main class="page page--home">
		<Heading class="intro" title="Sil van Diepen" />
		<Content>
			<h3>
				Hi! My name is Sil van Diepen. I’m a dad, make images, code, talk
				bullshit, eat and sleep. And this… This is my website…
			</h3>
		</Content>

		<Slider v-if="slides" :data="slides" />

		<Content class="interesting background--black">
			<h1 class="pop-column">
				Some things I find really interesting at the moment;
			</h1>

			<div class="content-row row">
				<div class="column small-full medium-half pop-column">
					<h2>Design Systems</h2>
					<h4>
						You a design system and you a design system! Everybody A design
						system.
					</h4>
					<p>
						It sounds so easy, but (un)fortunately it is not that easy. There
						are many ways to build a design system and I've tried them all.
						Currently I am working at Transavia where I'm working on their
						design system which will be used in many ways with a main focus on
						the corporate website.
					</p>
				</div>
				<div class="column small-full medium-half  pop-column">
					<h2>Icons</h2>
					<h4>They make it clear..</h4>
					<p>
						I've been into making little drawings since I was a little kid.
						Icons have interested me for a really long time. I love them and
						love what you can do with a few pixels.
					</p>
				</div>
				<div class="column small-full medium-half  pop-column">
					<h2>Web Components</h2>
					<h4>The future of the web is coming.</h4>
					<p>
						Wow, really.. the future is coming? You won't say! Anyway.. Web
						components have been around for quite a while but never were they so
						well supported as they are now finally. That's why I jumped fully
						into them...
					</p>
				</div>
				<div class="column small-full medium-half  pop-column">
					<h2>Vue</h2>
					<h4>React, Angular or Vue.. gotta choose..</h4>
					<p>
						No you don't have to choose but I kinda still did. Although I don't
						have a problem and I do see good things in all frameworks. I do
						prefer Vue, just because it feels easiest to me and I have most fun
						actually building things using Vue.
					</p>
				</div>
				<div class="column small-full medium-half  pop-column">
					<h2>Sass</h2>
					<h4>CSS on Steroids without JS!</h4>
					<p>
						It's been around for ages and there are new techniques but I still
						prefer my Sass and I still think Sass has a bright future.
					</p>
				</div>
			</div>
		</Content>
		<div class="row small-full medium-half">
			<Block class="column background--yellow">
				<h2>Projects</h2>
				<p>
					Just for fun, as an idea or sometimes handy in development. I've
					created lots of projects and some are still a work in progress (as it
					should be). Here's an overview of some of the personal projects I'm
					working on..
				</p>
				<!-- <Loading></Loading> -->
				<!-- <MyButton link="/code/projects">Go to Projects</MyButton> -->
			</Block>
			<Block class="column background--pink">
				<h2>Packages</h2>
				<p>
					While doing my work, personal and for the monies. I don't like copy
					pasting code back and forwards from project to project. And why not
					share them with the rest of world? Thats why I make them into packages
					which everyone can use.
				</p>
				<!-- <TheButton link="/code/packages">Go to Packages</TheButton> -->
			</Block>
		</div>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Block, Content, Heading } from '@/components';

// // import { Button as MyButton } from '@guyn/ds';
// import { Loading } from '@guyn/ds';

export default Vue.extend({
	components: {
		Block,
		Content,
		Heading
		// MyButton,
		// Loading,
		// Slider: () => import('@components/slider/slider.vue')
	},
	data() {
		return {
			slides: [
				{
					link: '#',
					color: 'blue',
					title: 'Chami',
					image:
						'https://api.silvandiepen.nl/wp-content/uploads/2019/09/chami.png'
				},
				{
					link: '#',
					color: 'brown',
					title: 'Chernobyl',
					image:
						'https://api.silvandiepen.nl/wp-content/uploads/2019/09/1526-1024x683.jpg'
				},
				{
					link: '#',
					color: 'skyblue',
					title: 'Ice Cream',
					image:
						'https://api.silvandiepen.nl/wp-content/uploads/2019/09/icecream-color-06-1024x1024.png'
				},
				{
					link: '#',
					color: 'yellow',
					title: 'Bananana',
					image:
						'https://api.silvandiepen.nl/wp-content/uploads/2019/09/banana1-1024x1024.jpg'
				}
			]
		};
	}
});
</script>

<style lang="scss">
@import '~tools';
.page {
	&--home {
	}
}
.pop-column {
	transform: translateY(grid(2));
	transition: transform 0.5s;
}
.inview .pop-column {
	animation: popColumnUp 0.5s;
	@at-root {
		@keyframes popColumnUp {
			to {
				transform: translateY(grid(0));
			}
		}
	}
	@for $i from 1 through 10 {
		&:nth-child(#{$i}) {
			animation: popColumnUp 0.5s #{$i/10 + 1}s forwards;
		}
	}
}

.intro {
	display: flex;
	align-items: flex-end;
	height: 66.66vh;

	h1 {
		position: relative;
		left: 50%;
		width: 100vw;
		background-color: currentColor;
		color: color(_Black);
		color: currentColor;
		font-weight: 600;
		font-size: grid(3.65);
		letter-spacing: -0.05em;
		text-align: center;
		transform: translateX(-50%);
		clip-path: inset(0 100% 0 0);
		transition: color 0.5s, background 0.5s;

		@media #{$small-only} {
			font-size: grid(3.75);
		}
	}
	&.inview h1 {
		animation: showTitle 1s forwards ease-in-out;
		@at-root {
			@keyframes showTitle {
				0% {
					clip-path: inset(0 100% 0 0);
				}
				100% {
					background-color: inherit;
					clip-path: inset(0 0% 0 0);
				}
			}
		}
	}
	@include theme();
}

.slides {
	position: relative;
	z-index: 2;
	width: 100vw;
	overflow: scroll;
	margin: -grid(2 0);
	padding: grid(1 0);
	&__wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
	}
	&__title {
		position: absolute;
		top: 100%;
		left: 0;
		background-color: color(White);
		color: color(Black);
		font-size: 0.8rem;
		padding: 1rem;
	}
	&__item {
		position: relative;
		flex-shrink: 0;
		width: grid(12);
		height: grid(8);
		background-position: center center;

		background-size: cover;
		transform: scale(0.25);
		margin-left: grid(1);
		&:nth-child(2n) {
			width: grid(8);
			height: grid(12);
			// .slides__title{
			// 	top: 0; bottom: auto;
			// }
		}

		@media #{$small-only} {
			width: grid(14);
			height: grid(14);
			margin-left: $mobile-padding;
			&:nth-child(2n) {
				width: grid(14);
				height: grid(14);
			}
		}
	}
	&.was-inview {
		@at-root {
			@keyframes popIn {
				0% {
					transform: scale(0.25) rotate(2.5deg);
				}
				80% {
					transform: scale(1.05) rotate(5deg);
				}
				100% {
					transform: scale(1) rotate(0deg);
				}
			}
		}
		@for $i from 1 through 4 {
			.slides__item:nth-child(4n + #{$i}) {
				animation: popIn 0.5s #{($i/10)}s forwards;
			}
		}
	}
}
</style>
