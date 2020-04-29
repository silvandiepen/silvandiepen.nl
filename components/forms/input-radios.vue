<template>
	<InputField type="radios">
		<label v-if="label" class="input-field__group-label">{{ label }}</label>
		<div
			class="input-field__group"
			:class="[
				group ? `input-field__group--${group}` : 'input-field__group--stack'
			]"
		>
			<InputRadio
				v-for="(option, idx) in options"
				:key="idx"
				:checked="option.value"
				:disabled="disabled"
				:read-only="readOnly"
				:name="ID"
				:label="option.label"
			></InputRadio>
		</div>
	</InputField>
</template>

<script>
import InputBase from './input-base';
import { DefaultProps, GroupProps } from './props';
export default {
	extends: InputBase,
	props: {
		...DefaultProps,
		...GroupProps,
		inline: {
			type: Boolean,
			default: false
		}
	}
};
</script>
