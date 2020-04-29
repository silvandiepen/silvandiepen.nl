<template>
	<Container class="page-content">
		<div class="row center">
			<div class="column small-full medium-two-third">
				<div class="content">
					<slot></slot>
				</div>
			</div>
		</div>
	</Container>
</template>

<script>
import { Container } from '../Container';
export default {
	components: { Container }
};
</script>
<style lang="scss" src="./Content.style.scss" />
