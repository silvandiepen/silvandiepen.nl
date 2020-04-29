<template>
	<Container class="slides">
		<div class="slides__wrapper">
			<Slide
				v-for="(slide, idx) in data"
				:key="idx"
				:color="slide.color"
				:link="slide.link"
				:image="slide.image"
				:title="slide.title"
			/>
		</div>
	</Container>
</template>
<script>
import Slide from '~/components/slider/slide.vue';
import { Container } from '@/components';
export default {
	components: {
		Slide,
		Container
	},
	props: {
		data: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="scss"></style>
