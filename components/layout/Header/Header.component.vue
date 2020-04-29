<template>
	<header id="header" class="header">
		<h3 class="header__logo">
			<NuxtLink to="/">
				<span class="header__firstname">
					<span v-for="i in firstName.length" :key="i">{{
						firstName.split('')[i - 1]
					}}</span>
				</span>
				<!-- <Logo v-if="Logo" class="header__logo-icon"></Logo> -->
			</NuxtLink>
			<span class="header__lastname">{{ lastName }}</span>
		</h3>
	</header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
// import Logo from '../../Logo';
export default defineComponent({
	setup() {
		const firstName = 'Sil';
		const lastName = 'van Diepen';
		return {
			firstName,
			lastName
			// Logo
		};
	}
});
</script>

<style lang="scss" src="./Header.style.scss" />
