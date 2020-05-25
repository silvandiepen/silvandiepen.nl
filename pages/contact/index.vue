<template>
	<main class="page page--about">
		<Heading>
			<h1>Get in touch!</h1>
			<h4>If you want...</h4>
		</Heading>
		<Content>
			<center>
				<Button link="mailto:me@silvandiepen.com" color="yellow" size="large"
					>me@silvandiepen.com
				</Button>
			</center>
		</Content>
	</main>
</template>
<script>
import { Heading, Content, Button } from '@/components';
export default {
	components: {
		Heading,
		Content,
		Button
	}
};
</script>
