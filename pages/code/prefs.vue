<template>
	<main class="page page--code">
		<Heading title="Preferences" />
		<Content class="background--red">
			<h2>
				Every developer has its preferences, nothing is either good or bad. But
				I think it does say something about somebody. These are some of my
				"standards".
			</h2>
		</Content>

		<Content>
			<h2>CSS</h2>
			<p>
				Let's start with CSS, my favorite language overall. I like to use CSS
				the max and prefer making animations using pure CSS than doing
				everything with JavaScript.
			</p>

			<h4 emoji="🥰">Sass</h4>

			<p>
				I truly love Sass. It is my go to superset of CSS which give me so much
				strength.
			</p>
			<p>
				I love exploring it, creating functions and getting my toolset as
				powerful as can be.
			</p>

			<h4 emoji="🥱">LESS</h4>
			<p>
				Have worked with it a few times, actually started out using LESS before
				I knew Sass and loved it at that time. A few years ago I had to work
				with it again, I ended up writing a Sass > CSS > Less compilers so I
				could just write Sass.
			</p>
			<p>
				<small
					>* the compiler for the project didn't accept CSS, it had to be Less
					for some reason. Sass is not compilable directly to Less because Less
					has way less functionality and CSS is not valid Less, so I needed also
					to actually convert CSS to LESS</small
				>
			</p>

			<h4 emoji="😏">BEM</h4>
			<p>
				My go to method for naming selectors is using BEM. This makes sure you
				don't get into problems of leaking style into other components and gives
				a set of rules how to name selectors. When done well, this give a very
				clear result and makes sure that removing code is as easy as wiping your
				ass.
			</p>

			<h4 emoji="🤫">Stylelint</h4>
			<p>
				Stylelint is a very important tool for me, I like to integrate it in
				every project I work on to keep the style of CSS the same and fix
				mistakes like duplicate selectors.
			</p>
			<p>
				The order or the CSS is a thing which has been talked about a lot, I
				prefer order my CSS elements using my own little Stylelint extension;
				'<NuxtLink to="/project/CSS-order">stylelint-logical-order</NuxtLink>'.
				This enforces a "logical" order for the elements.
			</p>
			<h4 emoji="🤮">CSS-in-JS</h4>
			<p>
				I have tried it many times, I have had many discussions, but I really
				don't like it. It solves non-existing problems and creates others like
				styling within a JS framework. In my opinion styling should be separate
				thing from logic and the same html should be possible to use in a total
				different project, using the same styling and it should work. Any
				CSS-in-JS method prevents easy use in different stack projects.
			</p>
		</Content>
		<Content class="background--beigelight">
			<h2>JavaScript</h2>
			<p>
				After years and years creating websites using just HTML, CSS and PHP. I
				hardly used JavaScript, I saw it as a little out-dated tool to get a
				hover on a button. Which was, at that time also the case.
			</p>
			<p>
				But now, everything is JavaScript, backend, frontend, apps, everything!
				Well, it doesn't have to be, but you can.
			</p>
			<h3>Frameworks</h3>
			<h4 class="title--emoji">The early days...</h4>
			<p>
				JQuery is where it all started or actually, my first experience with a
				JavaScript framework was with Backbase, which was, at the time a
				JavaScript Framework and not a company providing webtools for financial
				companies, after that it was Mootools and there was JQuery. A tool which
				is still being used, although it being less and less.
			</p>
			<p>
				In some way I always prefered writing Vanilla JavaScript over JQuery, it
				felt better to not have to include the whole library, but in the end,
				with all the browser issues which were there, I ended up including
				JQuery anyway and just work with that.
			</p>
			<p>It gave me joy, but now I really don't want to see it anymore.</p>
			<h4 class="title--emoji">AngularJS</h4>
			<p>My first real framework.</p>
			<h4 class="title--emoji">Vue</h4>
			<h4 class="title--emoji">React</h4>
			<p>
				I've tried it multiple times, I've looked at it.. Worked with it. And
				eventhough I have worked with it in a more serious matter. I don't
				really enjoy working with it. To me, React feels like a framework which
				can do everything, but everything is made harder than necessary.
				Ofcourse in the end everythinng is possible. But it feels like the
				Android UI for me, where Vue
			</p>
		</Content>
	</main>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { Content, Heading } from '@/components';
export default defineComponent({
	setup() {
		return {
			Content,
			Heading
		};
	}
});
</script>
<style lang="scss">
.title--emoji {
	position: relative;
	&::after {
		content: attr(emoji);
		position: absolute;
		top: 0;
		right: calc(100% + 1em);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 1.5em;
		height: 1.5em;
		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0.15);
		font-size: 0.75em;
	}
}
</style>
