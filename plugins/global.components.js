import Vue from 'vue';
import Markdown from '@sil/markdown';
// import GlobalComponentExample from '~/components/global-component-example.vue';

const Components = {
	Markdown
	// GlobalComponentExample
};

Object.keys(Components).forEach((key) => {
	Vue.component(key, Components[key]);
});
