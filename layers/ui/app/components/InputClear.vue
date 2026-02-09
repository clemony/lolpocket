<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"

const {
  class: className,
  size = "2xs",
  variant = "solid",
} = defineProps<{
  class?: HTMLAttributes["class"]
  size?: ButtonProps["size"]
  variant?: ButtonProps["variant"]
  color?: ButtonProps["color"]
}>()
const emit = defineEmits(["clearInput"])
</script>

<template>
  <UButton
    :size
    :variant
    icon="i-x"
    :ui="{
      leadingIcon: 'size-4 opacity-70',
      base: cn(
        'pointer-events-auto peer-has-placeholder-shown:opacity-0',
        className
      ),
    }"
    rounded
    @click.stop="emit('clearInput')" />
</template>
