<template>
	<InputField type="option">
		<input
			:id="ID"
			:type="type"
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
@import '~tools';
.input-field {
	&--option {
		&:only-of-type {
			--border: #{$base-border-radius};
		}
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
			// animation: bumpOut 0.1s;
			padding: 1em;
			border: 2px solid currentColor;
			border-radius: var(--border-top-left, var(--border, 0))
				var(--border-top-right, var(--border, 0))
				var(--border-bottom-right, var(--border, 0))
				var(--border-bottom-left, var(--border, 0));
		}
		input:focus + label {
			.input-field__text {
				display: block;
				transform: scale(1.05);
			}
		}
		input:checked + label {
			background-color: currentColor;
			animation: bump 0.15s;
			.input-field__text {
				color: var(--bg);
			}
			@at-root {
				@keyframes bump {
					0% {
						transform: scale(1);
					}

					80% {
						transform: scale(1.05);
					}

					100% {
						transform: scale(1);
					}
				}
				@keyframes bumpOut {
					0% {
						transform: scale(1);
					}

					80% {
						transform: scale(0.9);
					}

					100% {
						transform: scale(1);
					}
				}
			}
		}
	}
}
</style>
