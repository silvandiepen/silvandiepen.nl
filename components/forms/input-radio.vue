<template>
	<InputField type="radio">
		<input
			:id="ID"
			type="radio"
			:checked="checked"
			:disabled="disabled"
			:read-only="readOnly"
			:name="name"
		/>
		<label :for="ID">
			<span class="input-field__text">{{ label }}</span>
			<slot></slot>
		</label>
	</InputField>
</template>

<script>
import InputBase from './input-base';
import { DefaultProps } from './props';
export default {
	extends: InputBase,
	props: {
		...DefaultProps
	}
};
</script>
<style lang="scss">
.input-field {
	&--radio {
		label {
			position: relative;
			display: block;
			padding-left: 1.5em;
		}
		input {
			position: absolute;
			clip-path: inset(100% 100% 100% 100%);
			opacity: 0;
		}
		input + label {
			&::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 0;
				display: block;
				width: 1em;
				height: 1em;
				box-shadow: 0 0 0 2px currentColor inset;
				border-radius: 50%;
				transform: translateY(-50%);
			}
			&::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 0.25em;
				display: block;
				width: 0.5em;
				height: 0.5em;
				border-radius: 50%;
				background-color: currentColor;
				transform: scale(0) translateY(-50%);
			}
		}
		input:checked + label {
			&::after {
				transform: scale(1) translateY(-50%);
			}
		}
	}
}
</style>
