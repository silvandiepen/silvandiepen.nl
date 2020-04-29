<template>
	<div class="layout layout-default" :class="colorMode" :style="headerStyle">
		<MainHeader />
		<nuxt />
		<MainFooter />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { Header, Footer } from '~/components/layout';

export default {
	transition: 'page',
	components: {
		MainHeader: Header,
		MainFooter: Footer
	},
	async asyncData({ store }) {
		await store.dispatch('articles/loadArticles');
	},
	data: () => ({
		scroll: {
			position: 0,
			last: 0,
			tick: false
		}
	}),
	computed: {
		...mapState('ui', ['favicon', 'colorMode']),
		headerStyle() {
			return {
				'--scroll-top-px': `${this.scroll.position}px`,
				'--scroll-top': `${this.scroll.position}`,
				'--scroll-top-max': `${
					this.scroll.position > 1000 ? 1000 : this.scroll.position
				}`,
				'--scroll-top-max-reverse': `${
					1000 - this.scroll.position > 0 ? 1000 - this.scroll.position : 0
				}`
			};
		}
	},
	watch: {},
	mounted() {
		this.$store.dispatch('articles/loadArticles');
		window.addEventListener('scroll', () => {
			this.scroll.last = window.scrollY;

			if (!this.scroll.tick) {
				window.requestAnimationFrame(() => {
					this.scroll.position = this.scroll.last;
					this.scroll.tick = false;
				});
				this.scroll.tick = true;
			}
		});
	}
};
</script>
<style lang="scss">
@import '~tools';
.page-enter-active,
.page-leave-active {
	transition-timing-function: $base-cubic-bezier;
	transition-duration: #{($base-transition-time * 2)}s;
	transition-property: opacity;
}
.page-enter,
.page-leave-to {
	opacity: 0;
}
</style>
