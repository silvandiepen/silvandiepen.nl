<template>
	<InputField ref="optionParent" type="options">
		<label v-if="label" class="input-field__group-label">{{ label }}</label>
		<div
			ref="optionGroup"
			class="input-field__group"
			:class="[
				groupType
					? `input-field__group--${groupType}`
					: 'input-field__group--inline'
			]"
		>
			<InputOption
				v-for="(option, idx) in options"
				:key="idx"
				:checked="option.value"
				:disabled="disabled"
				:read-only="readOnly"
				:name="ID"
				:type="optionType"
				:label="option.label"
			/>
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
		...GroupProps
	},
	data: () => ({
		overruleGroupType: false
	}),
	computed: {
		groupType() {
			return this.overruleGroupType || this.$props.group;
		},
		optionType() {
			return this.$props.multi ? 'checkbox' : 'radio';
		}
	},
	mounted() {
		const elements = {
			parent: this.$refs.optionParent.$parent.$el.offsetWidth,
			group: this.$refs.optionGroup.offsetWidth
		};
		this.overruleGroupType = this.checkWidth(elements.parent, elements.group);
		if (
			this.$props.group === 'inline' ||
			this.$props.group === 'inline-space'
		) {
			window.addEventListener('resize', () => {
				this.overruleGroupType = false;
				setTimeout(() => {
					this.overruleGroupType = this.checkWidth(
						elements.parent,
						elements.group
					);
				}, 10);
			});
		}
	},
	methods: {
		checkWidth(parent, element) {
			if (parent < element) return 'stack';
			else return false;
		}
	}
};
</script>
<style lang="scss">
@import '~tools';
$base-border-radius: 1rem;

.input-field--options {
	.input-field--option {
		&:first-child {
			--border-top-left: #{$base-border-radius};
		}
		&:last-child {
			--border-bottom-right: #{$base-border-radius};
		}
	}
	.input-field__group {
		&--inline-space,
		&--stack-space {
			.input-field--option {
				--border: #{$base-border-radius};
			}
		}
		&--inline {
			.input-field--option:first-child {
				--border-bottom-left: #{$base-border-radius};
			}
			.input-field--option:last-child {
				--border-top-right: #{$base-border-radius};
			}
			.input-field--option:not(:first-child) label {
				margin-left: -2px; // border-left: 0px;
			}
		}
		&--inline,
		&--inline-space {
			.input-field__text {
				white-space: nowrap;
			}
		}
		&--stack {
			.input-field--option:first-child {
				--border-top-left: #{$base-border-radius};
				--border-top-right: #{$base-border-radius};
			}
			.input-field--option:last-child {
				--border-bottom-left: #{$base-border-radius};
				--border-bottom-right: #{$base-border-radius};
			}
			.input-field--option:not(:first-child) label {
				margin-top: -2px;
				//	border-top: 0px;
			}
		}
	}
}
</style>
