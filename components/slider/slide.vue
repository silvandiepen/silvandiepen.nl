<template>
	<div
		:class="['slides__item', `background--${color}`]"
		:style="`background-image:url(${image})`"
	>
		<div class="slides__content">
			<h3 class="slides__title">
				{{ title }}
			</h3>
			<a href="#" class="slides__link"><span class="icon--go-right"></span></a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: 'black'
		},
		image: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: ''
		},
		link: {
			type: String,
			default: '#'
		}
	}
};
</script>
