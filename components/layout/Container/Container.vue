<template>
	<section ref="el" :class="state.classes">
		<slot></slot>
	</section>
</template>
<script>
import {
	defineComponent,
	reactive,
	ref,
	onMounted,
	computed
} from '@vue/composition-api';

export default defineComponent({
	setup() {
		const el = ref(null);
		const isActive = ref(false);
		const current = reactive({
			top: 0,
			bottom: 0,
			wasInview: false,
			isInview: false,
			isOnTop: false,
			isOnBottom: false,
			isOffTop: false,
			isInFullView: false
		});
		const element = reactive({
			top: 0,
			height: 0,
			bottom: 0
		});
		const containerElement = reactive({
			height: 0,
			bottom: 0,
			top: 0,
			windowHeight: 0
		});

		const scrollTick = ref(false);

		const state = reactive({
			classes: computed(() => [
				`${current.wasInview ? 'was-inview' : null}`,
				`${current.isInview ? 'is-inview' : 'is-not-inview'}`,
				`${current.isOnTop ? 'on-top' : 'not-on-bottom'}`,
				`${current.isOffTop ? 'off-top' : 'not-off-top'}`,
				`${current.isOnBottom ? 'on-bottom' : 'not-on-bottom'}`,
				`${current.isInFullView ? 'is-full-inview' : null}`
			])
		});

		function doSomething() {
			if (scrollTick)
				window.requestAnimationFrame(() => {
					setValues();
					scrollTick.value = false;
				});

			scrollTick.value = true;
		}

		function init() {
			containerElement.top = window.scrollY;
			containerElement.bottom = window.scrollY + window.innerHeight;
			containerElement.height = window.innerHeight;
			containerElement.windowHeight =
				document.body.clientHeight ||
				document.documentElement.clientHeight ||
				document.documentElement.scrollHeight;

			// console.log(inviewElement);
			let bounding = {
				height: 0,
				top: 0
			};
			if (el && el.value) {
				bounding = el?.value?.getBoundingClientRect();
				element.height = bounding.height;
				element.top = bounding.top;
				element.bottom = bounding.height + bounding.top;
				isActive.value = true;
			}
			// console.log(' INIT: ', el.value, element.top, containerElement);
		}

		function setValues() {
			// Check inview

			containerElement.top = window.scrollY;
			containerElement.bottom = window.scrollY + window.innerHeight;

			current.isInview = !(
				element.top > containerElement.bottom ||
				element.bottom < containerElement.top
			);

			current.isInFullView = !!(
				element.top > containerElement.top &&
				element.top < containerElement.bottom &&
				element.bottom < containerElement.bottom &&
				element.bottom > containerElement.top
			);

			if (current.isInview) current.wasInview = true;

			// If ontop
			current.isOnTop = window.scrollY < 1;
			// If onBottom
			current.isOffTop =
				window.scrollY + containerElement.height >=
				containerElement.windowHeight;
		}

		onMounted(() => {
			init();
			doSomething();
			window.addEventListener('scroll', () =>
				isActive ? doSomething() : () => {}
			);
		});

		return {
			state,
			el
		};
	}
});
</script>
<style lang="scss" src="./Container.style.scss" />
