<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"

const {
  class: className,
  size = "2xs",
  variant = "custom",
  color = "transparent",
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
    :color
    icon="i-x"
    :ui="{
      leadingIcon: 'opacity-50 **:stroke-[2.5] group-hover/btn:opacity-100',
      base: cn('pointer-events-auto', className),
    }"
    square
    @click.stop="emit('clearInput')" />
</template>
