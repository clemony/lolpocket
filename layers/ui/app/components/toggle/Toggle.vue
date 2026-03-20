<script setup lang="ts">
import type { ToggleEmits } from "reka-ui"
import { Toggle, useForwardPropsEmits } from "reka-ui"
import { tv } from "tailwind-variants"
import type { ToggleButtonProps } from "~~/layers/ui/app/variants/toggle"
import buttonTheme from "../../theme/button"

const props = withDefaults(defineProps<ToggleButtonProps>(), {
  color: "p1",
  variant: "solid",
  size: "md"
})

const emits = defineEmits<ToggleEmits>()

const delegatedProps = reactiveOmit(
  props,
  "class",
  "activeClass",
  "inactiveClass",
  "ui",
  "label",
  "icon",
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
    rounded: props.rounded ?? undefined
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
          props.class
        ],
        active: modelValue === true,
        ...(modelValue && props.activeVariant
          ? { variant: props.activeVariant }
          : {}),
        ...(modelValue && props.activeColor ? { color: props.activeColor } : {})
      })
    ">
    <Icon
      v-if="props.icon"
      data-slot="leadingIcon"
      :name="props.icon"
      :class="
        styles?.leadingIcon?.({
          class: props.ui?.leadingIcon,
          active: modelValue === true
        })
      " />

    <span
      v-if="props.label"
      data-slot="label"
      :class="
        styles?.label?.({
          class: props.ui?.label,
          active: modelValue === true
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
          active: modelValue === true
        })
      " />

    <slot :model-value="modelValue" :ui="styles" />
  </Toggle>
</template>
