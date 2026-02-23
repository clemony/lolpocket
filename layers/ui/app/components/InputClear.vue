<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"

const {
  class: className,
  size = "4xs",
  variant = "ghost",
} = defineProps<{
  class?: HTMLAttributes["class"]
  size?: ButtonProps["size"]
  variant?: ButtonProps["variant"]
  color?: ButtonProps["color"]
}>()
const emit = defineEmits(["clearInput"])
</script>

<template>
  <label
    v-auto-animate
    class="grid h-full w-6 cursor-pointer place-items-center">
    <UButton
      :size
      :variant
      icon="i-x"
      :ui="{
        leadingIcon: 'opacity-50 **:stroke-[3.2]',
        base: cn(
          'pointer-events-auto border-0 peer-has-[&_input]:opacity-0',
          className
        ),
      }"
      square
      @click.stop="emit('clearInput')" />
  </label>
</template>
