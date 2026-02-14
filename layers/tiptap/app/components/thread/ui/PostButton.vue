<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui/runtime/components/Button.d.vue.js"

const {
  color = "neutral",
  cancellable,
  change,
  icon: i,
  save,
} = defineProps<{
  save?: boolean
  change?: boolean
  cancellable?: boolean
  color?: ButtonProps["color"]
  icon?: string
}>()

const chosenIcon = computed(() => {
  if (i) return i

  return (
    !change && (cancellable || save) ? "x"
    : save && change ? "tick"
    : "send"
  )
})
</script>

<template>
  <UButton
    :ui="{
      leadingIcon: cn('size-4', { 'scale-110': save }),
      base: 'pr-6 pl-5 font-semibold',
    }"
    :label="
      !change && (cancellable || save) ? 'Cancel'
      : save && change ? 'Save'
        : 'Post'
    "
    :color
    :icon="chosenIcon"
    class=""
    size="sm">
    <template #label>
      <slot />
    </template>
  </UButton>
</template>
