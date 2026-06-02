<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"

const {
  size = "md",
  ui,
  as
} = defineProps<{
  ui?: Record<string, HTMLAttributes["class"]>
  size?: ButtonProps["size"]
  as?: ButtonProps["as"]
}>()
</script>

<template>
  <UButton
    v-for="btn in backpackNav"
    :key="btn.label"
    :size
    :as
    v-bind="btn"
    :to="btn?.to"
    :ui="{
      base: cn('w-full', ui?.base),
      label: cn('grow', ui?.label),
      leadingIcon: cn('', ui?.leadingIcon),
      trailingIcon: cn('', ui?.trailingIcon)
    }" />
</template>
