<template>
	<InputField type="text">
		<input
			:id="ID"
			class="input-field__input"
			type="text"
			:placeholder="placeholder"
		/>
		<label v-if="label" class="input-field__label" :for="ID">{{ label }}</label>
	</InputField>
</template>
<script>
import InputBase from './input-base';
import { DefaultProps, TextProps } from './props';
export default {
	extends: InputBase,
	props: {
		...DefaultProps,
		...TextProps
	}
};
</script>

<style lang="scss">
@import '~tools';
.input-field--text {
	display: flex;
	flex-direction: column-reverse;
	justify-content: start;
	.input-field {
		&__input {
			border: 2px solid currentColor;
			border-radius: $base-border-radius;
			background-color: transparent;
			color: currentColor;
			font-size: 1em;
			line-height: 1.5;
			padding: 1em;
			& + .input-field__label {
				margin-bottom: 1em;
			}
			&:focus {
				outline: none;
			}
			&::placeholder {
				color: currentColor;
				font-style: italic;
				opacity: 0.5;
			}
			&:placeholder-shown {
				opacity: 0.5;
			}
		}
		&__label {
		}
	}
}
</style>
