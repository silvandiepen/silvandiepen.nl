import { defineComponent, ref } from '@vue/composition-api';
import { NavigationData, FastNavigationData } from './Footer.data';
export default defineComponent({
	setup() {
		const backgroundImage = ref([]);
		const addImage = (item) => {
			backgroundImage.value.push(item);
			cleanUp();
		};
		const cleanUp = () => {
			if (backgroundImage.value.length > 3)
				backgroundImage.value = backgroundImage.value.slice(-2);
		};

		return {
			backgroundImage,
			NavigationData,
			FastNavigationData,
			addImage
		};
	}
});
