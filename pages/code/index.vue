<template>
	<main class="page page--code">
		<Heading title="Writing code, for different purposes.." />
		<Content class="background--brownlight">
			<h2>Open Source</h2>
			<h4>
				A very important thing in the life of any frontend developer must be
				open source. Some only use it but others also like to contribute
			</h4>

			<p>
				I'm one of those in the latest category. To say I'm actually
				contributing anything valuable is something you can determine by
				yourself, but I'm doing my best to do so.
			</p>
		</Content>
		<Content class="background--beigedark">
			<h2>Design Systems</h2>
			<h4>
				Might be a bit opinionated, but I put Design systems under code. Because
				I think, that a good design system is mainly also well coded. If not,
				it's not usuable.
			</h4>
			<p>
				I've been working on several design systems through the years. In those
				many different little and also bigger projects, I've learned a lot. From
				how to build it, to structure it and mainly also how Not to build it or
				market it.
			</p>
			<p>
				You can build a very nice design system, which looks amazing, but If its
				not easy to work with, easy to implement or easy to update. It's
				practically worthless and is actually making many workflow a lot harder.
				A design system should be a tool which designers and developers both
				love and can contribute to in an easy way.
			</p>
		</Content>

		<Content class="background--beige">
			<h2>Generators</h2>
			<h4>
				As as truely lazy developers, you try to make things easier and easier.
				Repetitive work is something computers can do. But in order to make them
				do it, you first need to get your work in.
			</h4>
			<p>
				Through the years I've made quite some generators, using different
				toolsets.
			</p>
			<p>
				The main generator I am using now, is the one I've also used for this
				website. `npx create-henris-project`. Is a generator which poops out a
				NuxtJS (Vue) project with all the settings I usually use. Including my
				own Sass framework (Henri's).
			</p>
		</Content>
	</main>
</template>

<script>
import { Content, Heading } from '@/components';
export default {
	components: {
		Content,
		Heading
	},
	head() {
		return {
			title: 'Code'
		};
	}
};
</script>
