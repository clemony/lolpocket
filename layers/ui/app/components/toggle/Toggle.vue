<script setup lang="ts">
import type { ToggleEmits, ToggleProps } from "reka-ui"
import { Toggle, useForwardPropsEmits } from "reka-ui"
import { tv } from "tailwind-variants"
import buttonTheme from "../../theme/button"

type ButtonColor = keyof typeof buttonTheme.variants.color
type ButtonVariant = keyof typeof buttonTheme.variants.variant
type ButtonSize = keyof typeof buttonTheme.variants.size

type ToggleButtonProps = ToggleProps & {
  class?: HTMLAttributes["class"]
  activeClass?: string
  inactiveClass?: string
  ui?: {
    base?: string
    label?: string
    leadingIcon?: string
    trailingIcon?: string
  }
  label?: string
  leadingIcon?: string
  trailingIcon?: string
  color?: ButtonColor
  activeColor?: ButtonColor
  variant?: ButtonVariant
  activeVariant?: ButtonVariant
  size?: ButtonSize
  square?: boolean
  rounded?: boolean
}

const props = withDefaults(defineProps<ToggleButtonProps>(), {
  color: "p1",
  variant: "solid",
  size: "md",
})

const emits = defineEmits<ToggleEmits>()

const delegatedProps = reactiveOmit(
  props,
  "class",
  "activeClass",
  "inactiveClass",
  "ui",
  "label",
  "leadingIcon",
  "trailingIcon",
  "color",
  "activeColor",
  "variant",
  "activeVariant",
  "size",
  "square",
  "rounded"
)

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const appConfig = useAppConfig()

function getActiveBaseClasses(active: boolean) {
  return active
    ? [appConfig.ui?.button?.variants?.active?.true?.base, props.activeClass]
    : [appConfig.ui?.button?.variants?.active?.false?.base, props.inactiveClass]
}

const styles = computed(() =>
  tv(buttonTheme as Parameters<typeof tv>[0])({
    color: props.color,
    variant: props.variant,
    size: props.size,
    square: props.square ?? undefined,
    rounded: props.rounded ?? undefined,
  })
)
</script>

<template>
  <Toggle
    v-slot="{ modelValue }"
    v-bind="forwarded"
    :class="
      styles.base({
        class: [
          getActiveBaseClasses(modelValue === true),
          props.ui?.base,
          props.class,
        ],
        active: modelValue === true,
        ...(modelValue && props.activeVariant
          ? { variant: props.activeVariant }
          : {}),
        ...(modelValue && props.activeColor ? { color: props.activeColor } : {}),
      })
    ">
    <Icon
      v-if="props.leadingIcon"
      data-slot="leadingIcon"
      :name="props.leadingIcon"
      :class="
        styles?.leadingIcon?.({
          class: props.ui?.leadingIcon,
          active: modelValue === true,
        })
      " />

    <span
      v-if="props.label"
      data-slot="label"
      :class="
        styles?.label?.({
          class: props.ui?.label,
          active: modelValue === true,
        })
      ">
      {{ props.label }}
    </span>

    <Icon
      v-if="props.trailingIcon"
      data-slot="trailingIcon"
      :name="props.trailingIcon"
      :class="
        styles?.trailingIcon?.({
          class: props.ui?.trailingIcon,
          active: modelValue === true,
        })
      " />

    <slot :model-value="modelValue" :ui="styles" />
  </Toggle>
</template>
