<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"

const {
  class: className,
  size,
  ui,
  variant,
  color = "transparent"
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
        className
      )
    ">
    <UButton
      :id
      :size
      :variant
      :color
      icon="i-x"
      :ui="{
        leadingIcon: cn(
          '**:stroke-[2.5]',
          color === 'neutral'
            ? '**:stroke-[2.6]'
            : 'opacity-50 group-hover/btn:opacity-100'
        ),
        base: cn('btn-2xs pointer-events-auto shrink-0', ui?.base)
      }"
      square
      @click.stop="emit('clearInput')" />
  </label>
</template>
