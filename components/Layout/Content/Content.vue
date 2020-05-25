<template>
	<div class="content-container">
		<Container
			class="page-content"
			:class="background ? `background--${background}` : null"
		>
			<div class="row center">
				<div class="column small-full medium-two-third xlarge-half">
					<div class="content">
						<slot></slot>
					</div>
				</div>
			</div>
		</Container>
	</div>
</template>

<script>
import { Container } from '../Container';
export default {
	components: { Container },
	props: {
		background: {
			type: String,
			default: null
		}
	}
};
</script>
<style lang="scss" src="./Content.style.scss" />
