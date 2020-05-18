<template>
	<div>
		<VueMarkdown>{{ source }}</VueMarkdown>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import VueMarkdown from 'vue-markdown';
export default Vue.extend({
	components: {
		VueMarkdown
	},
	props: {
		source: {
			type: String,
			default: ''
		}
	}
});
</script>
