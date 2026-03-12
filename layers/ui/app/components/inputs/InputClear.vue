<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"

const {
  class: className,
  size = "2xs",
  ui,
  variant = "custom",
  color = "transparent",
} = defineProps<{
  class?: HTMLAttributes["class"]
  size?: ButtonProps["size"]
  variant?: ButtonProps["variant"]
  color?: ButtonProps["color"]
  ui?: ButtonProps["ui"]
}>()
const emit = defineEmits(["clearInput"])

const id = crypto.randomUUID()
</script>

<template>
  <label
    :for="id"
    :class="
      cn(
        '-mr-2 grid aspect-square h-12 shrink-0 cursor-pointer place-items-center',
        className,
      )
    ">
    <UButton
      :id
      :size
      :variant
      :color
      icon="i-x"
      :ui="{
        leadingIcon: 'opacity-50 **:stroke-[2.5] group-hover/btn:opacity-100',
        base: cn('pointer-events-auto shrink-0', ui?.base),
      }"
      square
      @click.stop="emit('clearInput')" />
  </label>
</template>
